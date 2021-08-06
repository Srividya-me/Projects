import "./header.css"
import React from 'react'
export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
            src="https://www.wallpapertip.com/wmimgs/81-811380_simple-nature-wallpaper-hd.jpg"
            alt=""
            />
        </div>
    )
}