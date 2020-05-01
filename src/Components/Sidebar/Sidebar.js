import React from 'react';
import { connect } from 'react-redux';

import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import useStyles from './styles';

import history from '../../Helpers/history';

function Sidebar(props)
{
    const classes = useStyles();

    return(
        <div className={classes.drawerContainer}>
          <List>
                <ListItem button key={'main'}
                    onClick={() => history.push('/') }
                >
                    <ListItemIcon> <HomeIcon /> </ListItemIcon>
                    <ListItemText primary={'Main'} />
                </ListItem>
                <ListItem button key={'register'}
                    onClick={() => history.push('/register') }
                >
                    <ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
                    <ListItemText primary={'Register'} />
                </ListItem>
                <ListItem button key={'login'}
                    onClick={() => history.push('/login') }
                >
                    <ListItemIcon> <PersonIcon /> </ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>
            </List>
            <Divider />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps, {})(Sidebar);
