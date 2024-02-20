import styles from './resume.module.sass'

import { Flip } from 'react-awesome-reveal'

import Bootstrap from '@icons/Bootstrap'
import CircleCi from '@icons/CircleCi'
import Cypress from '@icons/Cypress'
import Django from '@icons/Django'
import Docker from '@icons/Docker'
import Git from '@icons/Git'
import Github from '@icons/Github'
import File from '@icons/File'
import JavaScript from '@icons/Javascript'
import Linux from '@icons/Linux'
import Mui from '@icons/Mui'
import MySql from '@/icons/Mysql'
import Python from '@icons/Python'
import React from '@icons/React'
import Sass from '@icons/Sass'
import SourcePawn from '@icons/Sourcemod'
import SQLite from '@icons/Sqlite'
import UTC from '@icons/UtcLogo'
import VSCode from '@icons/Vscode'


export default function Resume() {
    return (
        <section id="resume" className={styles.container}>
            <div className={styles.title}>
                <h1>Resume</h1>
                <hr />
            </div>
            <div className={styles.contentContainer}>
                <Flip direction="horizontal" triggerOnce>
                    <div className={styles.cardGroup}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>Education</h2>
                                <hr />
                                <div className={styles.cardBody}>
                                    <UTC />
                                    &nbsp;&nbsp;University of Tennessee at Chattanooga<br />
                                    B.S. Computer Science: Information Security and Assurance
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>Programming Languages</h2>
                                <hr />
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li><Python />&nbsp;&nbsp;Python</li>
                                        <li><JavaScript />&nbsp;&nbsp;JavaScript</li>
                                        <li><SourcePawn />&nbsp;&nbsp;SourcePawn</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardGroup}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>Frontend</h2>
                                <hr />
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li><React />&nbsp;&nbsp;React</li>
                                        <li><Cypress />&nbsp;&nbsp;Cypress</li>
                                        <li><Sass />&nbsp;&nbsp;Sass</li>
                                        <li><Bootstrap />&nbsp;&nbsp;Bootstrap</li>
                                        <li><Mui />&nbsp;&nbsp;MaterialUI</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <h2 className={styles.cardTitle}>Backend</h2>
                                <hr />
                                <div className={styles.cardBody}>
                                    <ul className={styles.list}>
                                        <li><Django />&nbsp;&nbsp;Django</li>
                                        <li><MySql />&nbsp;&nbsp;MySQL</li>
                                        <li><SQLite />&nbsp;&nbsp;SQLite</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Tools</h2>
                            <hr />
                            <div className={styles.cardBody}>
                                <ul className={styles.list}>
                                    <li><VSCode />&nbsp;&nbsp;VSCode</li>
                                    <li><Linux />&nbsp;&nbsp;Linux</li>
                                    <li><Git />&nbsp;&nbsp;Git</li>
                                    <li><Github />&nbsp;&nbsp;GitHub</li>
                                    <li><CircleCi />&nbsp;&nbsp;CircleCi</li>
                                    <li><Docker />&nbsp;&nbsp;Docker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Flip>
            </div>
            <div className={styles.buttonContainer}>
                <a href="./files/resume.pdf" className={styles.button} role="button" target="_blank">
                    <File /> View Resume PDF
                </a>
            </div>
        </section>
    )
}
