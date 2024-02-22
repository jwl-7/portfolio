import { RefObject, useEffect } from 'react'


export function useClickOutside(
    ref: RefObject<HTMLElement>,
    handler: Function
) {
    const handleClick = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as Node)) handler()
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [ref.current, handler])

    return [ref, handler]
}
