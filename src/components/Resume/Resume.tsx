import styles from './Resume.module.sass'
import { Flip } from 'react-awesome-reveal'
import Icons from '@/icons/Icons'

export default function Resume() {
    return (
        <section id="resume" className={styles.container}>
            <div className={styles.title}>
                <h2>Resume</h2>
                <hr />
            </div>
            <div className={styles.contentContainer}>
                <Flip direction="horizontal" triggerOnce>
                    <div className={styles.cardGroup}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Education</h3>
                                <hr />
                                <div className={styles.cardBody}>
                                    <Icons.UtcLogo />
                                    &nbsp;&nbsp;University of Tennessee at Chattanooga<br />
                                    B.S. Computer Science: Information Security and Assurance
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Programming Languages</h3>
                                <hr />
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li><Icons.Python />&nbsp;&nbsp;Python</li>
                                        <li><Icons.JavaScript />&nbsp;&nbsp;JavaScript</li>
                                        <li><Icons.TypeScript />&nbsp;&nbsp;TypeScript</li>
                                        <li><Icons.Csharp />&nbsp;&nbsp;C#</li>
                                        <li><Icons.Lua />&nbsp;&nbsp;Lua</li>
                                        <li><Icons.SourceMod />&nbsp;&nbsp;SourcePawn</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardGroup}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Frontend</h3>
                                <hr />
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li><Icons.React />&nbsp;&nbsp;React</li>
                                        <li><Icons.Cypress />&nbsp;&nbsp;Cypress</li>
                                        <li><Icons.Sass />&nbsp;&nbsp;Sass</li>
                                        <li><Icons.Bootstrap />&nbsp;&nbsp;Bootstrap</li>
                                        <li><Icons.MUI />&nbsp;&nbsp;MaterialUI</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Backend</h3>
                                <hr />
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li><Icons.Django />&nbsp;&nbsp;Django</li>
                                        <li><Icons.PostgreSQL />&nbsp;&nbsp;PostgreSQL</li>
                                        <li><Icons.SQLite />&nbsp;&nbsp;SQLite</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Tools</h3>
                            <hr />
                            <div className={styles.cardBody}>
                                <ul className={styles.list}>
                                    <li><Icons.VSCode />&nbsp;&nbsp;VS Code</li>
                                    <li><Icons.Linux />&nbsp;&nbsp;Linux</li>
                                    <li><Icons.Git />&nbsp;&nbsp;Git</li>
                                    <li><Icons.GitHub />&nbsp;&nbsp;GitHub</li>
                                    <li><Icons.CircleCi />&nbsp;&nbsp;CircleCi</li>
                                    <li><Icons.Docker />&nbsp;&nbsp;Docker</li>
                                </ul>
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
