import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {RTCContext} from '../../context/RTCProvider'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { ListItem } from '@material-ui/core'

const LeftSideBarUser = ({ user }) => {
  const { callUser } = useContext(RTCContext);

  const classes = makeStyles(theme => ({
    container: {
      width: 'auto',
      height: 'auto',
      marginTop: 25,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      marginLeft: 12,
      color: '#fff'
    }
  }))()
  
  return (
    <ListItem button onClick={() => {callUser(user.socketId); console.log(user)}} className={classes.container}>
      <Avatar className={classes.avatar} />
      <Typography className={classes.title} variant="h6" noWrap>
        {user.firstName}
      </Typography>
    </ListItem>
  )
}

export default LeftSideBarUser