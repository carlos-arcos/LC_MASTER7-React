import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { linkRoutes } from 'core';
import { HotelEditComponent } from './hotel-edit.component';

export const HotelEditContainer: React.FunctionComponent = props => {
   const { id } = useParams();
   const history = useHistory();

   
   return <HotelEditComponent />;
}