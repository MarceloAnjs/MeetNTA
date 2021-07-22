import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Duo from '@material-ui/icons/Duo';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "../styles/loginForm.css";

import { AuthContext } from '../context/AuthProvider';


const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    color: "primary"
  },

}));


export default function SignIn() {
  const classes = useStyles();
  const {handleLogin} = useContext(AuthContext)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <h1 style={{ fontSize: "45px", marginBottom: "20px", marginTop: "40px", color:'white' }}><IconButton style={{ color: "#ffffff", fontSize: "45px !important", backgroundColor: "#00AEB1" }}>
        <Duo />
      </IconButton> MeetNTA</h1>
      <div className={classes.paper}>
        <Typography style={{color:'white'}} component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="white" style={{
              color: "#ffffff",
            }} />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid component="main" maxWidth="xs">
            <Grid item>
              <Link href="/Registration" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>     
    </Container>
  );
}