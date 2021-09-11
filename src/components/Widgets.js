import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import classes from './Widgets.module.css'
const Widgets = () => {
    const newArticle=(heading,subtitle)=>{
       return <div className={classes.widgets__article}>
            <div className={classes.widgets__articleLeft}>
                <FiberManualRecord style={{fontSize:"20px"}} />
            </div>
            <div className={classes.widgets__articleRight}>
                <h4>
                    {heading}
                </h4>
                <p>
                    {subtitle}
                </p>
                </div>
        </div>

    }
  return <div className={classes.widgets}>
      <div className={classes.widgets__header}>
          <h2>
              LinkedIn News
          </h2>
          <Info />

      </div>
      {newArticle("React","build ironically on React")}
      {newArticle("Covid India updates","Number of Cases Recorded")}
      {newArticle("Happy Ganesh Utsav","celebration in mumbai on ganesh utsav")}
      {newArticle("Is Redux good option ","Industry experts views on it")}
      {newArticle("React Native","News regarding version updates")}




  </div>
};

export default Widgets;
