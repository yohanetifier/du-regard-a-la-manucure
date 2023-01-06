import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Follow from '../Follow/Follow'
import { useState } from 'react';
import Button from '../Button/Button';

function Footer() {

    return (
        <div className={styles.layoutwrapper}>
            <div>
                <p>Du regard à la manucure</p>
                <Button
                    label="Contact"
                    to="/contact"
                />
                <Follow
                    wrapperAppear={true}
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