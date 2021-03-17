import{ AppBar } from '@material-ui/core';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header:{
        alignItems: "flex-end",
        backgroundColor: "#d1cecb",
    }
  }));

export const Header = () => {
    const classes = useStyles();
    return(
        <AppBar className={classes.header}> MNJ </AppBar>
    )
}