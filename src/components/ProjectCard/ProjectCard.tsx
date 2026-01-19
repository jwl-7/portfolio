import styles from './ProjectCard.module.sass'
import Icons from '@icons/Icons'
import Screen from '@components/Screen/Screen'

interface ProjectCardProps {
    imageSource: string
    technology: Array<string>
    title: string
    description: string
    sourceUrl?: string
    downloadUrl?: string
    liveUrl?: string
}

export default function ProjectCard({
    imageSource,
    title,
    technology,
    description,
    sourceUrl,
    downloadUrl,
    liveUrl
}: ProjectCardProps) {
    const getImgAltFromFilename = (): string => {
        const imageName = imageSource.substring(imageSource.lastIndexOf('/') + 1, imageSource.lastIndexOf('.webp'))
        return imageName.replace('-ss', ' screenshot')
    }

    const renderTechnologyIcons = () => {
        return technology.map(icon => {
            const SvgIcon = Icons[icon]
            return <SvgIcon key={icon} />
        })
    }

    const renderButtons = () => {
        return (
            <>
                {sourceUrl && <a href={sourceUrl} role="button" target="_blank"><Icons.GitHubLight /> Source</a>}
                {downloadUrl && <a href={downloadUrl} role="button" target="_blank"><Icons.Download /> Download</a>}
                {liveUrl && <a href={liveUrl} role="button" target="_blank"><Icons.MacDesktop /> Live</a>}
            </>
        )
    }

    return (
        <div className={styles.card}>
            <Screen imageSource={imageSource} alt={getImgAltFromFilename()} />
            <div className={styles.cardContent}>
                <div className={styles.cardIcons}>{renderTechnologyIcons()}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{description}</p>
                <div className={styles.cardButtons}>{renderButtons()} </div>
            </div>
        </div>
    )
}
