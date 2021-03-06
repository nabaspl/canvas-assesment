import React, {useState} from "react";
import AppBar from "../../componet/appBar/DenseAppBar";
import ListItem from "../../componet/listItems/nestedListItems";
// import Breadcrumbs from "../../componet/breadCrumbs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useStyle from "./style.js";
import { Button, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Add from "@mui/icons-material/Add";
import Paper from '@mui/material/Paper';

export default function Home() {
  const classes = useStyle();
  const [countLeft,setCountLeft] = useState(0);
  const [countRight,setCountRight] = useState(0);
  const [toggle,setToggle] = useState('countLeft');
  const handleIncrement = () =>{
    if(toggle==='countLeft')
      setCountLeft(countLeft+1);
    else
      setCountRight(countRight+1); 

    let tt = toggle==='countLeft'?'countRight':'countLeft';
    setToggle(tt);
  }
  return (
    <>
      <AppBar />
      <Grid container className={classes.mainContainer}>
        <Grid xs={0.5} className={classes.sideNavSection}>
          <ListItem />
        </Grid>
        <Grid xs={11.5} className={classes.mainSection}>
          {/* <Breadcrumbs /> */}
          <Container>
            <Grid container>
              <Grid textAlign="center" xs={4}>
              <Paper elevation={3} className={classes.CounterPaper}> count-{countLeft}</Paper>
              </Grid>
              <Grid textAlign="center" xs={4}>
                <Button variant="contained" onClick={handleIncrement}>
                  Increment
                  <Add />
                </Button>
              </Grid>
              <Grid textAlign="center" xs={4}>
              <Paper elevation={3} className={classes.CounterPaper}> count-{countRight}</Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
