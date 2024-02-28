import { useEffect, useState } from 'react'


interface useScrollDistanceProps {
    distance: number
}


export function useScrollDistance({ distance }: useScrollDistanceProps) {
    const [isScrollDistanceReached, setIsScrollDistanceReached] = useState(window.scrollY > distance)
    const handleScroll = () => setIsScrollDistanceReached(window.scrollY > distance)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return isScrollDistanceReached
}
