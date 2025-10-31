import React from 'react'

const Card = (props) => {

  // console.log(props);
  // console.log(props.user);
  // console.log(props.age);
  // console.log(props.name , props.age);
  
  
  return (
   
    
    <>
     
         <div className="card">
      {/* <img src='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059'></img> */}
      <img src={props.img}></img>
      <h1>{props.user} , {props.age}</h1>
      <p>Indian Armed Forces Lover</p>
      <button>View Profile</button>
    </div>
    </>
  )
}

export default Card