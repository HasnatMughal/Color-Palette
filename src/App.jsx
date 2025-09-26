import { ColorPicker, useColor} from 'react-color-palette';
import 'react-color-palette/css'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
 const [colorValue, setColorValue] = useState("#21345F")
  const [shades, setShades] = useState([])
  const [rgbValue, setRGBValue] = useState({r : 0, g: 0, b: 0})
  
  const hexToRGB = (hex) => {
    hex = hex.replace(/#/,"")

     const r = parseInt(hex.substring(0,2) ,16)
     const g = parseInt(hex.substring(2,4) ,16)
     const b = parseInt(hex.substring(4,6) ,16)

    return { r ,g ,b }

  }

      const rgbToHex = ({ r ,g ,b }) => {
      
      
    const Red = r.toString(16).padStart(2,"0")
    const Green = g.toString(16).padStart(2,"0")
    const Blue = b.toString(16).padStart(2,"0")
   

   return `#${Red}${Green}${Blue}`.toUpperCase()
  
}

const makeDarker = ({ r , g , b }, factor) => {
  return{
r : Math.floor(r * factor),
g : Math.floor(g * factor),
b : Math.floor(b * factor)
}
}
const makeLighter = ({ r , g , b }, factor) => {
return{
r : Math.floor(r + (255 - r) * factor),
g :  Math.floor(g + (255 - g) * factor),
b : Math.floor(b + (255 - b) * factor)
}
}

useEffect(() => {
const rgb = hexToRGB(colorValue);
setRGBValue(rgb)


const newShades = [
  makeDarker(rgb, 0.8),
  makeDarker(rgb, 0.6),
  makeDarker(rgb, 0.4),
  makeLighter(rgb, 0.2),
  makeLighter(rgb, 0.4),
  makeLighter(rgb, 0.6),
].map((shade) => ({
  rgb : shade,
  hex : rgbToHex(shade),
}))

setShades(newShades)
},[colorValue])


 
 console.log(shades);
 const displayCopyMessage = (message) => {
   const div = document.createElement('div')
   div.className = 'text-black duration-200 rounded bg-gray-400 text black w-3xs h-32 text-center flex items-center justify-center absolute self-center top-3/12 -translate-x-3/6 left-3/6 translate-x- transition-opacity opacity-50 ' 
   div.innerText = `${message} copied to clipboard` 

   const body = document.body.appendChild(div)

   

   setTimeout(() => {
    div.remove()
   },2000)
 }

 const copytoClipboard = (hex) => {
  navigator.clipboard.writeText(hex);
 displayCopyMessage(hex)
 }

 
 
  

  return (
   
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-300 p-8 ">

      <h1 className="text-3xl font-bold mb-2 text-gray-800">Shade Generator</h1>
      <p className="text-gray-600 mb-8">Pick a color and explore its shades</p>

  
      <div className="bg-white shadow-lg rounded-xl  p-6 flex flex-col items-center gap-4 w-2/3 mb-10">
        <input
          type="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          className="w-20 h-20 rounded cursor-pointer border"
        />
        <input
          type="text"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          className="px-3 py-2 border rounded text-center w-32 font-mono"
        />
     

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {shades.map((shade, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md flex flex-col items-center justify-between h-32 p-3 transition hover:scale-105 cursor-pointer"
            style={{ backgroundColor: shade.hex }}
            onClick={() => copytoClipboard(shade.hex)}
            onCopy={() => displayCopyMessage(shade.hex)}
          >
            <span className="bg-white/70 px-2 py-1 rounded text-xs font-mono shadow">
              {shade.hex}
            </span>
            
          </div>
        ))}
      </div>
       </div>
    </div>
    
  );
}
export default App

