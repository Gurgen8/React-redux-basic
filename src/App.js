import React from "react";
import {useSelector,useDispatch} from "react-redux"



function App() {
  const dispatche=useDispatch()
  const cashe=useSelector(state => state.cash.cash)
  const customer=useSelector(state =>  state.custom.custom)

 

  const getCash=(cash)=>{
    dispatche({
      type:"GET_CASH",
       payload:cash
    })

  }


  const addCashe=(cash)=>{

    dispatche({
      type:"ADD_CASH",
       payload:cash
    })
  }

  const addCustom=(name)=>{
   const costumer={
     name:name,
     id:new Date()
   }

   dispatche({
     type:"ADD_COSTUMER",
     payload:costumer
   })



  }

  const removeCustom=(customer)=>{
    
 
    dispatche({
      type:"REMOVE_COSTUMER",
      payload:customer.id
    })
 
 

  }


  return (
    <>

     {cashe}
    <button onClick={()=>addCashe(Number(prompt()))}>increment</button>
    <button onClick={()=>getCash(Number(prompt()))}>decreent</button>
    <button onClick={()=>addCustom(prompt())}>add people</button>
    

    {customer.length?customer.map(c=>{
      return(<div>{c.name} <button onClick={()=>removeCustom(c)}>remove</button></div>)
    }):null}

    </>
  );
}

export default App;
