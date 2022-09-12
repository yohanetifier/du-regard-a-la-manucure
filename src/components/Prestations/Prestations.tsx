import styles from './Prestations.module.scss';
import ServiceDescription from './ServiceDescription/ServiceDescription';
import img1 from '../../assets/images/amanda-dalbjorn-fvInY-Gh7sc-unsplash.jpg';

export default function Prestation() {
    const service = [
        {
            src: img1,
            alt: img1,
            title: "First service",
            description: "Lorem ipsum dolor sit amet. Qui quas voluptatem quo esse dolores et beatae necessitatibus qui facilis itaque.Vel omnis numquam id vitae quam ut odio quae qui architecto galisum Cum tenetur incidunt At assumenda aspernatur et officiis delectus et maiores est tempore neque.  Id sapiente tenetur qui optio beatae quo voluptatem repudiandae ea sint provident et explicabo modi Est voluptatem exercitationem eum excepturi saepe  sit sint ullam vel fugiat et quaerat ratione qui enim distinctio a explicabo explicabo.At quisquam rerum in quidem voluptates est autem assumenda."
        },
        {
            src: img1,
            alt: img1,
            title: "Second service",
            description: "Lorem ipsum dolor sit amet. Qui quas voluptatem quo esse dolores et beatae necessitatibus qui facilis itaque.Vel omnis numquam id vitae quam ut odio quae qui architecto galisum Cum tenetur incidunt At assumenda aspernatur et officiis delectus et maiores est tempore neque.  Id sapiente tenetur qui optio beatae quo voluptatem repudiandae ea sint provident et explicabo modi Est voluptatem exercitationem eum excepturi saepe  sit sint ullam vel fugiat et quaerat ratione qui enim distinctio a explicabo explicabo.At quisquam rerum in quidem voluptates est autem assumenda."
        },
        {
            src: img1,
            alt: img1,
            title: "Third service",
            description: "Lorem ipsum dolor sit amet. Qui quas voluptatem quo esse dolores et beatae necessitatibus qui facilis itaque.Vel omnis numquam id vitae quam ut odio quae qui architecto galisum Cum tenetur incidunt At assumenda aspernatur et officiis delectus et maiores est tempore neque.  Id sapiente tenetur qui optio beatae quo voluptatem repudiandae ea sint provident et explicabo modi Est voluptatem exercitationem eum excepturi saepe  sit sint ullam vel fugiat et quaerat ratione qui enim distinctio a explicabo explicabo.At quisquam rerum in quidem voluptates est autem assumenda."
        },
        {
            src: img1,
            alt: img1,
            title: "Fourth service",
            description: "Lorem ipsum dolor sit amet. Qui quas voluptatem quo esse dolores et beatae necessitatibus qui facilis itaque.Vel omnis numquam id vitae quam ut odio quae qui architecto galisum Cum tenetur incidunt At assumenda aspernatur et officiis delectus et maiores est tempore neque.  Id sapiente tenetur qui optio beatae quo voluptatem repudiandae ea sint provident et explicabo modi Est voluptatem exercitationem eum excepturi saepe  sit sint ullam vel fugiat et quaerat ratione qui enim distinctio a explicabo explicabo.At quisquam rerum in quidem voluptates est autem assumenda."
        },
        {
            src: img1,
            alt: img1,
            title: "Fifth service",
            description: "Lorem ipsum dolor sit amet. Qui quas voluptatem quo esse dolores et beatae necessitatibus qui facilis itaque.Vel omnis numquam id vitae quam ut odio quae qui architecto galisum Cum tenetur incidunt At assumenda aspernatur et officiis delectus et maiores est tempore neque.  Id sapiente tenetur qui optio beatae quo voluptatem repudiandae ea sint provident et explicabo modi Est voluptatem exercitationem eum excepturi saepe  sit sint ullam vel fugiat et quaerat ratione qui enim distinctio a explicabo explicabo.At quisquam rerum in quidem voluptates est autem assumenda."
        },

    ]
    return (
        <div className={styles.mainwrapper}>
            <ServiceDescription
                assets={service} />
        </div>
    )
}