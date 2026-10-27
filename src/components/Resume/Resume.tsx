import styles from './Resume.module.sass'
import { Fade, Flip } from 'react-awesome-reveal'
import Icons from '@/icons/Icons'

interface Skill {
    label: string
    icon?: string
}

interface SkillCard {
    title: string
    skills: Skill[]
    usedIn?: string
}

const SKILL_CARDS: SkillCard[] = [{
        title: 'Languages',
        skills: [
            { label: 'TypeScript', icon: 'TypeScript' },
            { label: 'JavaScript', icon: 'JavaScript' },
            { label: 'Python', icon: 'Python' },
            { label: 'Lua', icon: 'Lua' },
            { label: 'C#', icon: 'Csharp' },
            { label: 'Swift', icon: 'Swift' }
        ]
    }, {
        title: 'AI',
        skills: [
            { label: 'RAG pipelines with a custom vector DB' },
            { label: 'Semantic search' },
            { label: 'Local LLMs via Ollama (Qwen, DeepSeek, Gemma)' },
            { label: 'Agentic coding with Claude Code & OpenCode' }
        ],
        usedIn: 'Synthos, EmmyLua Semantic Search'
    }, {
        title: 'Games & Simulation',
        skills: [
            { label: 'Assetto Corsa modding', icon: 'Lua' },
            { label: 'Blender', icon: 'Blender' },
            { label: 'SwiftUI & SpriteKit', icon: 'Swift' },
            { label: 'PyGame', icon: 'PyGame' }
        ],
        usedIn: 'Traffic Underground, CrashFX, Glassometer, On Guard'
    }, {
        title: 'Web',
        skills: [
            { label: 'React', icon: 'React' },
            { label: 'Sass', icon: 'Sass' },
            { label: 'Django', icon: 'Django' },
            { label: 'PostgreSQL', icon: 'PostgreSQL' },
            { label: 'SQLite', icon: 'SQLite' }
        ],
        usedIn: 'Fruit Slots, LeetCode Cheatsheet, this site'
    }, {
        title: 'Tools',
        skills: [
            { label: 'Git', icon: 'Git' },
            { label: 'GitHub', icon: 'GitHub' },
            { label: 'Docker', icon: 'Docker' },
            { label: 'Linux', icon: 'Linux' }
        ]
    }
]

export default function Resume() {
    const renderSkill = ({ label, icon }: Skill) => {
        const SvgIcon = icon ? Icons[icon] : undefined
        return (
            <li key={label}>
                {SvgIcon ? <SvgIcon /> : <span className={styles.bullet}>&gt;</span>}
                {label}
            </li>
        )
    }

    return (
        <section id="resume" className={styles.container}>
            <div className={styles.title}>
                <h2>Resume</h2>
                <hr />
            </div>

            <Fade triggerOnce>
                <div className={styles.shipped}>
                    <div className={styles.stat}>10,000+</div>
                    <div>
                        <h3 className={styles.cardTitle}>Downloads on Vosan</h3>
                        <p className={styles.cardBody}>
                            Independent developer of Assetto Corsa mods, including Traffic Underground and CrashFX.
                        </p>
                    </div>
                </div>
            </Fade>

            <div className={styles.contentContainer}>
                <Flip direction="horizontal" triggerOnce>
                    {SKILL_CARDS.map(card => (
                        <div key={card.title} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <hr />
                                <ul className={styles.list}>{card.skills.map(renderSkill)}</ul>
                                {card.usedIn && <p className={styles.usedIn}>Used in: {card.usedIn}</p>}
                            </div>
                        </div>
                    ))}

                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Education</h3>
                            <hr />
                            <div className={styles.education}>
                                <Icons.UtcLogo />
                                <div>
                                    University of Tennessee at Chattanooga<br />
                                    B.S. Computer Science: Information Security and Assurance
                                </div>
                            </div>
                        </div>
                    </div>
                </Flip>
            </div>

            <div className={styles.buttonContainer}>
                <a href="./files/resume.pdf" className={styles.button} role="button" target="_blank">
                    <Icons.File /> View Resume PDF
                </a>
            </div>
        </section>
    )
}
