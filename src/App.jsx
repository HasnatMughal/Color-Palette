import { ColorPicker, useColor} from 'react-color-palette';
import 'react-color-palette/css'
import './App.css'
import { useState } from 'react';

function App() {
 
  let hex = "#21345F"


  const [colorValue, setColorValue] = useState(hex)
  const [darkShadeValue, setDarkShadeValue] = useState()
  const [rgbValue,setRGBValue] = useState({r : 0, g : 0, b : 0})
  const [hexValue,setHexValue] = useState(hex)
// console.log(rgbValue);

  
  
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
  hexToRGB(hex)
  
    const rgbToHex = ({ r ,g ,b }) => {
      console.log(r,g,b);
      
    const Red = r.toString(16).padStart(2,"0")
    const Green = g.toString(16).padStart(2,"0")
    const Blue = b.toString(16).padStart(2,"0")
   

   setHexValue(`#${Red}${Green}${Blue}`.toUpperCase()) 
  
}
rgbToHex(rgbValue)
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
    <h1>Color Palette Generator</h1>
    {/* <ColorPicker color={color} onChange={setColor} /> */}

  <input type="color" className='w-3xl h-5xl' value={colorValue} onChange={() => setColorValue(hexValue)}  />

    {/* <div>
      <div style={{backgroundColor :`#${darkShadeValue}`, width: "100px", height : "100px"}}>{darkShadeValue}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}
    </>
    
    
  
  )

}
export default App
