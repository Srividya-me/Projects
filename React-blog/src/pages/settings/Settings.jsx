import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://www.hdnicewallpapers.com/Walls/Big/Cute%20Baby/Cute_Baby_Boy_in_Winter_Cap_Wallpaper.jpg"
                        alt=""
                        />
                        <label htmlFor="fileInput">
                        <i class="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id ="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Srividya"/>
                    <label>Email</label>
                    <input type="email" placeholder="srividya.srigiri@students.iiit.ac.in"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                    
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}