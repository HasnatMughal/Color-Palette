import { ColorPicker, useColor} from 'react-color-palette';
import 'react-color-palette/css'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
 
  // let hex = "#21345F"


  const [colorValue, setColorValue] = useState("#21345F")
  const [darkShadeValue, setDarkShadeValue] = useState({r : 0, g : 0, b : 0})
  const [rgbValue,setRGBValue] = useState({r : 0, g : 0, b : 0})
  const [hexValue,setHexValue] = useState("")
// console.log(rgbValue);

  
  const valueConversion = useEffect(() => {
const hexToRGB = (hex) => {
      console.log(hex);
      
    hex = hex.replace(/#/,"")
  
  console.log(hex);
  
     const r = parseInt(hex.substring(0,2) ,16)
     const g = parseInt(hex.substring(2,4) ,16)
     const b = parseInt(hex.substring(4,6) ,16)

    setRGBValue({ r ,g ,b })
    console.log(rgbValue);
    
    
  }
  hexToRGB(colorValue)
 

  const darkShade = ( {r , g , b }) => {
   r = Math.floor(r *0.8)
   g = Math.floor(g * 0.8)
   b = Math.floor(b * 0.8)

   setDarkShadeValue({ r, g ,b})
  }

  darkShade(rgbValue)
  
    const rgbToHex = ({ r ,g ,b }) => {
      console.log(r,g,b);
      
    const Red = r.toString(16).padStart(2,"0")
    const Green = g.toString(16).padStart(2,"0")
    const Blue = b.toString(16).padStart(2,"0")
   

   setHexValue(`#${Red}${Green}${Blue}`.toUpperCase()) 
  
}
rgbToHex(darkShadeValue)
  },[colorValue])
  

  // const darkShade = () => {
  //   hexToRGB(hex)
  //   r = r * 0.8
  //   g = g * 0.8
  //   b = b * 0.8

  //   setDarkShadeValue(r,g,b)
  // }
  
  // console.log(colorValue);
  

  return (
    <>
    <div className='w-full h-full bg-white p -3 '>
    <h1 className='text-center font-bold text-4xl'>Color Palette Generator</h1>
    {/* <ColorPicker color={color} onChange={setColor} /> */}

  <input type="color" className='w-56 h-56' value={colorValue} onChange={(e) => setColorValue(e.target.value)}  />

    <div className='d-flex bg-white p-4'>
      <div className='w-56 h-56' style={{background :`${hexValue}`, width: "100px", height : "100px"}}>{hexValue}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
    </>
    
    
  
  )

}
export default App
