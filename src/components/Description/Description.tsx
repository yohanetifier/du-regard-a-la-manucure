interface Props {
    children: string
    className?: string
}

function Description({ children, className }: Props) {
    return (
        <p className={className}>
            {children}
        </p>
    )
}

export default Description; 