import * as React from 'react';
import { Link } from 'react-router-dom';
import { linkRoutes } from '../../core';

interface Props {
   detailID: string;
}

export const DetailMember = (props: Props) => {
   return (
      <>
         <h3>Detail member ID: {props.detailID}</h3>
         <Link to={linkRoutes.root}>Inicio</Link>
      </>
   );
}