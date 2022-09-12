import styles from './Prestations.module.scss';
import ServiceDescription from './ServiceDescription/ServiceDescription';
import img1 from '../../assets/images/amanda-dalbjorn-fvInY-Gh7sc-unsplash.jpg';
import Preconditions from './Preconditions/Preconditions';

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

    const conditions = [
        {
            sentence: "Les jeunes de moins de 16 ans : ongles pas assez matures et risque plus élevé de malformation de l’ongle."
        },
        {
            sentence: "Les personnes sous traitement médicamenteux aux stéroïdes ou traitement antibiotique prolongé : problème d’adhérence des produits."
        },
        {
            sentence: "En cas de maladie de l’ongle, par exemple mycose, pour éviter toute contamination."
        },
        {
            sentence: " Les personnes allergiques aux produits."
        },
        {
            sentence: "Mais aussi au-delà du 7ème mois de grossesse ou en cas d’intervention chirurgicale proche."
        },
        {
            sentence: "Pour une pose de vernis semi-permanent sur les ongles de pieds, il est nécessaire de venir avec les pieds propres, les ongles coupés et sains. Dans le cas contraire, la pose sera refusée"
        },
    ]

    return (
        <div className={styles.mainwrapper}>
            <ServiceDescription
                assets={service} />
            <Preconditions
                title="Les conditions prealables"
                subtitle="La pose de faux ongles n'est pas anodine, faites appel à une professionnelle qualifiée !"
                introsentence="Du regard à la manucure refuse: "
                conditions={conditions}
            />
        </div>
    )
}