interface Props {
    children : string
    className: string
}

function Title ({children, className}: Props) {
    return (
        <h2 className={className}>
            {children}
        </h2>
    )
}

export default Title;