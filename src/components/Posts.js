import { Avatar } from "@material-ui/core";
import { Comment, Send, Share, ThumbUpAltOutlined } from "@material-ui/icons";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import classes from "./Posts.module.css";
const Posts = forwardRef(({name,description,message,photoUrl},ref) => {
  return <div ref={ref} className={classes.post}>
      <div className={classes.post__header}>
          <Avatar />
          <div className={classes.post__info}>
         <h2>
              {name}
          </h2>
          <p>{description}</p>
          </div>
      </div>
      <div className={classes.post__body}>
        <p>
            {message}
        </p>
      </div>
      <div className={classes.post__button}>
        <InputOption Icon={ThumbUpAltOutlined} title="like" color="gray" />
        <InputOption Icon={Comment} title="comment" color="gray" />
        <InputOption Icon={Share} title="share" color="gray" />
        <InputOption Icon={Send} title="send" color="gray" />


      </div>

  </div>
});

export default Posts;
