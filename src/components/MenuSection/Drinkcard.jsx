// MenuSection.js
import React from 'react';
import './Drinkcard.css'; // Assuming you have a CSS file for styling

const Drinkcard = ({items }) => {
    return (
        <section className="menu-section">
            <div className="menu-items">
                {items.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <div className='menu-addon'>
                            <div>Can be add :</div>
                            <div className='b1'>Sugar</div>
                            <div className='b2'>Vanilla aroma</div>
                            <div className='b3'>Cherry jam</div>
                            <div className='b4'>Cinnamon</div>
                        </div>
                        <div className='menu-order'>
                            <p className="price">${item.price}</p>
                            <button>Make an order</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Drinkcard;
