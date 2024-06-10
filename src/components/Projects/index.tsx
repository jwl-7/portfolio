import styles from './projects.module.sass'

import { Zoom } from 'react-awesome-reveal'

import ProjectCard from '@components/ProjectCard'
import ProjectList from '@components/Projects/projectlist'


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
                                imgSrc={project.imgSrc}
                                technology={project.technology}
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
