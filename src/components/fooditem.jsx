import { useState } from "react"

export default function FoodItem({item}){
 const[isvisible,setisvisible]=useState(null)
   
 const Handleclick=(desciption)=>{
        console.log(desciption)
    setisvisible(desciption===isvisible?null:desciption)
}

        
    return(<>
        <h6>{item.strMeal}</h6>
        <img src={item.strMealThumb} alt={item.strMealThumb} width="100" />
        <button key={item.idMeal} onClick={()=>Handleclick(item.idMeal)}>view recipe</button>
       
       {isvisible?  
       <p>{item.strInstructions}</p>:null}

        </>

    )
}









