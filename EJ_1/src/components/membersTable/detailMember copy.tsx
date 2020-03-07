import * as React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from '../../core';
import { useParams } from 'react-router-dom';
import { memberAPI } from "../../api/memberAPI";
import { MemberEntityDetail } from '../../model/member';

interface Props {
   detailID: string;
}

export const createEmptyDetailMember = (): MemberEntityDetail => ({
   id: 0,
   login: '',
   avatar_url: '',
   url: '',
   type: '',
   name: '',
   company: '',
   public_repos: 0
});

export const DetailMember = (props: Props) => {
   const params = useParams();
   const [member, setMember] = React.useState<MemberEntityDetail>();
   const [loginMember, setLoginMember] = React.useState(params['id']);

   const loadMember = () => {
       memberAPI.getMemberDetail(loginMember)
         .then(member => setMember(member))
         .catch(error => console.log(error));
   };

   React.useEffect(() => {
      loadMember();
   }, []);

   

   return (
      <>
         <h3>Detail member login: {params['id']}</h3>
         {/* <p>nombre = {member.name}</p> */}
        
         <Link to={linkRoutes.root}>Inicio</Link>
      </>
   );
}