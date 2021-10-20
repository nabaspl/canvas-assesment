import MainLayout from "../../componet/layout";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DrawerHeader } from "../../componet/drawer";
import Button from '@mui/material/Button';
import PlusIcon from '@mui/icons-material/Add';

import { useState } from "react";

export default function Unrelease() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const [count,setCount] = useState(0);
  return (
    <MainLayout>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>Count-{count}</Item>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Button variant="contained" endIcon={<PlusIcon />}>
                Incremennt
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Item>Count-{count}</Item>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
}
