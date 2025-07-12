import styles from './resume.module.sass'

import { Flip } from 'react-awesome-reveal'
import { Icons } from '@/icons'


export function Resume() {
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
                                    <Icons.SvgUtcLogo />
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
                                        <li><Icons.SvgPython />&nbsp;&nbsp;Python</li>
                                        <li><Icons.SvgJavaScript />&nbsp;&nbsp;JavaScript</li>
                                        <li><Icons.SvgTypeScript />&nbsp;&nbsp;TypeScript</li>
                                        <li><Icons.SvgCsharp />&nbsp;&nbsp;C#</li>
                                        <li><Icons.SvgLua />&nbsp;&nbsp;Lua</li>
                                        <li><Icons.SvgSourceMod />&nbsp;&nbsp;SourcePawn</li>
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
                                        <li><Icons.SvgReact />&nbsp;&nbsp;React</li>
                                        <li><Icons.SvgCypress />&nbsp;&nbsp;Cypress</li>
                                        <li><Icons.SvgSass />&nbsp;&nbsp;Sass</li>
                                        <li><Icons.SvgBootstrap />&nbsp;&nbsp;Bootstrap</li>
                                        <li><Icons.SvgMUI />&nbsp;&nbsp;MaterialUI</li>
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
                                        <li><Icons.SvgDjango />&nbsp;&nbsp;Django</li>
                                        <li><Icons.SvgPostgreSQL />&nbsp;&nbsp;PostgreSQL</li>
                                        <li><Icons.SvgSQLite />&nbsp;&nbsp;SQLite</li>
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
                                    <li><Icons.SvgVSCode />&nbsp;&nbsp;VS Code</li>
                                    <li><Icons.SvgLinux />&nbsp;&nbsp;Linux</li>
                                    <li><Icons.SvgGit />&nbsp;&nbsp;Git</li>
                                    <li><Icons.SvgGitHub />&nbsp;&nbsp;GitHub</li>
                                    <li><Icons.SvgCircleCi />&nbsp;&nbsp;CircleCi</li>
                                    <li><Icons.SvgDocker />&nbsp;&nbsp;Docker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Flip>
            </div>
            <div className={styles.buttonContainer}>
                <a href="./files/resume.pdf" className={styles.button} role="button" target="_blank">
                    <Icons.SvgFile /> View Resume PDF
                </a>
            </div>
        </section>
    )
}
