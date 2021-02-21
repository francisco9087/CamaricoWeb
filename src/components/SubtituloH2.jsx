import React from 'react'
import Fade from 'react-reveal/Fade';

const SubtituloH2 = (props) => {
  return (
    <div className={props.estiloSubtitulo}>
      <Fade bottom>
        {props.subtituloH2}
      </Fade>
    </div>
  )
}

export default SubtituloH2
