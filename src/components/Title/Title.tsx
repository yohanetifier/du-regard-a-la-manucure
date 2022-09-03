import styles from './Title.module.scss';

interface Props {
    children: string
    className?: string
}

function Title({ children, className }: Props) {
    return (
        <h2 className={`${className} ${styles.defaultstyles}`}>
            {children}
        </h2>
    )
}

export default Title;