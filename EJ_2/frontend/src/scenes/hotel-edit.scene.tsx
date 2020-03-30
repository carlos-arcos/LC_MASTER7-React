import * as React from 'react';
import { AppLayout } from 'layouts';
//import { HotelEditContainer } from 'pods/hotel-edit';
import { HotelEditContainer } from 'pods/hotel-edit/hotel-edit.container';

export const HotelEditScene = () => (
   <AppLayout>
      <HotelEditContainer />
   </AppLayout>
);
