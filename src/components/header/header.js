import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core'

import CardHeader from '@material-ui/core/CardHeader';



const Header = () => (


    <div id="" style={{ textAlign: "center", fontFamily: 'Roboto' }}>

        <Grid container style={{ padding: "20px" }}>
            <Grid item xs={6} sm={3}>
                <Typography variant="h5">INSERIR VENDAS</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h5">04/05/2020</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Typography variant="h5"></Typography>
            </Grid>
        </Grid>


    </div>
);

export default Header;