import React from 'react'

const bordeIcono = {
  borderRadius: "100px",
  border: "solid white 8px",
  heigth: "170px",
  width: "170px",
  padding: "40px"
}

const IconoCirculo = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div style={bordeIcono}>
        <i className={props.awesomeIconoCirculo} ></i>
        
      </div>
    </div>
  
  )
}

export default IconoCirculo
