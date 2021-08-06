import "./singlePost.css"
import React from 'react'

export default function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="http://www.freshboo.com/wp-content/uploads/2014/05/autumn-red-leaf-wallpaper-hd-1024x640.jpg"
                 alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Single post title
                    <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-edit"></i>
                    <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    
                    <span className="singlePostAuthor">Author: <b>Srividya</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam nisi odit ipsa non commodi necessitatibus sit rerum accusamus culpa dolore
                     temporibus ea, voluptatibus praesentium expedita 
                     vitae quia quis. Quasi.


                </p>
            </div>

        </div>        
    )
}