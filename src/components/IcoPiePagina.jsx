import React from 'react'

const IcoPiePagina = (props) => {
  return (
    <div>
      <a type="button" className={props.estiloLinkPie}>
          <i className={props.estiloIcoPiePagina}></i>
        </a>
    </div>
  )
}

export default IcoPiePagina
