import React, { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider';
import {socket, RTCContext} from '../../context/RTCProvider';
import { alpha, makeStyles } from '@material-ui/core/styles'
import LeftSideBarUser from '../LeftSideBarUser/LeftSideBarUser'
import api from '../../services/API'



import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

const LeftSideBar = () => {
  const classes = makeStyles(theme => ({
    container: {
      background: '#00AEB1',
      
      height: 'inherit',
      paddingLeft: 24,
      paddingRight: 24,
      [theme.breakpoints.down('sm')]: {
        width: window.outerWidth,
        height: '100vh'
      },
    },
    search: {
      position: 'relative',
      // bottom: 24,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      // right: 24,
      // left: 24,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: window.outerWidth - 48
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: '#fff',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '15cw',
      },
    },
    list: {
      position: 'absolute',
      marginLeft: 0,
      top: 52,
      width: 246,
      borderRadius: theme.shape.borderRadius,
      padding: 0,
      background: alpha('#00AEB1', 1),
      [theme.breakpoints.up('sm')]: {
        marginLeft: 127,
      },
    },
    moreIcon: {
      position: 'absolute',
      right: 0,
      top: 6
    },
    menu: {
      position: 'absolute',
      right: 0,
      top: 64,
      background: '#00AEB1'
    }
  }))()

  const [users, setUsers] = useState([])
  const [listSearch, setListSearch] = useState([])
  const {token, handleLogout} = useContext(AuthContext)
  const{me} = useContext(RTCContext);

  

  useEffect(() => {
    updateList();
    socket.on('updateOnline',() => {updateList()});
  }, [])
  
  const updateList = () => {
    api.listUsers(token)
    .then(({data})=>{
      setUsers(data);
      setListSearch(data);
    })
    .catch(err => handleLogout)
  }
  const handleSearchChange = ({ target: { value } }) => {
    if (value) {
      setListSearch(users.filter(user => user.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1))
    } else {
      setListSearch(users)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Pesquisar"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        {listSearch.map(user => {
           if(user.isOnline && (user.socketId != me))
           return <LeftSideBarUser key={user._id} user={user} />
        })}
      </div>
    </div>
  )
}

export default LeftSideBar