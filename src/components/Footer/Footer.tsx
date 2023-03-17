import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Follow from '../Follow/Follow'
import { useState } from 'react';
import Button from '../Button/Button';

function Footer() {

    return (
        <div className={styles.layoutwrapper}>
            <div className={styles.wrapper}>
                <p>Du regard à la manucure</p>
                {/* <div className={styles.wrapperButton}> */}
                <Button
                    label="Contact"
                    to="/contact"
                />
                {/* </div> */}
                <Follow
                // wrapperAppear={true}
                />
                <Link
                    className={styles.customLink}
                    to="/mentions-legales"
                >Mentions Legales
                </Link>
            </div>
        </div >
    )
};

export default Footer; 