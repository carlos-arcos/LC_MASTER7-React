import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  namePictureContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  picture: {
    maxWidth: '30rem',
  },
  marginTopBottom: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
});
