import React, {Component} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        {/*<img src="img/avatar.png"*/}
        {/*     alt=""/>*/}
        <div className="tweetBox__input">
          <Avatar src="img/avatar.png"/>
          {/*<img src='img/cat-avatar.jpg'/>*/}
          <input placeholder="What's happening?" type="text"/>
        </div>
      </form>

      <Button>Tweet</Button>
    </div>
  )
}

export default TweetBox;