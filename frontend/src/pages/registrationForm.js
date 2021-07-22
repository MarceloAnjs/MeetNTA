import React, { useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Duo from '@material-ui/icons/Duo';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "../styles/registrationForm.css";
import API from '../services/API';


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp({ history }) {
  const classes = useStyles();
  const formRef = useRef(null);

  const handleSubmitRegistration = (event) => {
    const formData = formRef.current;
    event.preventDefault();
    const user = {
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      userName: formData.userName.value,
      email: formData.email.value,
      password: formData.password.value
    }

    API.registerUser(user).then(({ data }) => {
      history.push("/")
    })
  }

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <h1 style={{ fontSize: "45px", marginBottom: "20px", marginTop: "40px", color:"white" }}><IconButton style={{ color: "#ffffff", fontSize: "45px !important", backgroundColor: "#00AEB1" }}>
        <Duo />
      </IconButton> MeetNTA</h1>
      <div className={classes.paper}>
        <Typography style={{color:"white"}} component="h1" variant="h5">
          Sign up
        </Typography>
        <form ref={formRef} className={classes.form} noValidate onSubmit={handleSubmitRegistration}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="filled"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            name="submitReg"


          >
            Sign Up
          </Button>
          <Grid component="main" maxWidth="xs">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>      
    </Container>
  );
}