import Images from '@images/Images'

interface Project {
    title: string
    technology: string[]
    description: string
    imageSource: string
    sourceUrl?: string
    downloadUrl?: string
    liveUrl?: string
}

export default [{
        title: 'Luamino',
        technology: ['TypeScript'],
        description: 'Lua source code minifier',
        imageSource: Images.Luamino,
        sourceUrl: 'https://github.com/jwl-7/luamino/',
    }, {
        title: 'Glassometer',
        technology: ['Lua'],
        description: 'Custom glassmorphism speedometer for Assetto Corsa.',
        imageSource: Images.Glassometer,
        sourceUrl: 'https://github.com/jwl-7/glassometer',
        downloadUrl: 'https://github.com/jwl-7/glassometer/releases',
    }, {
        title: 'Traffic Underground',
        technology: ['Lua'],
        description: 'Advanced offline traffic simulation suite for Assetto Corsa.',
        imageSource: Images.TrafficUnderground,
        downloadUrl: 'https://vosan.co/paid-mods/traffic-underground',
    }, {
        title: 'Blender Assetto Corsa Tools',
        technology: ['Python'],
        description: 'Blender KN5/KSANIM Exporter.',
        imageSource: Images.BlenderAssettoCorsaTools,
        sourceUrl: 'https://github.com/jwl-7/blender-assetto-corsa-tools',
        downloadUrl: 'https://vosan.co/apps/blender-assetto-corsa-tools',
    }, {
        title: '2REAL',
        technology: ['Lua'],
        description: 'Singleplayer Traffic Mod for Assetto Corsa. Contributed scoring system, ranking system, scoring HUD, UI framework, and more.',
        imageSource: Images._2Real,
        liveUrl: 'https://2real.ac/',
    }, {
        title: 'Synthos',
        technology: ['TypeScript', 'Python'],
        description: 'AI-Assistant for Sound Design.',
        imageSource: Images.Synthos,
        sourceUrl: 'https://github.com/jwl-7/synthos/',
        liveUrl: 'https://jwl-7.github.io/synthos/',
    }, {
        title: 'EmmyLua Semantic Search',
        technology: ['TypeScript', 'Python'],
        description: 'AI semantic search for EmmyLua library files.',
        imageSource: Images.EmmyLuaSearch,
        sourceUrl: 'https://github.com/jwl-7/emmylua-semantic-search',
        liveUrl: 'https://jwl-7.github.io/emmylua-semantic-search/',
    }, {
        title: 'Apple Music - Discord Status',
        technology: ['Csharp', 'DiscordApp', 'Windows'],
        description: 'Windows app for updating Discord status with Apple Music info via Rich Text Presence.',
        imageSource: Images.AppleMusicDiscordStatus,
        sourceUrl: 'https://github.com/jwl-7/applemusic-discord-status',
        downloadUrl: 'https://github.com/jwl-7/applemusic-discord-status/releases/'
    }, {
        title: 'Wubble Words',
        technology: ['TypeScript'],
        description: 'Interactive experiment combining generative audio synthesis with dynamic typographic visualization.',
        imageSource: Images.WubbleWords,
        sourceUrl: 'https://github.com/jwl-7/wubble-words',
        liveUrl: 'https://jwl-7.github.io/wubble-words/',
    }, {
        title: 'Codex CFW',
        technology: ['TypeScript', 'DiscordApp'],
        description: 'A serverless Discord bot that utilizes the Discord Interaction API and integrates with CloudFlare Service Workers.',
        imageSource: Images.CodexCFW,
        sourceUrl: 'https://github.com/jwl-7/codex-cfw',
    }, {
        title: 'LeetCode Cheatsheet',
        technology: ['TypeScript', 'React'],
        description: 'Cheatsheet for LeetCode problems and algorithms with a modern glassmorphism design.',
        imageSource: Images.LeetCodeCheatsheet,
        sourceUrl: 'https://github.com/jwl-7/leetcode-cheatsheet',
        liveUrl: 'https://jwl-7.github.io/leetcode-cheatsheet/',
    }, {
        title: 'LeetCode Themes',
        technology: ['JavaScript', 'Firefox'],
        description: 'A firefox browser extension a firefox browser extension for customizing the LeetCode editor.',
        imageSource: Images.LeetCodeThemes,
        sourceUrl: 'https://github.com/jwl-7/leetcode-themes',
        downloadUrl: 'https://addons.mozilla.org/en-US/firefox/addon/leetcode-themes/'
    }, {
        title: 'Cyberfolio',
        technology: ['TypeScript', 'React'],
        description: 'A modern portfolio website made with ReactJS.',
        imageSource: Images.Cyberfolio,
        sourceUrl: 'https://github.com/jwl-7/portfolio',
    }, {
        title: 'Codex',
        technology: ['Python', 'DiscordPy'],
        description: 'A python discord bot with Markov chain responses, slots, and more.',
        imageSource: Images.Codex,
        sourceUrl: 'https://github.com/jwl-7/Codex',
    }, {
        title: 'KZBOT',
        technology: ['Python', 'DiscordPy'],
        description: 'A python discord bot for CS:GO KZ community servers.',
        imageSource: Images.KZBot,
        sourceUrl: 'https://github.com/jwl-7/kzbot',
    }, {
        title: 'Stick Bop!',
        technology: ['Python', 'PyGame'],
        description: 'A python game inspired by the 90s Bop It! toy.',
        imageSource: Images.StickBop,
        sourceUrl: 'https://github.com/jwl-7/Stick-Bop',
        downloadUrl: 'https://github.com/jwl-7/Stick-Bop/releases'
    }, {
        title: 'c0de_gr1nd',
        technology: ['Python'],
        description: 'Python solutions for Elements of Programming Interviews.',
        imageSource: Images.CodeGrind,
        sourceUrl: 'https://github.com/jwl-7/c0de_gr1nd',
    }, {
        title: 'nade.space',
        technology: ['JavaScript'],
        description: 'An interactive web-app for learning nades in CS:GO.',
        imageSource: Images.NadeSpace,
        sourceUrl: 'https://github.com/jwl-7/nade.space',
        liveUrl: 'https://jwl-7.github.io/nade.space/',
}] satisfies Project[] as Project[]
