import {
    makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  drawerContainer: {
    overflow: 'auto',
  },
  listTitle: {
    padding: theme.spacing(1),
  },
  avatarColor: {
    backgroundColor: theme.palette.secondary.light,
  }

}));

export default useStyles;
