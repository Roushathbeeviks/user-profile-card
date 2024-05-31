import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './UserCard.css'
import avatar from '../assets/avatar.jpg'

function UserCard(props) {
  return (
    <div className='Main'>
    <Card className='Card'>
        <div className='avatar-container'>
            <CardMedia component="img" className='image-container'
                style={{ width: "60%", borderRadius: "100%", marginTop:"30",border: "2px double #ccc"}} image={avatar} ></CardMedia>
        </div>
        <div className='info-container'>
            <CardHeader 
            title={props.Name} subheader={props.Designation}
            titleTypographyProps={{ className: 'title' }}
            subheaderTypographyProps={{ className: 'subheader' }}/>  
      <CardContent>
        <Typography variant="body2" className='bio'>{props.Bio}</Typography>
      </CardContent>
      </div>
    </Card>
   </div>
  )
}

export default UserCard
