import styles from './background.module.sass'

import useTheme from '@hooks/useTheme'


export default function Background() {
    const theme = useTheme()
    const colors = theme === 'dark' ? {
        line: '#1B413C',
        main: '#40CACA',
        1: '#163E3D',
        2: '#67BEBE',
        3: '#163E3D',
        4: '#70DBDB',
        5: '#163E3D',
        6: '#577575',
        7: '#163E3D',
        8: '#629C9C',
        9: '#163E3D',
        10: '#577575'
    } : {
        line: '#8B7500',
        main: '#FFD700',
        1: '#886419',
        2: '#B8860B',
        3: '#FFD700',
        4: '#FFEC8B',
        5: '#FFFACD',
        6: '#FFFFE0',
        7: '#FAFAD2',
        8: '#FFE4B5',
        9: '#FFD700',
        10: '#FFD700'
    }

    return (
        <div className={styles.background}>
            <div className={styles.bottom}>
                <svg className={styles.pathckeckd} width="1117" height="644" viewBox="0 0 1117 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M350 644V484L367.5 466.5V402L389 380.5V327.5L364 302.5V247.5L382.5 229C383 229.333 384.2 229.8 385 229C386 228 385.5 227 385 226.5C384.5 226 383 226 382.5 226.5C382 227 381.5 227.5 382.5 228.5C383.3 229.3 384 227.667 384 227" stroke={colors.line}></path>
                    <path d="M845 642V453L877 421C877.5 421.333 878.7 421.8 879.5 421C880.5 420 880 419 879.5 418.5C879 418 877.5 418 877 418.5C876.5 419 876 419.5 877 420.5C877.8 421.3 878.5 419.667 878.5 419" stroke={colors.line}></path>
                    <path d="M1063.08 640.5V423.875L1031.08 391.875C1030.58 392.208 1029.38 392.675 1028.58 391.875C1027.58 390.875 1028.08 389.875 1028.58 389.375C1029.08 388.875 1030.58 388.875 1031.08 389.375C1031.58 389.875 1032.08 390.375 1031.08 391.375C1030.28 392.175 1029.58 390.542 1029.58 389.875" stroke={colors.line}></path>
                    <path d="M985 642.5V547.5L1040.08 491V444.875L1022.7 427.5C1022.2 427.833 1021 428.3 1020.2 427.5C1019.2 426.5 1019.7 425.5 1020.2 425C1020.7 424.5 1022.2 424.5 1022.7 425C1023.2 425.5 1023.7 426 1022.7 427C1021.9 427.8 1021.2 426.167 1021.2 425.5" stroke={colors.line}></path>
                    <path d="M950 642.875V547.875L1005.08 491.375V330L987.702 312.625C987.202 312.958 986.002 313.425 985.202 312.625C984.202 311.625 984.702 310.625 985.202 310.125C985.702 309.625 987.202 309.625 987.702 310.125C988.202 310.625 988.702 311.125 987.702 312.125C986.902 312.925 986.202 311.292 986.202 310.625" stroke={colors.line}></path>
                    <path d="M936 642.875V547.875L991.077 491.375V372.5L973.702 355.125C973.202 355.458 972.002 355.925 971.202 355.125C970.202 354.125 970.702 353.125 971.202 352.625C971.702 352.125 973.202 352.125 973.702 352.625C974.202 353.125 974.702 353.625 973.702 354.625C972.902 355.425 972.202 353.792 972.202 353.125" stroke={colors.line}></path>
                    <path d="M890.511 521.734C890.982 522.205 891.642 523.855 890.511 523.855C889.097 523.855 889.097 523.148 889.097 522.441C889.097 521.733 890.158 520.673 890.865 520.673C891.572 520.673 892.632 521.026 892.632 522.441C892.632 523.572 891.454 524.091 890.865 524.208L890.865 574L921.073 604.207L921.072 641.5" stroke={colors.line}></path>
                    <path d="M867.221 551.879C867.693 552.35 868.353 554 867.221 554C865.808 554 865.807 553.293 865.807 552.586C865.807 551.879 866.868 550.818 867.575 550.818C868.282 550.818 869.343 551.172 869.343 552.586C869.343 553.717 868.164 554.236 867.575 554.354L867.575 574L897.783 604.207L897.782 641.5" stroke={colors.line}></path>
                    <path d="M863.875 496.578C864.542 496.578 866.175 497.278 865.375 498.078C864.375 499.077 863.875 498.578 863.375 498.078C862.875 497.578 862.875 496.078 863.375 495.578C863.875 495.078 864.875 494.578 865.875 495.578C866.675 496.378 866.208 497.578 865.875 498.078L879.767 511.969L879.767 574L910 604.233L910 641" stroke={colors.line}></path>
                    <path d="M270 644V397.802L296.923 370.874V271.625L330 238.543V156.99L291.538 118.521V33.8906L320 5.42362C320.769 5.93654 322.615 6.65461 323.846 5.42362C325.385 3.88489 324.615 2.34615 323.846 1.57678C323.077 0.807414 320.77 0.807414 320 1.57678C319.231 2.34615 318.462 3.11589 320 4.65426C321.231 5.88494 322.308 3.37185 322.308 2.34615" stroke={colors.line}></path>
                    <path d="M1093.77 241.346C1093.77 242.372 1092.69 244.885 1091.46 243.654C1089.92 242.116 1090.69 241.346 1091.46 240.577C1092.23 239.808 1094.54 239.808 1095.31 240.577C1096.08 241.346 1096.85 242.885 1095.31 244.424C1094.08 245.655 1092.23 244.937 1091.46 244.424L1055.5 280.386V313.5L1087.5 345.5V374.5L1108 395V521.5L1090.5 539V641" stroke={colors.line}></path>
                    <path d="M1113.77 200.346C1113.77 201.372 1112.69 203.885 1111.46 202.654C1109.92 201.116 1110.69 200.346 1111.46 199.577C1112.23 198.808 1114.54 198.808 1115.31 199.577C1116.08 200.346 1116.85 201.885 1115.31 203.424C1114.08 204.655 1112.23 203.937 1111.46 203.424L1040.39 274.5V313L1076.39 349V380.5L1096.89 401V520L1078.89 538V641" stroke={colors.line}></path>
                    <path d="M190 644V460.213L169.808 440.111V366.022L145 341.326V280.446L173.846 251.73V188.553L152.5 167.302C151.923 167.685 150.538 168.221 149.615 167.302C148.461 166.154 149.038 165.005 149.615 164.431C150.192 163.856 151.923 163.856 152.5 164.431C153.077 165.005 153.653 165.58 152.5 166.728C151.577 167.647 150.769 165.771 150.769 165.005" stroke={colors.line}></path>
                    <path d="M57.9999 644V411.203L32.423 385.741V291.895L0.99994 260.613V183.499L37.5384 147.124V67.1003L10.4996 40.1828C9.76893 40.6678 8.01532 41.3468 6.84609 40.1828C5.38456 38.7278 6.11532 37.2729 6.84609 36.5454C7.57686 35.8179 9.76881 35.8179 10.4996 36.5454C11.2304 37.2729 11.9608 38.0007 10.4996 39.4553C9.33064 40.619 8.30775 38.2427 8.30763 37.2729" stroke={colors.line}></path>
                </svg>
                <svg className={styles.energy} width="1117" height="644" viewBox="0 0 1117 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M350 644V484L367.5 466.5V402L389 380.5V327.5L364 302.5V247.5L382.5 229C383 229.333 384.2 229.8 385 229C386 228 385.5 227 385 226.5C384.5 226 383 226 382.5 226.5C382 227 381.5 227.5 382.5 228.5C383.3 229.3 384 227.667 384 227" stroke="url(#paint0_linear)"></path>
                    <path d="M845 642V453L877 421C877.5 421.333 878.7 421.8 879.5 421C880.5 420 880 419 879.5 418.5C879 418 877.5 418 877 418.5C876.5 419 876 419.5 877 420.5C877.8 421.3 878.5 419.667 878.5 419" stroke="url(#paint1_linear)"></path>
                    <path d="M1063.08 640.5V423.875L1031.08 391.875C1030.58 392.208 1029.38 392.675 1028.58 391.875C1027.58 390.875 1028.08 389.875 1028.58 389.375C1029.08 388.875 1030.58 388.875 1031.08 389.375C1031.58 389.875 1032.08 390.375 1031.08 391.375C1030.28 392.175 1029.58 390.542 1029.58 389.875" stroke="url(#paint2_linear)"></path>
                    <path d="M985 642.5V547.5L1040.08 491V444.875L1022.7 427.5C1022.2 427.833 1021 428.3 1020.2 427.5C1019.2 426.5 1019.7 425.5 1020.2 425C1020.7 424.5 1022.2 424.5 1022.7 425C1023.2 425.5 1023.7 426 1022.7 427C1021.9 427.8 1021.2 426.167 1021.2 425.5" stroke="url(#paint3_linear)"></path>
                    <path d="M950 642.875V547.875L1005.08 491.375V330L987.702 312.625C987.202 312.958 986.002 313.425 985.202 312.625C984.202 311.625 984.702 310.625 985.202 310.125C985.702 309.625 987.202 309.625 987.702 310.125C988.202 310.625 988.702 311.125 987.702 312.125C986.902 312.925 986.202 311.292 986.202 310.625" stroke="url(#paint4_linear)"></path>
                    <path d="M936 642.875V547.875L991.077 491.375V372.5L973.702 355.125C973.202 355.458 972.002 355.925 971.202 355.125C970.202 354.125 970.702 353.125 971.202 352.625C971.702 352.125 973.202 352.125 973.702 352.625C974.202 353.125 974.702 353.625 973.702 354.625C972.902 355.425 972.202 353.792 972.202 353.125" stroke="url(#paint5_linear)"></path>
                    <path d="M890.511 521.734C890.982 522.205 891.642 523.855 890.511 523.855C889.097 523.855 889.097 523.148 889.097 522.441C889.097 521.733 890.158 520.673 890.865 520.673C891.572 520.673 892.632 521.026 892.632 522.441C892.632 523.572 891.454 524.091 890.865 524.208L890.865 574L921.073 604.207L921.072 641.5" stroke="url(#paint6_linear)"></path>
                    <path d="M867.221 551.879C867.693 552.35 868.353 554 867.221 554C865.808 554 865.807 553.293 865.807 552.586C865.807 551.879 866.868 550.818 867.575 550.818C868.282 550.818 869.343 551.172 869.343 552.586C869.343 553.717 868.164 554.236 867.575 554.354L867.575 574L897.783 604.207L897.782 641.5" stroke="url(#paint7_linear)"></path>
                    <path d="M863.875 496.578C864.542 496.578 866.175 497.278 865.375 498.078C864.375 499.077 863.875 498.578 863.375 498.078C862.875 497.578 862.875 496.078 863.375 495.578C863.875 495.078 864.875 494.578 865.875 495.578C866.675 496.378 866.208 497.578 865.875 498.078L879.767 511.969L879.767 574L910 604.233L910 641" stroke="url(#paint8_linear)"></path>
                    <path d="M270 644V397.802L296.923 370.874V271.625L330 238.543V156.99L291.538 118.521V33.8906L320 5.42362C320.769 5.93654 322.615 6.65461 323.846 5.42362C325.385 3.88489 324.615 2.34615 323.846 1.57678C323.077 0.807414 320.77 0.807414 320 1.57678C319.231 2.34615 318.462 3.11589 320 4.65426C321.231 5.88494 322.308 3.37185 322.308 2.34615" stroke="url(#paint9_linear)"></path>
                    <path d="M1093.77 241.346C1093.77 242.372 1092.69 244.885 1091.46 243.654C1089.92 242.116 1090.69 241.346 1091.46 240.577C1092.23 239.808 1094.54 239.808 1095.31 240.577C1096.08 241.346 1096.85 242.885 1095.31 244.424C1094.08 245.655 1092.23 244.937 1091.46 244.424L1055.5 280.386V313.5L1087.5 345.5V374.5L1108 395V521.5L1090.5 539V641" stroke="url(#paint10_linear)"></path>
                    <path d="M1113.77 200.346C1113.77 201.372 1112.69 203.885 1111.46 202.654C1109.92 201.116 1110.69 200.346 1111.46 199.577C1112.23 198.808 1114.54 198.808 1115.31 199.577C1116.08 200.346 1116.85 201.885 1115.31 203.424C1114.08 204.655 1112.23 203.937 1111.46 203.424L1040.39 274.5V313L1076.39 349V380.5L1096.89 401V520L1078.89 538V641" stroke="url(#paint11_linear)"></path>
                    <path d="M190 644V460.213L169.808 440.111V366.022L145 341.326V280.446L173.846 251.73V188.553L152.5 167.302C151.923 167.685 150.538 168.221 149.615 167.302C148.461 166.154 149.038 165.005 149.615 164.431C150.192 163.856 151.923 163.856 152.5 164.431C153.077 165.005 153.653 165.58 152.5 166.728C151.577 167.647 150.769 165.771 150.769 165.005" stroke="url(#paint12_linear)"></path>
                    <path d="M57.9999 644V411.203L32.423 385.741V291.895L0.99994 260.613V183.499L37.5384 147.124V67.1003L10.4996 40.1828C9.76893 40.6678 8.01532 41.3468 6.84609 40.1828C5.38456 38.7278 6.11532 37.2729 6.84609 36.5454C7.57686 35.8179 9.76881 35.8179 10.4996 36.5454C11.2304 37.2729 11.9608 38.0007 10.4996 39.4553C9.33064 40.619 8.30775 38.2427 8.30763 37.2729" stroke="url(#paint13_linear)"></path>
                    <defs>
                        <linearGradient id="paint0_linear" x1="369.5" y1="226.125" x2="369.5" y2="644" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="862.539" y1="418.125" x2="862.539" y2="642" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="1045.54" y1="389" x2="1045.54" y2="640.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="1012.54" y1="424.625" x2="1012.54" y2="642.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="977.539" y1="309.75" x2="977.539" y2="642.875" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="963.539" y1="352.25" x2="963.539" y2="642.875" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint6_linear" x1="868.149" y1="542.859" x2="943.931" y2="618.641" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint7_linear" x1="852.395" y1="565.468" x2="913.105" y2="626.178" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint8_linear" x1="863" y1="568" x2="910" y2="568" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint9_linear" x1="300" y1="0.999756" x2="300" y2="644" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint10_linear" x1="1081.75" y1="240" x2="1081.75" y2="641" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint11_linear" x1="1078.29" y1="199" x2="1078.29" y2="641" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint12_linear" x1="167.5" y1="164" x2="167.5" y2="644" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint13_linear" x1="29.4999" y1="35.9998" x2="29.4999" y2="644" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.right}>
                <svg className={styles.pathckeckd} width="230" height="505" viewBox="0 0 230 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.875 486.391C66.5416 486.391 68.1748 485.692 67.375 484.892C66.3752 483.892 65.875 484.392 65.375 484.892C64.875 485.392 64.875 486.891 65.375 487.391C65.875 487.891 66.875 488.391 67.875 487.391C68.675 486.591 68.2083 485.392 67.875 484.892L81.7669 471L124.487 471L157.987 504.5" stroke={colors.line}></path>
                    <path d="M157.999 480L98.8548 420.856L79.2088 420.856C79.091 421.445 78.5725 422.623 77.4412 422.623C76.027 422.623 75.6734 421.563 75.6734 420.856C75.6734 420.149 76.7339 419.088 77.441 419.088C78.1481 419.088 78.8552 419.088 78.8552 420.502C78.8552 421.633 77.2055 420.973 76.7341 420.502" stroke={colors.line}></path>
                    <path d="M158.499 331.5L118.855 291.856L99.2088 291.856C99.091 292.445 98.5725 293.623 97.4412 293.623C96.027 293.623 95.6734 292.563 95.6734 291.856C95.6734 291.149 96.7339 290.088 97.441 290.088C98.1481 290.088 98.8552 290.088 98.8552 291.502C98.8552 292.633 97.2055 291.973 96.7341 291.502" stroke={colors.line}></path>
                    <path d="M161.064 312.063L130.856 281.855L130.856 262.209C131.445 262.091 132.623 261.573 132.623 260.441C132.623 259.027 131.563 258.673 130.856 258.673C130.149 258.673 129.088 259.734 129.088 260.441C129.088 261.148 129.088 261.855 130.502 261.855C131.633 261.855 130.973 260.205 130.502 259.734" stroke={colors.line}></path>
                    <path d="M130.577 1.87476C130.577 2.54134 131.277 4.17456 132.077 3.37476C133.077 2.375 132.577 1.87476 132.077 1.37476C131.577 0.874758 130.077 0.874758 129.577 1.37476C129.077 1.87476 128.577 2.87476 129.577 3.87476C130.377 4.67476 131.577 4.20809 132.077 3.87476L145.969 17.7667L145.969 80.4998L94.4688 132L94.4688 170L141.469 217L141.469 236L159.969 254.5" stroke={colors.line}></path>
                    <path d="M161 220.5L107 166.5V140L161 85.9998" stroke={colors.line}></path>
                    <path d="M161 190L137.5 166.5V140L161 116.5" stroke={colors.line}></path>
                    <path d="M86.5021 374.734C86.9734 375.205 87.6334 376.855 86.5023 376.855C85.0885 376.855 85.0881 376.148 85.0881 375.441C85.0881 374.734 86.1486 373.673 86.8557 373.673C87.5628 373.673 88.6235 374.027 88.6235 375.441C88.6235 376.573 87.4451 377.091 86.8559 377.209L86.856 396.855L117.064 427.063L159.834 469.833" stroke={colors.line}></path>
                    <path d="M87.7095 234.668C88.4347 235.393 89.4503 237.931 87.71 237.931C85.5347 237.931 85.534 236.843 85.5339 235.755C85.5338 234.667 87.1654 233.036 88.2533 233.036C89.3413 233.036 90.9733 233.58 90.9734 235.756C90.9736 237.497 89.1606 238.294 88.2541 238.475L88.2538 253L75.0001 266.254L75.0001 308.5L90.9734 324.473L113 324.473L144.5 355.973L158.5 355.973" stroke={colors.line}></path>
                    <path d="M81.7093 173.668C82.4344 174.393 83.4501 176.931 81.7098 176.931C79.5344 176.931 79.5338 175.843 79.5337 174.755C79.5336 173.667 81.1651 172.036 82.2531 172.036C83.341 172.036 84.973 172.58 84.9732 174.756C84.9734 176.497 83.1604 177.294 82.2538 177.475L82.2538 197.5L55.5001 224.254L55.5001 257L65.5001 267V317.5L82.2538 334.254L103.5 334.254L157.746 388.5" stroke={colors.line}></path>
                </svg>
                <svg className={styles.energy} width="230" height="505" viewBox="0 0 230 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.875 486.391C66.5416 486.391 68.1748 485.692 67.375 484.892C66.3752 483.892 65.875 484.392 65.375 484.892C64.875 485.392 64.875 486.891 65.375 487.391C65.875 487.891 66.875 488.391 67.875 487.391C68.675 486.591 68.2083 485.392 67.875 484.892L81.7669 471L124.487 471L157.987 504.5" stroke="url(#paint0_linear)"></path>
                    <path d="M157.999 480L98.8548 420.856L79.2088 420.856C79.091 421.445 78.5725 422.623 77.4412 422.623C76.027 422.623 75.6734 421.563 75.6734 420.856C75.6734 420.149 76.7339 419.088 77.441 419.088C78.1481 419.088 78.8552 419.088 78.8552 420.502C78.8552 421.633 77.2055 420.973 76.7341 420.502" stroke="url(#paint1_linear)"></path>
                    <path d="M158.499 331.5L118.855 291.856L99.2088 291.856C99.091 292.445 98.5725 293.623 97.4412 293.623C96.027 293.623 95.6734 292.563 95.6734 291.856C95.6734 291.149 96.7339 290.088 97.441 290.088C98.1481 290.088 98.8552 290.088 98.8552 291.502C98.8552 292.633 97.2055 291.973 96.7341 291.502" stroke="url(#paint2_linear)"></path>
                    <path d="M161.064 312.063L130.856 281.855L130.856 262.209C131.445 262.091 132.623 261.573 132.623 260.441C132.623 259.027 131.563 258.673 130.856 258.673C130.149 258.673 129.088 259.734 129.088 260.441C129.088 261.148 129.088 261.855 130.502 261.855C131.633 261.855 130.973 260.205 130.502 259.734" stroke="url(#paint3_linear)"></path>
                    <path d="M130.577 1.87476C130.577 2.54134 131.277 4.17456 132.077 3.37476C133.077 2.375 132.577 1.87476 132.077 1.37476C131.577 0.874758 130.077 0.874758 129.577 1.37476C129.077 1.87476 128.577 2.87476 129.577 3.87476C130.377 4.67476 131.577 4.20809 132.077 3.87476L145.969 17.7667L145.969 80.4998L94.4688 132L94.4688 170L141.469 217L141.469 236L159.969 254.5" stroke="url(#paint4_linear)"></path>
                    <path d="M161 220.5L107 166.5V140L161 85.9998" stroke="url(#paint5_linear)"></path>
                    <path d="M161 190L137.5 166.5V140L161 116.5" stroke="url(#paint6_linear)"></path>
                    <path d="M86.5021 374.734C86.9734 375.205 87.6334 376.855 86.5023 376.855C85.0885 376.855 85.0881 376.148 85.0881 375.441C85.0881 374.734 86.1486 373.673 86.8557 373.673C87.5628 373.673 88.6235 374.027 88.6235 375.441C88.6235 376.573 87.4451 377.091 86.8559 377.209L86.856 396.855L117.064 427.063L159.834 469.833" stroke="url(#paint7_linear)"></path>
                    <path d="M87.7095 234.668C88.4347 235.393 89.4503 237.931 87.71 237.931C85.5347 237.931 85.534 236.843 85.5339 235.755C85.5338 234.667 87.1654 233.036 88.2533 233.036C89.3413 233.036 90.9733 233.58 90.9734 235.756C90.9736 237.497 89.1606 238.294 88.2541 238.475L88.2538 253L75.0001 266.254L75.0001 308.5L90.9734 324.473L113 324.473L144.5 355.973L158.5 355.973" stroke="url(#paint8_linear)"></path>
                    <path d="M81.7093 173.668C82.4344 174.393 83.4501 176.931 81.7098 176.931C79.5344 176.931 79.5338 175.843 79.5337 174.755C79.5336 173.667 81.1651 172.036 82.2531 172.036C83.341 172.036 84.973 172.58 84.9732 174.756C84.9734 176.497 83.1604 177.294 82.2538 177.475L82.2538 197.5L55.5001 224.254L55.5001 257L65.5001 267V317.5L82.2538 334.254L103.5 334.254L157.746 388.5" stroke="url(#paint9_linear)"></path>
                    <defs>
                        <linearGradient id="paint0_linear" x1="65" y1="487.75" x2="157.987" y2="487.75" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="80.9994" y1="414.999" x2="151.999" y2="485.999" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="100.999" y1="285.999" x2="152.499" y2="337.499" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="124.999" y1="263.999" x2="167.063" y2="306.063" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="127.219" y1="0.999759" x2="127.219" y2="254.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="134" y1="85.9998" x2="134" y2="220.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint6_linear" x1="149.25" y1="116.5" x2="149.25" y2="190" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint7_linear" x1="80.9994" y1="378.999" x2="165.833" y2="463.833" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint8_linear" x1="65.98" y1="254.493" x2="162.98" y2="351.493" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint9_linear" x1="41.6049" y1="211.868" x2="187.992" y2="358.255" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.left}>
                <svg className={styles.pathckeckd} width="515" height="694" viewBox="0 0 515 694" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49994 693L138.797 693L164.259 667.423L258.105 667.423L289.387 636L366.501 636L402.875 672.538L482.899 672.538L509.817 645.5C509.332 644.769 508.653 643.015 509.817 641.846C511.272 640.385 512.727 641.115 513.454 641.846C514.182 642.577 514.182 644.769 513.454 645.5C512.727 646.23 511.999 646.961 510.544 645.5C509.381 644.331 511.757 643.308 512.727 643.308" stroke={colors.line}></path>
                    <path d="M6 532.423L109.105 532.423L140.387 501L217.501 501L253.876 537.538L333.899 537.538L360.817 510.5C360.332 509.769 359.653 508.015 360.817 506.846C362.272 505.384 363.727 506.115 364.454 506.846C365.182 507.577 365.182 509.769 364.454 510.5C363.727 511.23 362.999 511.961 361.544 510.5C360.381 509.331 362.757 508.308 363.727 508.308" stroke={colors.line}></path>
                    <path d="M4.49994 497L90.7967 497L116.259 471.423L210.105 471.423L241.387 440L318.501 440L354.875 476.538L434.899 476.538L461.817 449.5C461.332 448.769 460.653 447.015 461.817 445.846C463.272 444.385 464.727 445.115 465.454 445.846C466.182 446.577 466.182 448.769 465.454 449.5C464.727 450.23 463.999 450.961 462.544 449.5C461.381 448.331 463.757 447.308 464.727 447.308" stroke={colors.line}></path>
                    <path d="M6.10003e-08 6.57681L82.6052 6.57681L113.887 37.9999L191.001 37.9999L227.376 1.46143L307.399 1.46143L334.317 28.5002C333.832 29.2309 333.153 30.9845 334.317 32.1537C335.772 33.6153 337.227 32.8845 337.954 32.1537C338.682 31.423 338.682 29.231 337.954 28.5002C337.227 27.7695 336.499 27.0391 335.044 28.5002C333.881 29.6692 336.257 30.6921 337.227 30.6922" stroke={colors.line}></path>
                    <path d="M3 173L42.0011 173L78.3755 136.461L158.399 136.461L185.317 163.5C184.832 164.231 184.153 165.985 185.317 167.154C186.772 168.615 188.227 167.885 188.954 167.154C189.682 166.423 189.682 164.231 188.954 163.5C188.227 162.769 187.499 162.039 186.044 163.5C184.881 164.669 187.257 165.692 188.227 165.692" stroke={colors.line}></path>
                    <path d="M5.99994 202.577L34.6052 202.577L65.8872 234L143.001 234L179.376 197.461L259.399 197.461L286.317 224.5C285.832 225.231 285.153 226.984 286.317 228.154C287.772 229.615 289.227 228.884 289.954 228.154C290.682 227.423 290.682 225.231 289.954 224.5C289.227 223.769 288.499 223.039 287.044 224.5C285.881 225.669 288.257 226.692 289.227 226.692" stroke={colors.line}></path>
                </svg>
                <svg className={styles.energy} width="515" height="694" viewBox="0 0 515 694" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49994 693L138.797 693L164.259 667.423L258.105 667.423L289.387 636L366.501 636L402.875 672.538L482.899 672.538L509.817 645.5C509.332 644.769 508.653 643.015 509.817 641.846C511.272 640.385 512.727 641.115 513.454 641.846C514.182 642.577 514.182 644.769 513.454 645.5C512.727 646.23 511.999 646.961 510.544 645.5C509.381 644.331 511.757 643.308 512.727 643.308" stroke="url(#paint0_linear)"></path>
                    <path d="M6 532.423L109.105 532.423L140.387 501L217.501 501L253.876 537.538L333.899 537.538L360.817 510.5C360.332 509.769 359.653 508.015 360.817 506.846C362.272 505.384 363.727 506.115 364.454 506.846C365.182 507.577 365.182 509.769 364.454 510.5C363.727 511.23 362.999 511.961 361.544 510.5C360.381 509.331 362.757 508.308 363.727 508.308" stroke="url(#paint1_linear)"></path>
                    <path d="M4.49994 497L90.7967 497L116.259 471.423L210.105 471.423L241.387 440L318.501 440L354.875 476.538L434.899 476.538L461.817 449.5C461.332 448.769 460.653 447.015 461.817 445.846C463.272 444.385 464.727 445.115 465.454 445.846C466.182 446.577 466.182 448.769 465.454 449.5C464.727 450.23 463.999 450.961 462.544 449.5C461.381 448.331 463.757 447.308 464.727 447.308" stroke="url(#paint2_linear)"></path>
                    <path d="M6.10003e-08 6.57681L82.6052 6.57681L113.887 37.9999L191.001 37.9999L227.376 1.46143L307.399 1.46143L334.317 28.5002C333.832 29.2309 333.153 30.9845 334.317 32.1537C335.772 33.6153 337.227 32.8845 337.954 32.1537C338.682 31.423 338.682 29.231 337.954 28.5002C337.227 27.7695 336.499 27.0391 335.044 28.5002C333.881 29.6692 336.257 30.6921 337.227 30.6922" stroke="url(#paint3_linear)"></path>
                    <path d="M3 173L42.0011 173L78.3755 136.461L158.399 136.461L185.317 163.5C184.832 164.231 184.153 165.985 185.317 167.154C186.772 168.615 188.227 167.885 188.954 167.154C189.682 166.423 189.682 164.231 188.954 163.5C188.227 162.769 187.499 162.039 186.044 163.5C184.881 164.669 187.257 165.692 188.227 165.692" stroke="url(#paint4_linear)"></path>
                    <path d="M5.99994 202.577L34.6052 202.577L65.8872 234L143.001 234L179.376 197.461L259.399 197.461L286.317 224.5C285.832 225.231 285.153 226.984 286.317 228.154C287.772 229.615 289.227 228.884 289.954 228.154C290.682 227.423 290.682 225.231 289.954 224.5C289.227 223.769 288.499 223.039 287.044 224.5C285.881 225.669 288.257 226.692 289.227 226.692" stroke="url(#paint5_linear)"></path>
                    <defs>
                        <linearGradient id="paint0_linear" x1="514" y1="664.5" x2="4.49994" y2="664.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="365" y1="519.269" x2="6" y2="519.269" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="466" y1="468.5" x2="4.49994" y2="468.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="338.5" y1="19.7307" x2="2.17858e-07" y2="19.7307" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="189.5" y1="154.731" x2="3" y2="154.731" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="290.5" y1="215.731" x2="5.99994" y2="215.731" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.top}>
                <svg className={styles.pathckeckd} width="235" height="363" viewBox="0 0 235 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M228.423 5L228.423 106.605L197 137.887L197 215.001L233.538 251.376L233.538 331.399L206.499 358.317C205.769 357.832 204.015 357.153 202.846 358.317C201.384 359.772 202.115 361.227 202.846 361.954C203.577 362.682 205.769 362.682 206.499 361.954C207.23 361.227 207.961 360.499 206.499 359.044C205.33 357.881 204.308 360.257 204.307 361.227" stroke={colors.line}></path>
                    <path d="M62.0001 2L62.0001 66.0011L98.5386 102.376L98.5386 182.399L71.4998 209.317C70.7691 208.832 69.0155 208.153 67.8463 209.317C66.3848 210.772 67.1155 212.227 67.8463 212.954C68.5771 213.682 70.769 213.682 71.4998 212.954C72.2306 212.227 72.961 211.499 71.4998 210.044C70.3308 208.881 69.308 211.257 69.3078 212.227" stroke={colors.line}></path>
                    <path d="M32.423 0.5L32.423 58.6052L0.99995 89.8872L0.999947 167.001L37.5384 203.376L37.5384 283.399L10.4996 310.317C9.76894 309.832 8.01533 309.153 6.8461 310.317C5.38456 311.772 6.11533 313.227 6.8461 313.954C7.57687 314.682 9.76882 314.682 10.4996 313.954C11.2304 313.227 11.9608 312.499 10.4996 311.044C9.33064 309.881 8.30776 312.257 8.30764 313.227" stroke={colors.line}></path>
                </svg>
                <svg className={styles.energy} width="235" height="363" viewBox="0 0 235 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M228.423 5L228.423 106.605L197 137.887L197 215.001L233.538 251.376L233.538 331.399L206.499 358.317C205.769 357.832 204.015 357.153 202.846 358.317C201.384 359.772 202.115 361.227 202.846 361.954C203.577 362.682 205.769 362.682 206.499 361.954C207.23 361.227 207.961 360.499 206.499 359.044C205.33 357.881 204.308 360.257 204.307 361.227" stroke="url(#paint0_linear)"></path>
                    <path d="M62.0001 2L62.0001 66.0011L98.5386 102.376L98.5386 182.399L71.4998 209.317C70.7691 208.832 69.0155 208.153 67.8463 209.317C66.3848 210.772 67.1155 212.227 67.8463 212.954C68.5771 213.682 70.769 213.682 71.4998 212.954C72.2306 212.227 72.961 211.499 71.4998 210.044C70.3308 208.881 69.308 211.257 69.3078 212.227" stroke="url(#paint1_linear)"></path>
                    <path d="M32.423 0.5L32.423 58.6052L0.99995 89.8872L0.999947 167.001L37.5384 203.376L37.5384 283.399L10.4996 310.317C9.76894 309.832 8.01533 309.153 6.8461 310.317C5.38456 311.772 6.11533 313.227 6.8461 313.954C7.57687 314.682 9.76882 314.682 10.4996 313.954C11.2304 313.227 11.9608 312.499 10.4996 311.044C9.33064 309.881 8.30776 312.257 8.30764 313.227" stroke="url(#paint2_linear)"></path>
                    <defs>
                        <linearGradient id="paint0_linear" x1="215.269" y1="362.5" x2="215.269" y2="5" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="80.2694" y1="213.5" x2="80.2694" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="19.2692" y1="314.5" x2="19.2692" y2="0.499999" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.back}>
                <svg className={styles.pathckeckd} width="671" height="1024" viewBox="0 0 671 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.2036 1051V775.293L38.0481 745.137V633.993L0.999917 596.944V505.616L44.0792 462.537V367.763L12.2001 335.884C11.3387 336.458 9.27114 337.262 7.8926 335.884C6.16943 334.16 7.03102 332.437 7.8926 331.576C8.75419 330.714 11.3385 330.714 12.2001 331.576C13.0617 332.437 13.9229 333.299 12.2001 335.022C10.8219 336.4 9.61592 333.586 9.61578 332.437" stroke={colors.line}></path>
                    <path d="M206.058 1051V626.758L159.665 580.357V409.334L102.667 352.327V211.797L168.943 145.51V-0.323382L119.898 -49.3769C118.573 -48.4931 115.392 -47.2557 113.271 -49.3769C110.62 -52.0284 111.946 -54.6799 113.271 -56.0057C114.597 -57.3314 118.573 -57.3314 119.898 -56.0057C121.224 -54.6799 122.549 -53.3535 119.898 -50.7027C117.778 -48.582 115.923 -52.9125 115.922 -54.6799" stroke={colors.line}></path>
                    <path d="M343.911 1051V734.303L378.706 699.664V571.996L421.454 529.44V424.535L371.747 375.051V266.186L408.531 229.568C409.525 230.228 411.91 231.151 413.501 229.568C415.489 227.588 414.495 225.609 413.501 224.619C412.507 223.63 409.525 223.63 408.531 224.619C407.537 225.609 406.543 226.599 408.531 228.578C410.121 230.161 411.513 226.929 411.513 225.609" stroke={colors.line}></path>
                    <path d="M571.37 1051V649.851L615.444 605.975V444.262L669.591 390.357V257.477L606.629 194.798V56.9026L653.221 10.5192C654.48 11.3549 657.502 12.5249 659.517 10.5192C662.035 8.012 660.776 5.50482 659.517 4.25123C658.258 2.99764 654.481 2.99764 653.221 4.25123C651.962 5.50482 650.704 6.75902 653.221 9.26559C655.236 11.2708 656.998 7.17607 656.998 5.50482" stroke={colors.line}></path>
                </svg>
                <svg className={styles.energy} width="671" height="1024" viewBox="0 0 671 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.2036 1051V775.293L38.0481 745.137V633.993L0.999917 596.944V505.616L44.0792 462.537V367.763L12.2001 335.884C11.3387 336.458 9.27114 337.262 7.8926 335.884C6.16943 334.16 7.03102 332.437 7.8926 331.576C8.75419 330.714 11.3385 330.714 12.2001 331.576C13.0617 332.437 13.9229 333.299 12.2001 335.022C10.8219 336.4 9.61592 333.586 9.61578 332.437" stroke="url(#paint0_linear)"></path>
                    <path d="M206.058 1051V626.758L159.665 580.357V409.334L102.667 352.327V211.797L168.943 145.51V-0.323382L119.898 -49.3769C118.573 -48.4931 115.392 -47.2557 113.271 -49.3769C110.62 -52.0284 111.946 -54.6799 113.271 -56.0057C114.597 -57.3314 118.573 -57.3314 119.898 -56.0057C121.224 -54.6799 122.549 -53.3535 119.898 -50.7027C117.778 -48.582 115.923 -52.9125 115.922 -54.6799" stroke="url(#paint1_linear)"></path>
                    <path d="M343.911 1051V734.303L378.706 699.664V571.996L421.454 529.44V424.535L371.747 375.051V266.186L408.531 229.568C409.525 230.228 411.91 231.151 413.501 229.568C415.489 227.588 414.495 225.609 413.501 224.619C412.507 223.63 409.525 223.63 408.531 224.619C407.537 225.609 406.543 226.599 408.531 228.578C410.121 230.161 411.513 226.929 411.513 225.609" stroke="url(#paint2_linear)"></path>
                    <path d="M571.37 1051V649.851L615.444 605.975V444.262L669.591 390.357V257.477L606.629 194.798V56.9026L653.221 10.5192C654.48 11.3549 657.502 12.5249 659.517 10.5192C662.035 8.012 660.776 5.50482 659.517 4.25123C658.258 2.99764 654.481 2.99764 653.221 4.25123C651.962 5.50482 650.704 6.75902 653.221 9.26559C655.236 11.2708 656.998 7.17607 656.998 5.50482" stroke="url(#paint3_linear)"></path>
                    <defs>
                        <linearGradient id="paint0_linear" x1="34.6018" y1="330.929" x2="34.6018" y2="1051" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="154.362" y1="-57" x2="154.362" y2="1051" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="382.683" y1="223.877" x2="382.683" y2="1051" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="620.481" y1="3.31104" x2="620.481" y2="1051" gradientUnits="userSpaceOnUse">
                            <stop stopColor={colors.main}></stop>
                            <stop offset="0.125" stopColor={colors[1]}></stop>
                            <stop offset="0.234375" stopColor={colors[2]}></stop>
                            <stop offset="0.348958" stopColor={colors[3]}></stop>
                            <stop offset="0.46875" stopColor={colors[4]}></stop>
                            <stop offset="0.59375" stopColor={colors[5]}></stop>
                            <stop offset="0.682292" stopColor={colors[6]}></stop>
                            <stop offset="0.755208" stopColor={colors[7]}></stop>
                            <stop offset="0.8125" stopColor={colors[8]}></stop>
                            <stop offset="0.90625" stopColor={colors[9]}></stop>
                            <stop offset="1" stopColor={colors[10]}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}
