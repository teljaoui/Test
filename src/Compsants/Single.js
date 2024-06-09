import { Link, useParams } from "react-router-dom"
function Single(props) {
    const {id} = useParams();
    const product = props.produits.find((p)=>p.id===parseInt(id));
    return (
        <div>
            <img src={`/pictures/${product.thumbnail}`} alt="" />
            <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <Link to={"/"}>Aller vers la page d'accuiel</Link>
            </div>
        </div>
    )
}
export default Single