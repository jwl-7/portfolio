export type NowStatus = 'planning' | 'building' | 'testing' | 'shipped'

interface NowItem {
    title: string
    description: string
    status: NowStatus
    tag?: string
    url?: string
}

// shown under "> Currently Building" in the about terminal
export default [{
        title: 'Traffic Underground',
        description: 'Offline traffic simulation suite for Assetto Corsa.',
        status: 'building',
        tag: 'Assetto Corsa Mod',
        url: 'https://vosan.co/paid-mods/traffic-underground'
    }, {
        title: 'On Guard',
        description: 'A mobile game, currently in development.',
        status: 'building',
        tag: 'iOS Game'
    }, {
        title: 'Untitled Track',
        description: 'A dubstep track produced in Serum.',
        status: 'building',
        tag: 'Dubstep · Serum'
    }
] as NowItem[]
