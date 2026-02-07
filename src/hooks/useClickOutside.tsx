import { RefObject, useEffect } from 'react'

export function useClickOutside(
    refs: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
    handler: VoidFunction
) {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as Node
            const refArray = Array.isArray(refs) ? refs : [refs]

            const clickedOutside = refArray.every(ref =>
                ref.current && !ref.current.contains(target)
            )

            if (clickedOutside) handler()
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [refs, handler])
}
