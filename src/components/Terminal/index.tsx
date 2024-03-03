import styles from './terminal.module.sass'


export default function Terminal() {
    return (
        <div className={styles.terminal}>
            <div className={styles.topBar}>
                <svg height="14" width="54" viewBox="0 0 54 14">
                    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                        <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
                        <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
                        <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
                    </g>
                </svg>
            </div>
            <div className={styles.body}>
                <div className={styles.section}>
                    <span className={styles.header}>Hi there! :) <span className={styles.wave}>👋</span></span>
                </div>

                <div className={styles.section}>
                    <span className={styles.inputText}>&gt; Name</span> <br />
                    <span className={styles.outputText}>Jonathan Lusk</span> <br />
                </div>

                <div className={styles.section}>
                    <span className={styles.inputText}>&gt; Current Location</span> <br />
                    <span className={styles.outputText}>Chattanooga, TN</span> <br />
                </div>

                <div className={styles.section}>
                    <span className={styles.inputText}>&gt; Current Job</span> <br />
                    <span className={styles.outputText}>Open to Work</span>
                </div>

                <div className={styles.section}>
                    <span className={styles.inputText}>&gt; Personal Interests</span> <br />
                    <span className={styles.outputText}>Gaming, Music Festivals, Skiing, Skateboarding</span>
                </div>

                <div>
                    <span className={styles.inputText}>&gt; </span>
                    <span className={styles.cursor}>▋</span>
                </div>
            </div>
        </div>
    )
}