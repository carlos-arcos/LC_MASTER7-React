import * as React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from '../../core';
import { useParams } from 'react-router-dom';
import { memberAPI } from "../../api/memberAPI";
import { MemberEntityDetail } from '../../model/member';

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

export const DetailMember = () => {
   const params = useParams();
   const [loginMember, setLoginMember] = React.useState(params['id']);

   const [member, setMember] = React.useState<MemberEntityDetail>(null);

   // const loadMember = () => {
   //     memberAPI.getMemberDetail(loginMember)
   //       .then(member => setMember(member))
   //       .catch(error => console.log(error));
   // };

   // React.useEffect(() => {
   //    loadMember();
   // }, []);

   React.useEffect(() => {
      memberAPI.getMemberDetail(params['id'])
      .then(member => setMember(member));
   }, []);


   if (member) {
      return (
         <>
            <h3>Detail member login (params): {params['id']}</h3>
            {/* <p>nombre = {member.name}</p> */}
            <Link to={linkRoutes.root}>Inicio</Link>
         </>
      );
   }
   else {
      return <p>Loading...</p>;
   }
}