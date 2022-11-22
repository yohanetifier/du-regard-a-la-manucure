import styles from './SecondSection.module.scss';
// import Image from '../Image/Image';
// import { Img } from '../Concept/Concept'
// import img1 from '../../assets/images/ana-francisconi-x-CXDIuhS3c-unsplash.jpg'
import { useRef } from "react";
import img2 from '../../assets/images/hadis-safari-A7rkoSFjrG0-unsplash.jpg'
import img1 from '../../assets/images/sara-dabaghian-wZx6BeqZNUk-unsplash.jpg'
import useIntersection from '../UseIntersection/UseIntersection';
import { useSpring, animated, useChain, useSpringRef } from 'react-spring';

function SecondSection() {
    const wrapper = useRef(null);
    const ifIsInViewport = useIntersection(wrapper, 0.3);

    // Animation
    const springRef = useSpringRef();
    const testRef = useSpringRef();
    const translationByTheLeft = useSpring({
        // ref: testRef,
        from: { transform: "translateX(-100%)" },
        to: { transform: ifIsInViewport ? "translateX(0px)" : "translateX(-100%)" },
        config: { duration: 1000 }
    })
    const translationByTheRight = useSpring({
        from: { transform: "translateX(100%)" },
        to: { transform: ifIsInViewport ? "translateX(0px)" : "translateX(100%)", },
        config: { duration: 1000 }
    })
    const AppearByLine = useSpring({
        // ref: springRef,
        from: { opacity: 0 },
        to: { opacity: ifIsInViewport ? 1 : 0 },
        config: { duration: 1000 }
    })

    // useChain([translationByTheLeft, translationByTheRight])

    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            <div className={styles.imageleftwrapper} >
                {ifIsInViewport && <animated.img src={img1} alt="" className={styles.imgleft} style={{ ...translationByTheLeft }} />}
                {/* <div className={styles.sentence}>
                    <p> La beauté est dans les yeux de celui qui regarde. Oscar Wilde</p>
                </div> */}

            </div>
            <div className={styles.sentence}>
                {/* <p> La beauté est  dans les yeux  de celui  qui regarde.  Oscar Wilde</p> */}
                <animated.p style={{ ...translationByTheLeft }}> La beauté </animated.p>
                <p> est </p>
                <p> dans les yeux </p>
                <p> de celui  qui regarde.   </p>
                <p> Oscar Wilde </p>
            </div>
            <div className={styles.imagerightwrapper}>
                {ifIsInViewport && <animated.img src={img2} alt="" className={styles.imgright} style={{ ...translationByTheRight }} />}
            </div>
        </div>
    )
}

export default SecondSection; 