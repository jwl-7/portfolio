import imgAppleMusicDiscordStatus from '@images/applemusic-discord-status-ss.webp'
import imgCodeGrind from '@images/codegrind-ss.webp'
import imgCodex from '@images/codex-ss.webp'
import imgCodexCFW from '@images/codex-cfw-ss.webp'
import imgKZBot from '@images/kzbot-ss.webp'
import imgLeetCodeCheatsheet from '@images/leetcode-cheatsheet-ss.webp'
import imgLeetCodeThemes from '@images/leetcode-themes-ss.webp'
import imgNadeSpace from '@images/nadespace-ss.webp'
import imgCyberfolio from '@images/cyberfolio-ss.webp'
import imgStickBop from '@images/stickbop-ss.webp'


export default [{
        title: 'Codex CFW',
        technology: ['TypeScript', 'DiscordApp'],
        description: 'A serverless Discord bot that utilizes the Discord Interaction API and integrates with CloudFlare Service Workers.',
        imgSrc: imgCodexCFW,
        sourceUrl: 'https://github.com/jwl-7/codex-cfw',
    }, {
        title: 'Apple Music - Discord Status',
        technology: ['Csharp', 'DiscordApp', 'Windows'],
        description: 'Windows app for updating Discord status with Apple Music info via Rich Text Presence.',
        imgSrc: imgAppleMusicDiscordStatus,
        sourceUrl: 'https://github.com/jwl-7/applemusic-discord-status',
        downloadUrl: 'https://github.com/jwl-7/applemusic-discord-status/releases/'
    }, {
        title: 'LeetCode Cheatsheet',
        technology: ['TypeScript', 'React'],
        description: 'Cheatsheet for LeetCode problems and algorithms with a modern glassmorphism design.',
        imgSrc: imgLeetCodeCheatsheet,
        sourceUrl: 'https://github.com/jwl-7/leetcode-cheatsheet',
        liveUrl: 'https://jwl-7.github.io/leetcode-cheatsheet/',
    }, {
        title: 'LeetCode Themes',
        technology: ['JavaScript', 'Firefox'],
        description: 'A firefox browser extension a firefox browser extension for customizing the LeetCode editor.',
        imgSrc: imgLeetCodeThemes,
        sourceUrl: 'https://github.com/jwl-7/leetcode-themes',
        downloadUrl: 'https://addons.mozilla.org/en-US/firefox/addon/leetcode-themes/'
    }, {
        title: 'Cyberfolio',
        technology: ['TypeScript', 'React'],
        description: 'A modern portfolio website made with ReactJS.',
        imgSrc: imgCyberfolio,
        sourceUrl: 'https://github.com/jwl-7/portfolio',
    }, {
        title: 'Codex',
        technology: ['Python', 'DiscordPy'],
        description: 'A python discord bot with Markov chain responses, slots, and more.',
        imgSrc: imgCodex,
        sourceUrl: 'https://github.com/jwl-7/Codex',
    }, {
        title: 'KZBOT',
        technology: ['Python', 'DiscordPy'],
        description: 'A python discord bot for CS:GO KZ community servers.',
        imgSrc: imgKZBot,
        sourceUrl: 'https://github.com/jwl-7/kzbot',
    }, {
        title: 'Stick Bop!',
        technology: ['Python', 'PyGame'],
        description: 'A python game inspired by the 90s Bop It! toy.',
        imgSrc: imgStickBop,
        sourceUrl: 'https://github.com/jwl-7/Stick-Bop',
        downloadUrl: 'https://github.com/jwl-7/Stick-Bop/releases'
    }, {
        title: 'c0de_gr1nd',
        technology: ['Python'],
        description: 'Python solutions for Elements of Programming Interviews.',
        imgSrc: imgCodeGrind,
        sourceUrl: 'https://github.com/jwl-7/c0de_gr1nd',
    }, {
        title: 'nade.space',
        technology: ['JavaScript'],
        description: 'An interactive web-app for learning nades in CS:GO.',
        imgSrc: imgNadeSpace,
        sourceUrl: 'https://github.com/jwl-7/nade.space',
        liveUrl: 'https://jwl-7.github.io/nade.space/',
}]
