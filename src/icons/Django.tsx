import { useTheme } from '@hooks/useTheme'


export function SvgDjango() {
    const theme = useTheme()
    const color = theme === 'dark' ? '#44B78B' : '#003A2B'

    return (
        <svg viewBox="0 0 128 128">
            <path
                fill={color}
                d="M126.5 83.8c0 3.8-3.1 6.9-6.9 6.9H8.4c-3.8 0-6.9-3.1-6.9-6.9V44.2c0-3.8 3.1-6.9 6.9-6.9h111.2c3.8 0 6.9 3.1 6.9 6.9z"
            />
            <path
                fill="#FFFFFF"
                d="M23 45.6h6V73c-3 .6-5.3.8-7.7.8-7.2 0-11-3.3-11-9.5 0-6 4-10 10.2-10 1 0 1.7.1 2.6.3v-9zm0 13.8c-.7-.2-1.3-.3-2-.3-3 0-4.7 1.8-4.7 5.1 0 3.2 1.7 4.9 4.7 4.9.7 0 1.2 0 2-.2zm15.4-4.6v13.7c0 4.7-.3 7-1.4 9-1 1.9-2.2 3.1-4.8 4.4l-5.5-2.6c2.6-1.2 3.9-2.3 4.7-4s1.1-3.7 1.1-8.8V54.8zm-5.9-9.1h5.9v6.1h-5.9zM42 56.1c2.6-1.2 5.1-1.8 7.8-1.8 3 0 5 .8 5.9 2.4.5.9.7 2 .7 4.5v12c-2.7.4-6 .7-8.5.7-5 0-7.2-1.7-7.2-5.6 0-4.2 3-6.1 10.2-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-4.7.6-7 1.8v-4.5zm9.2 9.4c-3.9.4-5.2 1-5.2 2.5 0 1.2.7 1.7 2.3 1.7.9 0 1.7-.1 2.8-.3v-3.9zm8.1-9.8c3.5-.9 6.4-1.3 9.3-1.3 3 0 5.2.7 6.5 2 1.2 1.3 1.6 2.7 1.6 5.6v11.6h-5.9V62.2c0-2.3-.8-3.1-2.9-3.1-.8 0-1.5.1-2.7.4v14.1h-5.9zM79 76.8c2.1 1.1 4.2 1.6 6.3 1.6 3.9 0 5.5-1.6 5.5-5.3V73c-1.2.6-2.3.8-3.8.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2 4.3c-1.6-.3-.1 0-1.3-.2v.6l.1 2.5v3.2c0 .8 0 1.6.1 2.4v1.6c0 5.1-.4 7.5-1.7 9.4-1.8 2.9-5 4.3-9.6 4.3-2.3 0-4.3-.3-6.4-1.2v-5.4zm11.8-17.6h-.6c-1.2 0-2.5.3-3.4.8-1.4.8-2.2 2.3-2.2 4.3 0 3 1.5 4.7 4.1 4.7.8 0 1.5-.2 2.2-.4v-9.4zm18.2-4.9c5.9 0 9.5 3.7 9.5 9.8 0 6.2-3.8 10.1-9.8 10.1-5.9 0-9.6-3.7-9.6-9.7.1-6.3 3.9-10.2 9.9-10.2m-.1 15c2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2s-3.7 1.9-3.7 5.2c.1 3.4 1.4 5.2 3.7 5.2"
            />
        </svg>
    )
}
