import { ReactElement } from 'react'
import { SvgBootstrap } from './Bootstrap'
import { SvgCircleCi } from './CircleCi'
import { SvgCsharp } from './Csharp'
import { SvgCss3 } from './Css3'
import { SvgCypress } from './Cypress'
import { SvgDiscordApp } from './DiscordApp'
import { SvgDiscordPy } from './DiscordPy'
import { SvgDjango } from './Django'
import { SvgDocker } from './Docker'
import { SvgDownload } from './Download'
import { SvgFile } from './File'
import { SvgFirefox } from './Firefox'
import { SvgGit } from './Git'
import { SvgGitHub } from './GitHub'
import { SvgGitHubLight } from './GitHubLight'
import { SvgHtml5 } from './Html5'
import { SvgJavaScript } from './JavaScript'
import { SvgLinkedIn } from './LinkedIn'
import { SvgLinux } from './Linux'
import { SvgMacDesktop } from './MacDesktop'
import { SvgMUI } from './MUI'
import { SvgMySQL } from './MySQL'
import { SvgPyGame } from './PyGame'
import { SvgPython } from './Python'
import { SvgReact } from './React'
import { SvgSass } from './Sass'
import { SvgSourceMod } from './SourceMod'
import { SvgSQLite } from './SQLite'
import { SvgTypeScript } from './TypeScript'
import { SvgUndrawHacker } from './UndrawHacker'
import { SvgUtcLogo } from './UtcLogo'
import { SvgVSCode } from './VSCode'
import { SvgWindows } from './Windows'


interface IconComponent {
    [icon: string]: () => ReactElement
}


export const Icons: IconComponent = {
    SvgBootstrap,
    SvgCircleCi,
    SvgCsharp,
    SvgCss3,
    SvgCypress,
    SvgDiscordApp,
    SvgDiscordPy,
    SvgDjango,
    SvgDocker,
    SvgDownload,
    SvgFirefox,
    SvgFile,
    SvgGit,
    SvgGitHub,
    SvgGitHubLight,
    SvgHtml5,
    SvgJavaScript,
    SvgLinkedIn,
    SvgLinux,
    SvgMacDesktop,
    SvgMUI,
    SvgMySQL,
    SvgPyGame,
    SvgPython,
    SvgReact,
    SvgSass,
    SvgSourceMod,
    SvgSQLite,
    SvgTypeScript,
    SvgUndrawHacker,
    SvgUtcLogo,
    SvgVSCode,
    SvgWindows
}
