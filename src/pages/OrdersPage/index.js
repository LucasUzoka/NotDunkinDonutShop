import React, { useState } from 'react';
import Orders from '../../components/Orders';
import './orderspage.css'
const OrdersPage = () => {
  
  return (
    <div  style={{height: "100vh", position:"relative", zIndex: 1}}>
      <div className='form-container' style={{height: "80%", width: "70%"}}>
        <div className='form-content-right'>
          <img className='form-img' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.misskatecuttables.com%2Fuploads%2Fshopping_cart%2F10600%2Flarge_donut.png&f=1&nofb=1' alt='donut' />
        </div>
        <div className='overflow-auto'>
            <Orders />
        </div>
        
      </div>
    </div>
  );
};

export default OrdersPage;
