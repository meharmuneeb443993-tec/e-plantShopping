
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies indoor air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the room naturally while purifying air.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to grow with broad glossy leaves that clean air.',
          cost: '$20',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Medicinal properties and purifies air from toxins.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
          description: 'Calming aroma, very effective for stress relief.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729984859-b97755814259?auto=format&fit=crop&w=600&q=80',
          description: 'Sweet fragrance, promotes better sleep and relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, frequently used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, easy to grow on sunny windowsills.',
          cost: '$10',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2015/07/17/13/44/lemon-balm-849185_1280.jpg',
          description: 'Citrusy aroma that repels pests and soothes anxiety.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Vibrant spring blooms with powerful floral scent.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Low Maintenance Succulents',
      plants: [
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
          description: 'Requires minimal watering and symbolizes good luck.',
          cost: '$15',
        },
        {
          name: 'Zebra Haworthia',
          image: 'https://cdn.pixabay.com/photo/2020/07/04/18/35/haworthia-5370597_1280.jpg',
          description: 'Compact striped succulent that thrives indoors.',
          cost: '$11',
        },
        {
          name: 'Echeveria',
          image: 'https://cdn.pixabay.com/photo/2017/08/07/19/43/succulent-2607148_1280.jpg',
          description: 'Rosette-shaped succulent with beautiful pastel tones.',
          cost: '$13',
        },
        {
          name: 'Golden Pothos',
          image: 'https://images.unsplash.com/photo-1596724817758-00a3597c5cb9?auto=format&fit=crop&w=600&q=80',
          description: 'Tolerates low light and neglect without issues.',
          cost: '$14',
        },
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Drought-tolerant plant perfect for dark room corners.',
          cost: '$25',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/houseplants-1867187_1280.jpg',
          description: 'Virtually indestructible with thick foliage.',
          cost: '$20',
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ height: '50px', width: '50px' }} />
            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Greenery Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
              <h1 className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="40" width="40">
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L42.3,72Z" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <span className="cart_quantity_count">{totalQuantity}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2 className="plant_heading" style={{ textAlign: 'center', margin: '20px' }}>{category.category}</h2>
              <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '280px', textAlign: 'center' }}>
                    <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div className="product-title" style={{ fontWeight: 'bold', margin: '10px 0' }}>{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost" style={{ fontSize: '18px', color: '#2e7d32', margin: '10px 0' }}>{plant.cost}</div>
                    <button
                      className="product-button"
                      style={{
                        backgroundColor: addedToCart[plant.name] ? '#cccccc' : '#4CAF50',
                        color: 'white',
                        padding: '10px 15px',
                        border: 'none',
                        cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer',
                        borderRadius: '4px',
                      }}
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
