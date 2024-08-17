
import FoodItem from './fooditem'
import InputErrorHandle from './InputErrorHandle'

import { useEffect, useState } from "react"
const URL="https://www.themealdb.com/api/json/v1/1/categories.php"
const Url="https://www.themealdb.com/api/json/v1/1/search.php?s="
export default function Search({foodData,setfoodData}){
const[querry,setquerry]=useState('')

useEffect(()=>{
async function fetchdata(){
   try{
     let response=await fetch(`${Url} ${querry}`)
    let data=await response.json()
    console.log(data.meals)
    setfoodData(data.meals)
   
}catch(error){
    console.error("Oops something went wrong",error)
} }
fetchdata()

},[querry])

 
 return(
    <>
    <input type="text" onChange={(e)=>setquerry(e.target.value) }value={querry}  />
   
   {foodData? (foodData.map((item)=><FoodItem key={item.idMeal} item={item} />) ) :<InputErrorHandle/>}
  
    </>
 )
}

