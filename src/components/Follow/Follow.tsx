import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Follow.module.scss';
import { motion } from 'framer-motion';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

interface Props {
    wrapperAppear: boolean
}

function Follow({ wrapperAppear }: Props) {
    return (
        <div className={styles.followwrapper}>
            <p className={styles.follow}>Suivez nous</p>
            <SocialNetwork
                className={styles.socialNetwork} />
        </div>
    )
}

export default Follow; 