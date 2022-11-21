import React from 'react';
import {Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles/suitor.css'

const Suitor = ({dog, fnAccepted = null, fnRejected = null}) => {

    const name = dog?.message.split('/')[4];
    return (
        <Card className='card'>
            <CardMedia
                component="img"
                height="300"
                image={dog?.message}
                className='media'
            />
            <CardContent>
                <h2>{name}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In scelerisque finibus sapien nec convallis.
                    Nulla a augue fringilla lacus rutrum lobortis in nec mi.
                    Fusce non consequat dui. Fusce eget elit non enim pharetra facilisis.
                </p>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon onClick={()=> fnAccepted(dog)}/>
                </IconButton>
                <IconButton>
                    <DoDisturbIcon onClick={()=> fnRejected(dog)}/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Suitor;