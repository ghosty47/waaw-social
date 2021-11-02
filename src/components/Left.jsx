import { Container, makeStyles, Typography, alpha,} from '@material-ui/core'
import { Home } from '@material-ui/icons'
import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsIcon from '@material-ui/icons/Collections';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ListIcon from '@material-ui/icons/List';
import VideocamIcon from '@material-ui/icons/Videocam';




const useStyles = makeStyles(theme => ({
    container: {
        height: '60vh',
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'sticky',
        top: 0
    
    },

    linkItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        },

        // '&:hover': {
        //     backgroundColor: alpha(theme.palette.common.white, 0.15)
        // }
    },

    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            fontSize: '18px'
        }
    },

    text: {
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))
const Left = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.linkItem}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Home</Typography>
            </div>

            <div className={classes.linkItem}>
                <PeopleAltIcon className={classes.icon}/>
                <Typography className={classes.text}>Friends</Typography>
            </div>

            <div className={classes.linkItem}>
                <ListIcon className={classes.icon}/>
                <Typography className={classes.text}>Lists</Typography>
            </div>

            <div className={classes.linkItem}>
                <PermMediaIcon className={classes.icon}/>
                <Typography className={classes.text}>Images</Typography>
            </div>

            <div className={classes.linkItem}>
                <VideocamIcon className={classes.icon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>

            <div className={classes.linkItem}>
                <AppsIcon className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>

            <div className={classes.linkItem}>
                <CollectionsIcon className={classes.icon}/>
                <Typography className={classes.text}>Collections</Typography>
            </div>

            <div className={classes.linkItem}>
                <StorefrontIcon className={classes.icon}/>
                <Typography className={classes.text}>Market Place</Typography>
            </div>

            <div className={classes.linkItem}>
                <SettingsIcon className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>

            <div className={classes.linkItem}>
                <PowerSettingsNewIcon className={classes.icon}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Left
