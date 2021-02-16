import React from 'react'
import Carrusel from '../components/Carrusel'
import SubtituloH2 from '../components/SubtituloH2'

const Home = () => {
  return (
    <div>
      <Carrusel />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 ">
            <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"  />
          </div>
          <div className="col-lg-4 ">
            {/* <SubtituloH2 subtituloH2="La mejor desinfecion" /> */}
            <img className="img img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" width="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
