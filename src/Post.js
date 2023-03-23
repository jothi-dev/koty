
import React, {useState} from "react";
const Post = ({ userId, id, title, body}) =>  {
    return (
        <article>
            <div id="user">{userId}</div>
            <div>{id}</div>
            <div id="title"><h3>{title}</h3></div>
            <div><h4>{body}</h4></div>
        </article>
    )
}

export default Post