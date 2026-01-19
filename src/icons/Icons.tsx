import { ReactElement } from 'react'

import Bootstrap from './Bootstrap'
import CircleCi from './CircleCi'
import Csharp from './Csharp'
import Css3 from './Css3'
import Cypress from './Cypress'
import DiscordApp from './DiscordApp'
import DiscordPy from './DiscordPy'
import Django from './Django'
import Docker from './Docker'
import Download from './Download'
import File from './File'
import Firefox from './Firefox'
import Git from './Git'
import GitHub from './GitHub'
import GitHubLight from './GitHubLight'
import Html5 from './Html5'
import JavaScript from './JavaScript'
import LinkedIn from './LinkedIn'
import Linux from './Linux'
import Lua from './Lua'
import MacDesktop from './MacDesktop'
import MUI from './MUI'
import MySQL from './MySQL'
import PostgreSQL from './PostgreSQL'
import PyGame from './PyGame'
import Python from './Python'
import React from './React'
import Sass from './Sass'
import SourceMod from './SourceMod'
import SQLite from './SQLite'
import TypeScript from './TypeScript'
import UndrawHacker from './UndrawHacker'
import UtcLogo from './UtcLogo'
import VSCode from './VSCode'
import Windows from './Windows'

interface IconComponent {
    [icon: string]: () => ReactElement
}

export default {
    Bootstrap,
    CircleCi,
    Csharp,
    Css3,
    Cypress,
    DiscordApp,
    DiscordPy,
    Django,
    Docker,
    Download,
    Firefox,
    File,
    Git,
    GitHub,
    GitHubLight,
    Html5,
    JavaScript,
    LinkedIn,
    Linux,
    Lua,
    MacDesktop,
    MUI,
    MySQL,
    PostgreSQL,
    PyGame,
    Python,
    React,
    Sass,
    SourceMod,
    SQLite,
    TypeScript,
    UndrawHacker,
    UtcLogo,
    VSCode,
    Windows
} satisfies IconComponent as IconComponent
