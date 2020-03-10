import * as React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from '../../core';
import { useParams } from 'react-router-dom';
import { memberAPI } from "../../api/memberAPI";
import { MemberEntityDetail } from '../../model/member';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
   root: {
      maxWidth: 350,
   },
   media: {
      height: 100,
   },
   large: {
      marginLeft: 10,
      width: theme.spacing(17),
      height: theme.spacing(17),
   },
}));

interface Props { }

export const DetailMember = (props: Props) => {
   const { id } = useParams();
   const [member, setMember] = React.useState<MemberEntityDetail>(null);
   const classes = useStyles(props);

   React.useEffect(() => {
      memberAPI.getMemberDetail(id)
      .then(member => setMember(member));
   }, []);

   if (member) {
      return (
         <Card className={classes.root}>
            <CardActionArea>
               <Avatar alt={member.login} src={member.avatar_url} className={classes.large} />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {member.login}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     ID: {member.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     Name: {member.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     Type: {member.type}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     URL: {member.url}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     Company: {member.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     Public respos: {member.public_repos}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  <Link to={linkRoutes.root}>Inicio</Link>
               </Button>
            </CardActions>
         </Card>
      );
   }
   else {
      return <p>Loading...</p>;
   }
}