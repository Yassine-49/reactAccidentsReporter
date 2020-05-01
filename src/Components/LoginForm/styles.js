import {
    makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    TextField: {
        margin: theme.spacing(1),
    },
    ButtonContainer: {
        display:'flex',
        flexDirection:'row-reverse',
    },
    Button: {
        margin: theme.spacing(1),
    },
    ErrorText: {
        maring: theme.spacing(1),
        padding: theme.spacing(1),
        justifySelf: 'flex-end'
    }
}));
