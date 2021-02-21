import React from 'react'
import Descripcion from './Descripcion'
import SubtituloH2 from './SubtituloH2'
import Slide from 'react-reveal/Slide';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`





const estiloImg3 = {
  height:"420px",
  border: "8px white solid",

}

const ImgGaleria = (props) => {
   const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
   
  <animated.div className={props.estImgServicios}  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })}
    style={{ transform: prop.xys.interpolate(trans) }}>
      <Slide bottom>
        <img className="img img-fluid card" src={props.srcImgServicios} style={estiloImg3}/> 
        </Slide>
        <SubtituloH2 subtituloH2={props.subImgServ} estiloSubtitulo="h4 text-center mt-4" />
        <Descripcion descripcion={props.descImgServ}/> 
     
    
    </animated.div>

  
  )
}

export default ImgGaleria

