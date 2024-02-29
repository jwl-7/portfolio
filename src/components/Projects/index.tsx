import styles from './projects.module.sass'

import { Zoom } from 'react-awesome-reveal'

import Download from '@icons/Download'
import GithubLight from '@icons/GithubLight'
import MacDesktop from '@icons/MacDesktop'

import CodeGrind from '@images/codegrind-ss.webp'
import Codex from '@images/codex-ss.webp'
import KZBot from '@images/kzbot-ss.webp'
import LeetCodeThemes from '@images/leetcode-themes-ss.webp'
import NadeSpace from '@images/nadespace-ss.webp'
import Portfolio from '@images/portfolio-ss.webp'
import StickBop from '@images/stickbop-ss.webp'


export default function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <div className={styles.title}>
                <h1>Projects</h1>
                <hr />
            </div>
            <Zoom triggerOnce>
                <div className={styles.contentContainer}>
                    <div className={styles.card}>
                        <img className={styles.cardImage} src={NadeSpace} alt="nade.space-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>nade.space</h2>
                            <p className={styles.cardBody}>An interactive web-app for learning nades in CS:GO.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/nade.space" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                                <a href="https://jwl-7.github.io/nade.space/" role="button" target="_blank">
                                    <MacDesktop /> Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.cardImage} src={StickBop} alt="Stick Bop!-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Stick Bop!</h2>
                            <p className={styles.cardBody}>A python game inspired by the 90s Bop It! toy.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/Stick-Bop" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                                <a href="https://github.com/jwl-7/Stick-Bop/releases" role="button" target="_blank">
                                    <Download /> Download
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.cardImage} src={Codex} alt="Codex-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Codex</h2>
                            <p className={styles.cardBody}>A python discord bot with Markov chain responses, slots, and more.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/Codex" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.cardImage} src={Portfolio} alt="Portfolio-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Cyberfolio</h2>
                            <p className={styles.cardBody}>A modern portfolio website made with ReactJS.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/portfolio" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.cardImage} src={CodeGrind} alt="C0de Gr1nd-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>c0de_gr1nd</h2>
                            <p className={styles.cardBody}>An interactive web-app for learning nades in CS:GO.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/c0de_gr1nd" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.cardImage} src={KZBot} alt="KZBOT-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>KZBOT</h2>
                            <p className={styles.cardBody}>A python discord bot for CS:GO KZ community servers.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/kzbot" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img className={styles.cardImage} src={LeetCodeThemes} alt="LeetCode Themes-screenshot" height="400" width="600" />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>LeetCode Themes</h2>
                            <p className={styles.cardBody}>A firefox browser extension a firefox browser extension for customizing the LeetCode editor.</p>
                            <div className={styles.cardButtons}>
                                <a href="https://github.com/jwl-7/leetcode-themes" role="button" target="_blank">
                                    <GithubLight /> Source
                                </a>
                                <a href="https://addons.mozilla.org/en-US/firefox/addon/leetcode-themes/" role="button" target="_blank">
                                    <Download /> Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </section>
    )
}
