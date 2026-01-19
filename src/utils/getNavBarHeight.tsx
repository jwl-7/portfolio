export default function getNavBarHeight(): number {
    const root = document.documentElement
    const height = getComputedStyle(root).getPropertyValue('--navbar-height')
    return parseFloat(height) || 76
}
