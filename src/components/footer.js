import React from 'react';
import '../style-sheets/footer.css';

function Footer(){
    return(
        <footer>
        <div className="footer-basic">
            <div>
                <div className="social">
                    <a href="https://www.instagram.com/danieelflrs/" target="_BLANK"><i className='icon ion-social-instagram'></i></a>
                    <a href="https://twitter.com/danieelflrs" target="_BLANK"><i className='icon ion-social-twitter'></i></a>
                    <a href="https://github.com/Danieelflrs/Daniel-wp" target="_BLANK"><i className='icon ion-social-github'></i></a>
                </div>
                <ul className='list-inline'>
                    <li className="list-inline-item"><a download='CV Daniel Flores 2023.pdf' href="CV-Daniel-Flores-Ene-2023.pdf">Curriculum Vitae</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                </ul>
                <p className="copyright">Daniel F. © 2023</p>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </footer>
    )
}


export default Footer;