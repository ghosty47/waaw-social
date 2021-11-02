import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import MainFeed from '../../MainFeed';

import MainWrapper from '../mainWrapper/MainWrapper';


const useStyles = makeStyles((theme) => ({

    right: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  }))

const Timeline = () => {
    return (
      <MainWrapper>
        <MainFeed/>
      </MainWrapper>
    )
}

export default Timeline
