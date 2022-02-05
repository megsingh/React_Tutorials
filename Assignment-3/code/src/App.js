import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
function App() {

  const person = {
    name:"Alan Ford",
    id: "00005152"
  }
  const customerInfo = {
    AppointmentTime: "9:00",
    AppointmentDate: "24-05-2016",
    email: "abc@gmail.com",
    phone: "+31123456789"
  }

  const orderInfo = {
    status:"In progress",
    door:"Mark",
    time:"10:30",
    date: "25-05-2016"
  }

  const productList = {
    title: "Laptop",
    description: "silver, Asus, i5 7th gen 500GB SSD 16 GB RAM",
    productImage: 'https://www.w3schools.com/howto/img_avatar.png'
  }


  return (
    <div className="site-container">
      <div className = "person">
        <h1>{person.name}</h1>
        <h3>{person.id}</h3>
        </div>
      <div className = "customer-info">
          <p><strong>Appointment On:  </strong>{customerInfo.AppointmentTime} ({customerInfo.AppointmentDate})</p>
          <p><strong>Email:  </strong>{customerInfo.email} </p>
          <p><strong>Phone:  </strong>{customerInfo.phone}</p>
      </div>

      <div className = "order-info">
        <div className='col'>
          <h4><strong>Status </strong></h4>
          <ul>
            <li>{orderInfo.status}</li>
          </ul>
        </div>
        <div className='col'>
        <h4><strong>Door </strong></h4>
          <p>{orderInfo.door}</p>
        </div>
        <div className='col'>
        <h4><strong>Time </strong></h4>
          <p>{orderInfo.time} ({orderInfo.date})</p>
        </div>
      </div>

      <div className = "product-list">
        <img src={productList.productImage} alt='cannot load product image'/>
        <div className='productDescription'>
        <h4>{productList.title}</h4>
        <p>{productList.description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
