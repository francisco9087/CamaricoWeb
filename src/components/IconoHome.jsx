import React from 'react'

const IconoHome = (props) => {
  return (
    <div> 
      <i class="fas fa-check-circle fa-3x"></i>
      <p className={props.claseInfoIcono," d-flex align-items-center"}>
        {props.infoIcono}
      </p>
    </div>
  )
}

export default IconoHome
