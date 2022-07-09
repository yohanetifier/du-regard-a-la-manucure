import styles from './Work.module.scss';
import img1 from '../../assets/images/henry-co-OpjlRo-31SI-unsplash.jpg';
import img2 from '../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg';
import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg';
import img4 from '../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg';


function Work() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.leftwrapper}>
                <div className={styles.topwrapper}>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image1" className={styles.img} />
                    </div>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image2" className={styles.img} />
                    </div>
                </div>
                <div className={styles.middlewrapper}>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image3" className={styles.img} />
                    </div>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image4" className={styles.img} />
                    </div>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image5" className={styles.img} />
                    </div>
                </div>
                <div className={styles.bottomwrapper}>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image6" className={styles.img} />
                    </div>
                    <div className={styles.imgcontainer}>
                        <img src={img1} alt="image7" className={styles.img} />
                    </div>
                </div>
            </div>
            <div className={styles.rightwrapper}>
                <div className={styles.rightwrappertitle}>
                    <h2 className={styles.title}>Lorem Ipsum</h2>
                    <div className={styles.wrapperdescription}>
                        <p className={styles.description}>Lorem ipsum dolor sit amet. Et rerum aperiam nam provident vitae eos fugiat perspiciatis et dolorem veritatis 33 sint tempora aut quod quibusdam qui quam dolorum.
                            Sed iusto quia hic minus explicabo ut tempore voluptate et labore mollitia At voluptatibus galisum non dignissimos eaque qui Quis ullam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Work;

