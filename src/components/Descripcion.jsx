import React from 'react'

const Descripcion = (props) => {
  return (
    <div className="mt-3">
      <p className={props.estiloDescripcion}>
        {props.descripcion}
      </p>
    </div>
  )
}

export default Descripcion
