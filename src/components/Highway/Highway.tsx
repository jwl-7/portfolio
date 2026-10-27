import styles from './Highway.module.sass'
import { useEffect, useRef } from 'react'
import prefersReducedMotion from '@utils/prefersReducedMotion'

// all distances are in lane widths so the scene scales with the canvas
const LANES = 4
const SHOULDER = 0.35
const ROAD_WIDTH = LANES + SHOULDER * 2
const CAR_WIDTH = 0.52
const CAR_LENGTH = 1.05
const PLAYER_Y = 0.72
const CRUISE_SPEED = 9
const BOOST_SPEED = 14
const LOOKAHEAD = 1.8
const MAX_TRAFFIC = 9

const PLAYER_COLOR = '#78dce8'
const TRAFFIC_COLORS = ['#ff6188', '#ffd866', '#a9dc76', '#ab9df2', '#fc9867', '#e9ecef', '#82bfff']

interface Car {
    lane: number
    y: number
    speed: number
    desiredSpeed: number
    color: string
}

interface Player {
    lane: number
    x: number
    speed: number
    tilt: number
    cooldown: number
}

const laneCenter = (lane: number): number => SHOULDER + lane + 0.5
const laneAt = (x: number): number => Math.max(0, Math.min(LANES - 1, Math.round(x - SHOULDER - 0.5)))
const random = (min: number, max: number): number => min + Math.random() * (max - min)

