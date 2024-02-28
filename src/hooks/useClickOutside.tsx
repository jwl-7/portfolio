import { RefObject, useEffect } from 'react'


interface useClickOutsideProps {
    refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
    handler: Function
}


export function useClickOutside({ refs, handler }: useClickOutsideProps) {
    const handleClick = (event: MouseEvent) => {
        const clickedOutside = (ref: RefObject<HTMLElement>) => ref.current && !ref.current.contains(event.target as Node)
        if ((Array.isArray(refs) ? refs.every(clickedOutside) : clickedOutside(refs))) handler()
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [refs, handler])
}
