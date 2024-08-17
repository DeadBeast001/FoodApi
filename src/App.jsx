import { useState } from 'react'
import Search from './components/Search'


function App() {
   const[foodData,setfoodData]=useState([])

  return (
    <>
   
    <Search foodData={foodData} setfoodData={setfoodData}  />
      
       </>
   )
}

export default App







