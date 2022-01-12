import React, {Component} from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import Verified from "@material-ui/core";
import {VerifiedUser} from "@material-ui/icons";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {
  // displayName,
  //   username,
  //   verified,
  //   text,
  //   image,
  //   avatar
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src='https://www.w3schools.com/howto/img_avatar.png'/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Alexandr Melnikov <span className="post__headerSpecial">
              <VerifiedUser className="post__badge"/> @AlexandrMelnikov
            </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse quasi quisquam.</p>
          </div>
        </div>
        <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/11/How-to-post-a-Live-Photo-on-Instagram1.jpg?fit=900%2C600&ssl=1"
             alt="post"/>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize='small'/>
          <PublishIcon fontSize='small'/>
        </div>
      </div>
    </div>
  )
}


export default Post;