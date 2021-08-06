import "./topbar.css"
import React from 'react'
import { Link } from "react-router-dom";

export default function TopBar(){
    const user=false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/" >ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user?(
                <img
                  className="topImg"
                  src = "https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg"
                  alt = ""
                />
    ):(
        <ul className="topList">
            <li className="topListItem">
        <Link className="link" to="/login" >LOGIN</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/register" >REGISTER</Link>
        </li>
        </ul>
    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}