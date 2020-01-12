import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {MemberEntity} from '../../model/member';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const MemberRow = (props: {member : MemberEntity}) => {
  const classes = useStyles(props);

  return (
    <tr>
      <td>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.member.login}
            </Typography>
            <img src={props.member.avatar_url} style ={{maxWidth: '10rem'}}/>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">Detail ({props.member.id})</Button>
        </CardActions>
        </Card>
      </td>
    </tr>
  );
}