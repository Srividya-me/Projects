import "./post.css"
import React from 'react'
export default function Post()
{
    return (
        <div className="post">
            <img className="postImg"
            src="http://www.freshboo.com/wp-content/uploads/2014/05/autumn-red-leaf-wallpaper-hd-1024x640.jpg"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    this is post title
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            The definition of a description is a statement that gives details about someone or something. An example of description is a story about the places visited on a family trip. ... Published a description of the journey; gave a vivid description of the game.
            The definition of a description is a statement that gives details about someone or something. An example of description is a story about the places visited on a family trip. ... Published a description of the journey; gave a vivid description of the game.
            The definition of a description is a statement that gives details about someone or something. An example of description is a story about the places visited on a family trip. ... Published a description of the journey; gave a vivid description of the game.
            </p>
        </div>
    )
}