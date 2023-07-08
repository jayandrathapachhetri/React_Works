
import React, { useState } from 'react';
// import './App.css';
import Header from './Header';
import Info from './Info';

function InternDetail() {
  const [items, setItems] = useState(Info);

  const filterItem = (roleItem) => {
    const updatedItems = Info.filter((curElem)=>{
      return curElem.position === roleItem;
    });
    setItems(updatedItems);
  }

  return (
    <>
    <Header/>
        <div className="container">
  {/* <h1>Intern Details</h1> */}
  
  <div className="menu-tabs ">
    <button className="btn" onClick={()=>filterItem('Frontend')}>Frontend</button>
    <button className="btn" onClick={()=>filterItem('Backend')}>Backend</button>
    <button className="btn" onClick={()=>filterItem('QA')}>QA</button>
    <button className="btn" onClick={()=>filterItem('Flutter')}>Flutter</button>
    <button className="btn" onClick={()=>setItems(Info)}>All</button>
  </div>

  <hr />

  <div className="box-container">
    {
        items.map((elem) => {
        const{image, name, email, college, phone_no, position, dateofstart, dateofend} = elem;
        
        return(
          <div className="box">
      <img src={image} alt={name} />
      <ul className="Info">
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone_no}</li>
        <li>College: {college}</li>
        <li>Role: {position}</li>
        <li>Joining Date: {dateofstart}</li>
        <li>Leaving Date: {dateofend}</li>
      </ul>
    </div>
        )
      })
    }
  </div>
</div>

    </>
  );
}

export default InternDetail;






