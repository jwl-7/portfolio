import styles from './projects.module.sass'

import { Zoom } from 'react-awesome-reveal'

import ProjectCard from '@components/ProjectCard'
import ProjectList from '@components/Projects/projectlist'


export default function Projects() {
    const getImgAltFromFilename = (imgSrc: string): string => {
        const imageName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1, imgSrc.lastIndexOf('.webp'))
        return imageName.replace('-ss', ' screenshot')
    }

    return (
        <section id="projects" className={styles.container}>
            <div className={styles.title}>
                <h2>Projects</h2>
                <hr />
            </div>
            <Zoom triggerOnce>
                <div className={styles.contentContainer}>
                    {ProjectList.map(project => {
                        return (
                            <ProjectCard
                                imgSrc={project.imgSrc}
                                imgAlt={getImgAltFromFilename(project.imgSrc)}
                                title={project.title}
                                description={project.description}
                                sourceUrl={project?.sourceUrl}
                                downloadUrl={project?.downloadUrl}
                                liveUrl={project?.liveUrl}
                            />
                        )
                    })}
                </div>
            </Zoom>
        </section>
    )
}