export default function Highway() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        let unit = 1
        let viewHeight = 6
        let scroll = 0
        let spawnTimer = 0
        let isBoosting = false
        let boostTimeout = 0
        let frame = 0
        let lastTime = 0
        let isVisible = false

        const traffic: Car[] = []
        const player: Player = { lane: 1, x: laneCenter(1), speed: CRUISE_SPEED, tilt: 0, cooldown: 0 }
        const playerY = () => viewHeight * PLAYER_Y
        const playerLanes = () => new Set([player.lane, laneAt(player.x)])

        // nearest car ahead of y in a lane, optionally counting the player as a car
        const findLeader = (lane: number, y: number, includePlayer: boolean) => {
            let gap = Infinity
            let speed = Infinity
            for (const car of traffic) {
                if (car.lane !== lane || car.y >= y) continue
                const carGap = y - car.y - CAR_LENGTH
                if (carGap < gap) {
                    gap = carGap
                    speed = car.speed
                }
            }
            if (includePlayer && playerLanes().has(lane) && playerY() < y) {
                const carGap = y - playerY() - CAR_LENGTH
                if (carGap < gap) {
                    gap = carGap
                    speed = player.speed
                }
            }
            return { gap, speed }
        }

        const gapBehind = (lane: number, y: number): number => {
            let gap = Infinity
            for (const car of traffic) {
                if (car.lane !== lane || car.y <= y) continue
                gap = Math.min(gap, car.y - y - CAR_LENGTH)
            }
            return gap
        }

        const spawnCar = () => {
            // never fill every lane near the top, so there's always a way through
            const blocked = new Set(traffic.filter(car => car.y < 2.5).map(car => car.lane))
            const openLanes = [...Array(LANES).keys()].filter(lane => !blocked.has(lane))
            if (openLanes.length <= 1) return

            const lane = openLanes[Math.floor(Math.random() * openLanes.length)]
            const desiredSpeed = random(4.5, 7.5)
            traffic.push({
                lane,
                y: -CAR_LENGTH,
                speed: desiredSpeed,
                desiredSpeed,
                color: TRAFFIC_COLORS[Math.floor(Math.random() * TRAFFIC_COLORS.length)]
            })
        }

        const updatePlayer = (dt: number) => {
            const y = playerY()
            const leader = findLeader(player.lane, y, false)
            player.cooldown -= dt

            // boxed in: look for the adjacent lane with the most room
            if (leader.gap < LOOKAHEAD && player.cooldown <= 0) {
                let bestLane = player.lane
                let bestGap = leader.gap + 0.3
                for (const lane of [player.lane - 1, player.lane + 1]) {
                    if (lane < 0 || lane >= LANES) continue
                    const ahead = findLeader(lane, y, false).gap
                    if (ahead > bestGap && ahead > 0.9 && gapBehind(lane, y) > 0.4) {
                        bestLane = lane
                        bestGap = ahead
                    }
                }
                if (bestLane !== player.lane) {
                    player.lane = bestLane
                    player.cooldown = 0.45
                }
            }

            const current = findLeader(player.lane, y, false)
            const desiredSpeed = isBoosting ? BOOST_SPEED : CRUISE_SPEED
            const targetSpeed = current.gap < 1.4 ? Math.min(desiredSpeed, current.speed) : desiredSpeed
            player.speed += (targetSpeed - player.speed) * Math.min(1, dt * 3)
            if (current.gap < 0.25) player.speed = Math.min(player.speed, current.speed)

            const lateralSpeed = (laneCenter(player.lane) - player.x) * 7
            player.x += lateralSpeed * dt
            player.tilt = Math.max(-0.25, Math.min(0.25, lateralSpeed * 0.035))
        }

        const updateTraffic = (dt: number) => {
            for (const car of traffic) {
                const leader = findLeader(car.lane, car.y, true)
                const targetSpeed = leader.gap < 1.2 ? Math.min(car.desiredSpeed, leader.speed) : car.desiredSpeed
                car.speed += (targetSpeed - car.speed) * Math.min(1, dt * 3)
                if (leader.gap < 0.15) car.speed = Math.min(car.speed, leader.speed)
                car.y += (player.speed - car.speed) * dt
            }

            for (let i = traffic.length - 1; i >= 0; i--) {
                if (traffic[i].y > viewHeight + 2 || traffic[i].y < -5) traffic.splice(i, 1)
            }

            spawnTimer -= dt
            if (spawnTimer <= 0 && traffic.length < MAX_TRAFFIC) {
                spawnCar()
                spawnTimer = random(0.25, 0.7)
            }
        }

        const update = (dt: number) => {
            scroll = (scroll + player.speed * dt) % 1.5
            updatePlayer(dt)
            updateTraffic(dt)
        }

        const drawRoad = () => {
            ctx.fillStyle = '#2b2c3d'
            ctx.fillRect(0, 0, ROAD_WIDTH * unit, viewHeight * unit)

            ctx.fillStyle = '#25263a'
            ctx.fillRect(0, 0, SHOULDER * unit, viewHeight * unit)
            ctx.fillRect((ROAD_WIDTH - SHOULDER) * unit, 0, SHOULDER * unit, viewHeight * unit)

            ctx.fillStyle = 'rgba(255, 216, 102, 0.75)'
            ctx.fillRect(SHOULDER * unit - 2, 0, 3, viewHeight * unit)
            ctx.fillRect((ROAD_WIDTH - SHOULDER) * unit - 1, 0, 3, viewHeight * unit)

            ctx.fillStyle = 'rgba(233, 236, 239, 0.55)'
            for (let lane = 1; lane < LANES; lane++) {
                const x = (SHOULDER + lane) * unit - 1
                for (let y = scroll - 1.5; y < viewHeight; y += 1.5) {
                    ctx.fillRect(x, y * unit, 2, 0.6 * unit)
                }
            }
        }

        const drawCar = (x: number, y: number, color: string, tilt: number, isPlayer: boolean) => {
            const width = CAR_WIDTH * unit
            const length = CAR_LENGTH * unit

            ctx.save()
            ctx.translate(x * unit, y * unit)
            ctx.rotate(tilt)

            // headlight beams
            const beam = ctx.createLinearGradient(0, -length / 2, 0, -length * 1.6)
            beam.addColorStop(0, `rgba(255, 236, 158, ${isPlayer ? 0.28 : 0.14})`)
            beam.addColorStop(1, 'rgba(255, 236, 158, 0)')
            ctx.fillStyle = beam
            ctx.beginPath()
            ctx.moveTo(-width * 0.4, -length / 2)
            ctx.lineTo(width * 0.4, -length / 2)
            ctx.lineTo(width * 0.8, -length * 1.6)
            ctx.lineTo(-width * 0.8, -length * 1.6)
            ctx.fill()

            if (isPlayer) {
                ctx.shadowColor = PLAYER_COLOR
                ctx.shadowBlur = 24
            } else {
                ctx.shadowColor = 'rgba(0, 0, 0, 0.45)'
                ctx.shadowBlur = 8
                ctx.shadowOffsetY = 4
            }

            ctx.fillStyle = color
            ctx.beginPath()
            ctx.roundRect(-width / 2, -length / 2, width, length, width * 0.3)
            ctx.fill()

            ctx.shadowColor = 'transparent'
            ctx.fillStyle = 'rgba(20, 22, 35, 0.8)'
            ctx.beginPath()
            ctx.roundRect(-width * 0.38, -length * 0.22, width * 0.76, length * 0.2, 3)
            ctx.roundRect(-width * 0.36, length * 0.16, width * 0.72, length * 0.14, 3)
            ctx.fill()

            ctx.shadowBlur = 8
            ctx.shadowColor = '#ffec9e'
            ctx.fillStyle = '#ffec9e'
            ctx.fillRect(-width * 0.42, -length / 2, width * 0.22, 3)
            ctx.fillRect(width * 0.2, -length / 2, width * 0.22, 3)

            ctx.shadowColor = '#ff4d4d'
            ctx.fillStyle = '#ff4d4d'
            ctx.fillRect(-width * 0.42, length / 2 - 3, width * 0.22, 3)
            ctx.fillRect(width * 0.2, length / 2 - 3, width * 0.22, 3)

            ctx.restore()
        }

        const draw = () => {
            drawRoad()
            for (const car of traffic) drawCar(laneCenter(car.lane), car.y, car.color, 0, false)
            drawCar(player.x, playerY(), PLAYER_COLOR, player.tilt, true)
        }

        const resize = () => {
            if (!canvas.clientWidth || !canvas.clientHeight) return
            const dpr = window.devicePixelRatio || 1
            canvas.width = canvas.clientWidth * dpr
            canvas.height = canvas.clientHeight * dpr
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            unit = canvas.clientWidth / ROAD_WIDTH
            viewHeight = canvas.clientHeight / unit
            draw()
        }

        const loop = (time: number) => {
            const dt = Math.min((time - lastTime) / 1000, 0.05)
            lastTime = time
            update(dt)
            draw()
            frame = requestAnimationFrame(loop)
        }

        const start = () => {
            if (frame) return
            lastTime = performance.now()
            frame = requestAnimationFrame(loop)
        }

        const stop = () => {
            cancelAnimationFrame(frame)
            frame = 0
        }

        const reducedMotion = prefersReducedMotion()
        const resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(canvas)

        // fill the road with traffic before the first frame
        resize()
        for (let i = 0; i < 150; i++) update(1 / 30)
        draw()

        const visibilityObserver = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting
            if (isVisible && !reducedMotion) start()
            else stop()
        })
        visibilityObserver.observe(canvas)

        // hover boosts with a mouse, a tap boosts for a couple seconds on touch
        const boostFor = (ms: number) => {
            isBoosting = true
            clearTimeout(boostTimeout)
            if (ms) boostTimeout = window.setTimeout(() => isBoosting = false, ms)
        }
        const boost = (event: PointerEvent) => {
            if (event.pointerType === 'mouse') boostFor(0)
        }
        const unboost = (event: PointerEvent) => {
            if (event.pointerType === 'mouse') boostFor(300)
        }
        const tapBoost = (event: PointerEvent) => {
            if (event.pointerType !== 'mouse') boostFor(2000)
        }

        canvas.addEventListener('pointerenter', boost)
        canvas.addEventListener('pointerleave', unboost)
        canvas.addEventListener('pointerdown', tapBoost)

        return () => {
            stop()
            clearTimeout(boostTimeout)
            resizeObserver.disconnect()
            visibilityObserver.disconnect()
            canvas.removeEventListener('pointerenter', boost)
            canvas.removeEventListener('pointerleave', unboost)
            canvas.removeEventListener('pointerdown', tapBoost)
        }
    }, [])

    return (
        <div className={styles.container}>
            <canvas
                ref={canvasRef}
                className={styles.highway}
                role="img"
                aria-label="Animated top-down view of a car weaving through highway traffic"
            />
        </div>
    )
}
