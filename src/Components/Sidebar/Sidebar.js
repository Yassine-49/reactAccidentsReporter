import React from 'react';

import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Divider,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './styles';

function Sidebar(props)
{
    const classes = useStyles();

    return(
        <div className={classes.drawerContainer}>
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={props.user.username}
                            children={ (props.user.username && props.user.username[0]) || 'G'}
                            className={classes.avatarColor} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.user.username || 'Guest'}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="caption"
                                    color="textPrimary"
                                >
                                    {props.user.email || 'example@email.com'}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            <Divider />
            <Typography variant="h6" color="inherit" className={classes.listTitle}>
                Markers:
            </Typography>
            <List dense>
                {
                    props.markers.length > 0
                    ? props.markers.map(marker => (
                        <ListItem button
                            key={marker.id}
                            onClick={() => props.handleItemClick([marker.longitude, marker.latitude]) }
                        >
                            <ListItemText primary={marker.title} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="edit" onClick={() => props.handleEditClick(marker)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => props.handleDeleteClick(marker.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                    : <Typography variant="body1" color="inherit" className={classes.listTitle}>
                        Login to see markers!
                    </Typography>
                }
            </List>
        </div>
    )
}

export default Sidebar;
