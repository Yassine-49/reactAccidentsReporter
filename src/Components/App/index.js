import React from 'react';
import { connect } from 'react-redux';

import {
  Router,
  Switch,
  Route,
} from "react-router-dom";

import useStyles from './styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
} from '@material-ui/core';

import MainContainer from './../../Views/Main/MainContainer';
import RegisterContainer from './../../Views/Register/RegisterContainer';
import LoginContainer from './../../Views/Login/LoginContainer';

import SidebarContainer from './../../Components/Sidebar/SidebarContainer';

import * as userActions from './../../redux/actions/User/actions';
import * as mapActions from './../../redux/actions/Map/actions';
import history from '../../Helpers/history';

function App(props) {

  const _handleLogout = () => {
    props.logoutAction();
    props.clearDataAction();
    history.push('/login');
  }

  const classes = useStyles();

  // Get user info from local storage
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const userTime = localStorage.getItem('userTime') ? JSON.parse(localStorage.getItem('userTime')) : null;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My App
          </Typography>
          {
            !props.user.isLoggedIn && ((Date.now() - userTime) < (15 * 60 * 1000)) && props.setLocalUserAction(user)
          }
          {
            !props.user.isLoggedIn
            ? <Button color="inherit" onClick={ () => history.push('/login') }>Login</Button>
            : <Button color="inherit" onClick={ () => _handleLogout() }>Logout</Button>
          }
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <SidebarContainer />
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        <Router history={history}>
          <Switch>
            <Route path="/register" component={ RegisterContainer} />
            <Route path="/login" component={ LoginContainer } />
            <Route path="/" component={ MainContainer} />
          </Switch>
        </Router>
      </main>

    </div>
  );
}

const mapStateToProps = state => {
  return{
    user: state.user,
  }
}

export default connect(mapStateToProps, { ...userActions, ...mapActions })(App);
