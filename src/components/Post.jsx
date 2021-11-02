import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card, CardContent, CardHeader, CardMedia, CardActions, Collapse, Avatar, IconButton, Typography} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Comment } from '@material-ui/icons';
import { format } from 'timeago.js';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
      marginBottom: theme.spacing(4)
  },
  media: {
    // height: 250,
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({data}) {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(data.likes.length)
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() =>{
    setUserLiked(data.likes.includes(user.user._id))
  }, [user.user._id, data.likes])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likePost = async () => {
    try {
      let likeRes = await axios.put(`http://localhost:9000/api/v1/post/${data._id}/like`, {}, 
      {
        headers: {
          'content-type': 'application/json',
          'access-token': user.token
        }
      }
      )

      if(likeRes.data.success) {
        setLikes(userLiked ? likes - 1 : likes + 1);
        setUserLiked(!userLiked)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar 
          className={classes.avatar}
          src={
            data.user ? data.user.avatar : ''
          }
            
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          data.user ? data.user.username : ''
        }
        subheader={format(data.createdAt)}
      />
      {
        data.mediaType === 'image' ? (
          <CardMedia
          className={classes.media}
          src={
            data.media
          }
          title='post'
          component='img'
        />
        ) : 
        data.mediaType === 'video' ?
        <CardMedia
        className={classes.media}
        src={
          data.media
        }
        title='post'
        component='video'
        controls
      />
       : null
      }


      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={likePost} aria-label="add to favorites">
          <FavoriteIcon  color={userLiked ? 'secondary' : ''}/>
            {
              likes > 0 && 
              <span style={{fontSize: '14px'}}>{ likes }</span>
            }
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
















// import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
// import React from 'react'


// const useStyles = makeStyles(theme => ({
//     media: {
//         height: 250

//     }
// }))

// const Post = () => {
//     const classes = useStyles()
//     return (
//         <Card>
//             <CardMedia className={classes.media} image='https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80' title="Single Post"/>
//             <CardContent>
//                 <Typography variant='h5'>
//                     Title of the post
//                 </Typography>

//                 <Typography variant='body2'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut quia, quae adipisci itaque debitis ea architecto. Illum, perferendis similique vitae cum, porro dolorem dolores quod, nulla voluptatum laborum repellat.
//                 </Typography>


//             </CardContent>
//         </Card>
//     )
// }

// export default Post
