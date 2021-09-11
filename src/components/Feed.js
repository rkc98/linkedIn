import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import classes from './Feed.module.css'
import InputOption from "./InputOption";
import Posts from "./Posts";

const Feed = () => {
    const [posts, setposts] = useState([])
    const [input, setinput] = useState("")
    const user = useSelector(selectUser)
    
    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot=>(
            setposts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
        
    }, [])
    const sendPost=(event)=>{
        event.preventDefault();
        // setposts
        console.log("here",input);
        db.collection("posts").add({
            name: user.displayName,
            description:user.email,
            message:input,
            photoUrl:"",

        })
        setinput('')
    }

  return <div className={classes.Feed}>
      <div className={classes.feed__inputContainer}>
          <div className={classes.feed__input}>
                <Create />
                <form onSubmit={sendPost}>
                    <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
                    <button type="submit"> Send </button>
                </form>
          </div>
          <div className={classes.feed__inputOptions}>
              <InputOption title="Photo" Icon={Image} color="#70B5F9" />
              <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
              <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
              <InputOption title="Write article" Icon={CalendarViewDay} color="#7FC15E" />

          </div>
      </div>
      {/* posts  */}
      {posts.map(({id,data:{name,description,message,photoUrl}})=>(
          <Posts key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
      ))}


      {/* <Posts name="Pappu Rai" description="This is a test" message="this works" /> */}


  </div>
};

export default Feed;
