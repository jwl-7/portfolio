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
        description: 'Next update to my offline traffic simulation suite for Assetto Corsa.',
        status: 'building',
        tag: 'Assetto Corsa',
        url: 'https://vosan.co/paid-mods/traffic-underground'
    }, {
        title: 'Untitled iOS Game',
        description: 'A mobile game, currently in development.',
        status: 'building',
        tag: 'iOS'
    }
] as NowItem[]
