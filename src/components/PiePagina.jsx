import React from 'react'
import IcoPieContacto from './IcoPieContacto'
import IcoPiePagina from './IcoPiePagina'

const PiePagina = () => {
  return (
    <div className="mt-5">
      
      <footer className="page-footer font-small mdb-color lighten-3 pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
              <p>Here you can use rows and columns to organize your footer content.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                esse
                quasi, veritatis totam voluptas nostrum.</p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <a href="#!">PROJECTS</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">ABOUT US</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">BLOG</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!">AWARDS</a>
                  </p>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
              <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
              <IcoPieContacto estiloIcoPiePagina="fas fa-envelope mr-3" descIcoPiePagina="info@example.com"/>
              <IcoPieContacto estiloIcoPiePagina="fas fa-phone mr-3" descIcoPiePagina="+ 01 234 567 88"/>
              <IcoPieContacto estiloIcoPiePagina="fas fa-phone mr-3" descIcoPiePagina=" + 01 234 567 89"/>
              <IcoPieContacto estiloIcoPiePagina="fas fa-phone mr-3" descIcoPiePagina=" + 01 234 567 89"/>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
              <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
              {/* <!-- Facebook --> */}
              <IcoPiePagina estiloLinkPie="btn-floating btn-fb" estiloIcoPiePagina="fab fa-facebook-f"/>        
              {/* <!-- Twitter --> */}
              <IcoPiePagina estiloLinkPie="btn-floating btn-tw" estiloIcoPiePagina="fab fa-twitter"/>        
              {/* <!-- Google +--> */}
              <IcoPiePagina estiloLinkPie="btn-floating btn-gplus" estiloIcoPiePagina="fab fa-google-plus-g"/>  
              {/* <!-- Dribbble --> */}
              <IcoPiePagina estiloLinkPie="btn-floating btn-dribbble" estiloIcoPiePagina="fab fa-dribbble"/>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  )
}

export default PiePagina
