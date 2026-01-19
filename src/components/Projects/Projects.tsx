import styles from './Projects.module.sass'
import { Zoom } from 'react-awesome-reveal'
import ProjectCard from '@components/ProjectCard/ProjectCard'
import ProjectList from './ProjectList'

export default function Projects() {
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
                                key={project.title}
                                title={project.title}
                                technology={project.technology}
                                description={project.description}
                                imageSource={project.imageSource}
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
