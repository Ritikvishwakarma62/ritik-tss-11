import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="container-fluid bg-info ">
    <div className="container relative  ">
        <div className="row g-5 mb-5 ">
            <div className="col-lg-4 my-3 ">
                <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo text-dark">Admin<span>.</span></a></div>
                <p className="mb-4 text-dark">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

                <ul className="list-unstyled custom-social">
                    <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                    <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
                    <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
                </ul>
            </div>

            <div className="col-lg-8 my-3">
                <div className="row links-wrap">
                    <div className="col-6 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li><a href="#"className = "text-dark">About us</a></li>
                            <li><a href="#"className = "text-dark">Services</a></li>
                            <li><a href="#"className = "text-dark">Blog</a></li>
                            <li><a href="#"className = "text-dark">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li><a href="#"className = "text-dark">Support</a></li>
                            <li><a href="#"className = "text-dark">Knowledge base</a></li>
                            <li><a href="#"className = "text-dark">Live chat</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li><a href="#"className = "text-dark">Jobs</a></li>
                            <li><a href="#"className = "text-dark">Our team</a></li>
                            <li><a href="#"className = "text-dark">Leadership</a></li>
                            <li><a href="#"className = "text-dark">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-3">
                        <ul className="list-unstyled">
                            <li><a href="#"className = "text-dark">Nordic Chair</a></li>
                            <li><a href="#"className = "text-dark">Kruzo Aero</a></li>
                            <li><a href="#"className = "text-dark">Ergonomic Chair</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="border-top copyright">
            <div className="row pt-4">
                <div className="col-lg-6">
                    <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  
    </p>
                </div>

                <div className="col-lg-6 text-center text-lg-end">
                    <ul className="list-unstyled d-inline-flex ms-auto">
                        <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
    </div>
</footer>
  )
}

export default Footer