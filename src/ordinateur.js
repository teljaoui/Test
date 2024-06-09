import React from 'react';
import { Routes, Route, Link, BrowserRouter, useParams } from 'react-router-dom';
import './route.css';

function Site() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const products =  [
    {
      id: 1,
      title: 'PC Portable Gamer HP VICTUS',
      price: '7490 DH',
      thumbnail: 'laptop1.jpg',
    },
    {
      id: 2,
      title: 'PC Portable Gamer HP VICTUS',
      price: '2190 DH',
      thumbnail: 'laptop2.jpg',
    },
    {
      id: 3,
      title: 'Pc Portable Chromebook Acer',
      price: '3640 DH',
      thumbnail: 'laptop3.jpg',
    },
    {
      id: 4,
      title: 'PC Portable - HUAWEI',
      price: '1270 DH',
      thumbnail: 'laptop4.jpg',
    },
  ];

  return (<>
    <h1>Ordinateurs Portable</h1>
    <div className='Parent'>
        {products.map((product) => (
          <div key={product.id} className='list'>
                <img src={"images/"+product.thumbnail}/>
                <p>{product.title}</p>
                <p>{product.price}</p>
            <Link to={`/users/${product.id}`}>
                    <button>Ajouter au Panier</button>
                </Link>
          </div>
        ))}

    </div></>
  );
}

function ProductDetails() {
    const products = [
        {
          id: 1,
          title: 'PC Portable Gamer HP VICTUS',
          price: '7490 DH',
          thumbnail: 'laptop1.jpg',
        },
        {
          id: 2,
          title: 'PC Portable Gamer HP VICTUS',
          price: '2190 DH',
          thumbnail: 'laptop2.jpg',
        },
        {
          id: 3,
          title: 'Pc Portable Chromebook Acer',
          price: '3640 DH',
          thumbnail: 'laptop3.jpg',
        },
        {
          id: 4,
          title: 'PC Portable - HUAWEI',
          price: '1270 DH',
          thumbnail: 'laptop4.jpg',
        }
      ];
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      
      <p>Price: {product.price}</p>
      <p><img src={process.env.PUBLIC_URL + '/images/' + product.thumbnail}/></p>
      <Link to="/">retourner à l'acceuil</Link>
    </div>
  );
}

export default Site;