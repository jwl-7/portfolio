import styles from './Resume.module.sass'
import { Flip } from 'react-awesome-reveal'
import Icons from '@/icons/Icons'

interface Skill {
    label: string
    icon?: string
}

interface SkillCard {
    title: string
    skills: Skill[]
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
            { label: 'Claude Code', icon: 'ClaudeCode' },
            { label: 'Ollama', icon: 'Ollama' },
            { label: 'RAG pipelines', icon: 'Rag' },
            { label: 'Vector databases', icon: 'VectorDatabase' }
        ]
    }, {
        title: 'Web',
        skills: [
            { label: 'React', icon: 'React' },
            { label: 'Sass', icon: 'Sass' },
            { label: 'Django', icon: 'Django' },
            { label: 'PostgreSQL', icon: 'PostgreSQL' },
            { label: 'SQLite', icon: 'SQLite' }
        ]
    }, {
        title: 'DevOps & Cloud',
        skills: [
            { label: 'GitHub Actions', icon: 'GitHubActions' },
            { label: 'CircleCI', icon: 'CircleCi' },
            { label: 'Cloudflare Workers', icon: 'CloudflareWorkers' },
            { label: 'Docker', icon: 'Docker' }
        ]
    }, {
        title: 'Tools',
        skills: [
            { label: 'Git', icon: 'Git' },
            { label: 'GitHub', icon: 'GitHub' },
            { label: 'Linux', icon: 'Linux' },
            { label: 'Blender', icon: 'Blender' }
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

            <div className={styles.contentContainer}>
                <Flip direction="horizontal" triggerOnce>
                    {SKILL_CARDS.map(card => (
                        <div key={card.title} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <hr />
                                <ul className={styles.list}>{card.skills.map(renderSkill)}</ul>
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
                                    <div className={styles.school}>University of Tennessee at Chattanooga</div>
                                    <div>B.S. Computer Science</div>
                                    <div className={styles.concentration}>Information Security & Assurance</div>
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
