import React from 'react'
import MainWrapper from '../mainWrapper/MainWrapper'
import { Container, makeStyles } from '@material-ui/core'
import './profile.css'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))



const Profile = () => {
    const classes = useStyles()
    return (
        <MainWrapper>
            <Container className={classes.container}>
                <div>
                    <h1> This is the header </h1>
                </div>
            </Container>
        </MainWrapper>
    )
}

export default Profile










































// import React, { useContext } from 'react';
// import "./profile.css";
// import Navbar from '../../Navbar';
// import Left from "../../Left";
// import MainFeed from "../../MainFeed";
// import Right from "../../Right";
// import { Avatar, Grid, makeStyles } from '@material-ui/core';
// import { AuthContext } from "../../../context/AuthContext";


// const useStyles = makeStyles((theme) => ({

//     right: {
//       [theme.breakpoints.down('sm')]: {
//         display: 'none'
//       }
//     }
//   }))


// const  Profile = () => {
//     const classes = useStyles()
//     const { user } = useContext(AuthContext)

//   return (
//     <>
//     <div className="profile__wrapper">
//         <Navbar/>

//         <Grid container>
//         <Grid className={classes.left} item sm={2} xs={2}>
//           <Left/>
//         </Grid>

//         <Grid className={classes.center} item sm={7} xs={10}>

//         <div className="profileRight">
//             <div className="profileRightTop">
//                 <div className="profileCover">
//                 <img
//                     className="profileCoverImg"
//                     src= {
//                         user ? user.user.avatar : ''
//                     }
//                     alt=""
//                 />

//                 <img
//                     className="profileUserImg"
//                     src= {
//                         user ? user.user.avatar : ''
//                     }
//                     alt="profile"
//                 />

//                 </div>
//                 <div className="profileInfo">
//                     <h4 className="profileInfoName">
//                         {
//                             `Hi ${ user ? user.user.username : ''}`
//                         }
//                     </h4>
//                     <span className="profileInfoDesc">Wadup friends!</span>
//                 </div>
//             </div>
//         </div>
        
//           <MainFeed/>
//         </Grid>

//         <Grid className={classes.right} item sm={3}>
//           <Right/>
//         </Grid>
//       </Grid>

//         {/* <div className="profile">
//         <Left/>

//             <div className="profileRight">
//             <div className="profileRightTop">
//                 <div className="profileCover">
//                 <img
//                     className="profileCoverImg"
//                     src="assets/post/3.jpeg"
//                     alt=""
//                 />
//                 <img
//                     className="profileUserImg"
//                     src=""
//                     alt=""
//                 />
//                 </div>
//                 <div className="profileInfo">
//                     <h4 className="profileInfoName">usoroh</h4>
//                     <span className="profileInfoDesc">Wadup friends!</span>
//                 </div>
//             </div>
//             <div className="profileRightBottom">
//                 <MainFeed/>
//             </div>
//             </div>
//             <Right/>
//         </div> */}
//     </div>
//     </>
//   );
// }

// export default Profile