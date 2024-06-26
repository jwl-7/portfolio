import styles from './projectcard.module.sass'

import { Icons } from '@/icons'
import { Screen } from '@components/Screen'


interface ProjectCardProps {
    imgSrc: string
    technology: Array<string>
    title: string
    description: string
    sourceUrl?: string
    downloadUrl?: string
    liveUrl?: string
}


export function ProjectCard({
    imgSrc,
    title,
    technology,
    description,
    sourceUrl,
    downloadUrl,
    liveUrl
}: ProjectCardProps) {
    const getImgAltFromFilename = (): string => {
        const imageName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1, imgSrc.lastIndexOf('.webp'))
        return imageName.replace('-ss', ' screenshot')
    }

    const renderTechnologyIcons = () => {
        return technology.map(name => {
            const iconName = `Svg${name}`
            const SvgIcon = Icons[iconName]
            return <SvgIcon key={iconName} />
        })
    }

    const renderButtons = () => {
        return (
            <>
                {sourceUrl && <a href={sourceUrl} role="button" target="_blank"><Icons.SvgGitHubLight /> Source</a>}
                {downloadUrl && <a href={downloadUrl} role="button" target="_blank"><Icons.SvgDownload /> Download</a>}
                {liveUrl && <a href={liveUrl} role="button" target="_blank"><Icons.SvgMacDesktop /> Live</a>}
            </>
        )
    }

    return (
        <div className={styles.card}>
            <Screen imgSrc={imgSrc} alt={getImgAltFromFilename()} />
            <div className={styles.cardContent}>
                <div className={styles.cardIcons}>{renderTechnologyIcons()}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{description}</p>
                <div className={styles.cardButtons}>{renderButtons()} </div>
            </div>
        </div>
    )
}
