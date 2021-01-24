import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copyright">
                @<span className="year">2020</span> Camilo Andrés Sánchez
      </p>
            <p className="footer__profession">Fullstack Web Developer</p>
            <div className="footer__networks">
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook-square"></i>
            </div>
        </footer>
    );
};

export default Footer;
