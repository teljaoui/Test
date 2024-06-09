import React from "react";
import { Link, Route, Routes, BrowserRouter, useParams } from "react-router-dom";

function ProductDetails({ products }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <img
                src={`/pictures/${product.thumbnail}`}
                alt={product.title}
            />
            <p>Price: {product.price}</p>
            <Link to={"/"}>Aller vers la page d'accuiel</Link>
        </div>
    );
}


function Pcportable({ products }) {

    return (
        <div className="container">
            <div className="row">
                {products.map((e) => (
                    <div className="col" key={e.id}>
                        <div className="card shadow-sm">
                            <Link to={`products/${e.id}`}>
                                <img
                                    className="bd-placeholder-img card-img-top"
                                    src={`pictures/${e.thumbnail}`}
                                    alt=""
                                />
                            </Link>
                            <div className="card-body">
                                <p className="card-title">{e.title}</p>
                                <p className="card-text">{e.price}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            Ajouter au panier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    const products = [
        {
            id: 1,
            title: 'PC Portable Gamer HP VICTUS',
            price: '7490 DH',
            thumbnail: 'HP16D0195NF.jpg'
        },
        {
            id: 2,
            title: 'PC Portable Gamer HP VICTUS',
            price: '2190 DH',
            thumbnail: 'HP14424U3EA.jpg'
        },
        {
            id: 3,
            title: 'Pc Portable Chromebook Acer',
            price: '3640 DH',
            thumbnail: 'NXATHEF002.jpg'
        },
        {
            id: 4,
            title: 'PC Portable - HUAWEI',
            price: '1270 DH',
            thumbnail: 'HUA6901443442959.jpg'
        },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pcportable products={products} />} />
                <Route path="products/:id" element={<ProductDetails products={products} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
