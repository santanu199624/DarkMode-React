import React, { useEffect, useState } from 'react'
import "./DarkMode.css"

const DarkMode = () => {
    const [dark, setDark] = useState("light")
    const [toggle, setToggle] = useState(true)

    const handleDark = () => {
        if(dark === "dark"){
            setDark("light")
        }else{
            setDark("dark")
        }

        setToggle(!toggle)
    }

    useEffect(() => {
        document.body.className = dark
    },[dark])

  return (
    <div >
      <button onClick={handleDark}>{toggle? "DARK 🌙" : "LIGHT 🌞"}</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quasi accusamus culpa autem laborum doloribus cupiditate eaque aliquid aperiam porro!</p>
    </div>
  )
}

export default DarkMode
