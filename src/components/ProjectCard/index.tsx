import styles from './projectcard.module.sass'

import Download from '@icons/Download'
import GithubLight from '@icons/GithubLight'
import MacDesktop from '@icons/MacDesktop'


interface ProjectCardProps {
    imgSrc: string
    imgAlt: string
    title: string
    description: string
    sourceUrl?: string
    downloadUrl?: string
    liveUrl?: string
}


export default function ProjectCard(props: ProjectCardProps) {
    const { imgSrc, imgAlt, title, description, sourceUrl, downloadUrl, liveUrl } = props

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={imgSrc} alt={imgAlt} height="400" width="600" />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{description}</p>
                <div className={styles.cardButtons}>
                    {sourceUrl && <a href={sourceUrl} role="button" target="_blank"><GithubLight /> Source</a>}
                    {downloadUrl && <a href={downloadUrl} role="button" target="_blank"><Download /> Download</a>}
                    {liveUrl && <a href={liveUrl} role="button" target="_blank"><MacDesktop /> Live</a>}
                </div>
            </div>
        </div>
    )
}
