import React, { useEffect, useRef } from 'react'
import './progress-bar.scss'
const ProgressBar = ({value}) => {
    console.log(value)
    const barInnerRef = useRef()
    useEffect(() => {
       barInnerRef.current.style.width = `${value}%`
      
    },[])
  
    return (
        <div className="progress-bar">
            <div ref={barInnerRef} className="progress-bar__inner"></div>
        </div>
    )
}

export default ProgressBar



