import { Link } from "react-router-dom";

function Product(props){
    return (
        <div>
        <div>
            <Link to={`/product/${props.data.id}`}>
                <img src={`pictures/${props.data.thumbnail}`} alt="" />
            </Link>
            <div>
                <p>{props.data.title}</p>
                <p>{props.data.price}</p>
                <div>
                    <div>
                        <button>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Product;