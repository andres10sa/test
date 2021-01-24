import React from "react";

const Users = ({photo,name,phone}) => {
    return (
        <div className="card-user">
            <div className="card-user__header" style={{ backgroundImage: "url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}></div>
            <div className="card-user__border-image">
                <img src={photo} alt="user" className="photo" />
            </div>
            <p className="card-user__name">{name}</p>
            <div className="card-user__phone">
                <i className="fas fa-phone-square-alt"></i>
                <small className="number">{phone}</small>
            </div>
            <div className="card-user__social-networks">
                <div className="social-cont"><i className="fab fa-facebook-f"></i></div>
                <div className="social-cont" style={{right:"10px"}}><i className="fab fa-twitter"></i></div>
                <div className="social-cont" style={{right:"20px"}}><i className="fab fa-linkedin-in"></i></div>
                <div className="social-cont" style={{right:"30px"}}><i className="fab fa-whatsapp"></i></div>
            </div>
        </div>
    );
};

export default Users;

