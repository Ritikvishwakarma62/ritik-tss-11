import React from 'react'
import { NavLink } from "react-router-dom"
const Header = () => {
  return (

    <>
      <header>
        <div className="container-menu-desktop">

          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>

              <div className="right-top-bar flex-w h-full">
                <NavLink to="#" className="flex-c-m trans-04 p-lr-25">
                  Help & FAQs
                </NavLink>

                <NavLink to="#" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </NavLink>

                <NavLink to="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </NavLink>

                <NavLink to="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </NavLink>
              </div>
            </div>
          </div>

          <div className="container"> {/* wrap-menu-desktop */}
            <nav className="limiter-menu-desktop container  ">
              <NavLink to="#" className="logo">
                <img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO" />
              </NavLink>
              {/* <!-- Menu desktop --> */}
              <div className="menu-desktop ">
                <ul className="main-menu">
                  <li className="active-menu">
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li> <NavLink to="/about">About</NavLink></li>
                  <li> <NavLink to="contact.html">Contact</NavLink></li>

                  {
                    localStorage.getItem("access-token") ?
                      <>
                        <li><NavLink to="/my-profile">My Profile</NavLink> </li>
                        <li><NavLink to="/logout">Logout</NavLink> </li>
                      </>
                      :
                      <>
                        <li> <NavLink to="/signup">Signup</NavLink> </li>
                        <li>  <NavLink to="/login">Login</NavLink> </li>
                      </>
                  }


                </ul>
              </div>

              {/* <!-- Icon header --> */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>

                <NavLink to="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                  <i className="zmdi zmdi-favorite-outline"></i>
                </NavLink>
              </div>
            </nav>
          </div>
        </div>


        <div className="wrap-header-mobile">

          <div className="logo-mobile">
            <NavLink to="index.html"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO" /></NavLink>
          </div>


          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <NavLink to="/cart" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
              <i className="zmdi zmdi-favorite-outline"></i>
            </NavLink>
          </div>


          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>



        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>

            <li>
              <div className="right-top-bar flex-w h-full">
                <NavLink to="#" className="flex-c-m p-lr-10 trans-04">
                  Help & FAQs
                </NavLink>

                <NavLink to="#" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </NavLink>

                <NavLink to="#" className="flex-c-m p-lr-10 trans-04">
                  EN
                </NavLink>

                <NavLink to="#" className="flex-c-m p-lr-10 trans-04">
                  USD
                </NavLink>
              </div>
            </li>
          </ul>

          <ul className="main-menu-m">
            <li>
              <NavLink to="index.html">Home</NavLink>
              <ul className="sub-menu-m">
                <li><NavLink to="index.html">Homepage 1</NavLink></li>
                <li><NavLink to="home-02.html">Homepage 2</NavLink></li>
                <li><NavLink to="home-03.html">Homepage 3</NavLink></li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </li>

            <li>
              <NavLink to="product.html">Shop</NavLink>
            </li>

            <li>
              <NavLink to="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</NavLink>
            </li>

            <li>
              <NavLink to="blog.html">Blog</NavLink>
            </li>

            <li>
              <NavLink to="about.html">About</NavLink>
            </li>

            <li>
              <NavLink to="contact.html">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* <!-- Modal Search --> */}
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="/assets/images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..." />
            </form>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header