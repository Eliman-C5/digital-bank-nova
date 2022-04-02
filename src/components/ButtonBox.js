import React from "react"

const ButtonBox = ({text1, text2}) => {
  return (
    <div className="btn-box">
      <button>{text1}</button>
      <button>{text2}</button>
    </div>
  )
}

export default ButtonBox