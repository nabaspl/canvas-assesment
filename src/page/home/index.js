import AppBar from "../../componet/appBar/DenseAppBar";
import ListItem from "../../componet/listItems/nestedListItems";
// import Breadcrumbs from "../../componet/breadCrumbs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useStyle from "./style.js";
import { Button, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Add from "@mui/icons-material/Add";

export default function Home() {
  const classes = useStyle();
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
                <Typography> count</Typography>
              </Grid>
              <Grid textAlign="center" xs={4}>
                <Button variant="contained">
                  Increment
                  <Add />
                </Button>
              </Grid>
              <Grid textAlign="center" xs={4}>
                <Typography> count</Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
