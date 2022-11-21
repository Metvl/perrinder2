import React from 'react'
import {Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Collapse from '@mui/material/Collapse';
import '../styles/suitor.css';

const Accepted = ({dog, fn = null}) => {
const name = dog?.message.split('/')[4];

const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
	setExpanded(!expanded);
};

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
		</CardContent>
		<CardActions>
			<IconButton onClick={()=> fn(dog)}>
			<RotateLeftIcon/>
			</IconButton>
			<IconButton
			onClick={handleExpandClick}
			aria-label="show more"
			aria-expanded={expanded}
			>
			<VisibilityIcon/>
			</IconButton>
		</CardActions>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					In scelerisque finibus sapien nec convallis.
					Nulla a augue fringilla lacus rutrum lobortis in nec mi.
					Fusce non consequat dui. Fusce eget elit non enim pharetra facilisis.
					Vestibulum sed mi nulla. Donec auctor aliquam tellus, id hendrerit ipsum dictum et.
					Nulla pellentesque euismod dui, ullamcorper volutpat dui consectetur sed.
					Etiam sed auctor urna, id aliquet arcu. Aliquam vitae</p>
			</CardContent>
		</Collapse>
	</Card>
)
}

export default Accepted;