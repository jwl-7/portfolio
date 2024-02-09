import { CSSProperties, ReactNode } from 'react'


interface ContainerProps {
    fluid?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    className?: string
    children: ReactNode
}

const sizes = {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px'
}


export default function Container({
    fluid = false,
    size = 'sm',
    className,
    children
}: ContainerProps) {
    const style: CSSProperties = {
        width: fluid ? '100%' : 'auto',
        maxWidth: fluid ? '100%' : sizes[size]
    }
    const classes = `container ${className}`

    return <div className={classes} style={style}>{children}</div>
}
