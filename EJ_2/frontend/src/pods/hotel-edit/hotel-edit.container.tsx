import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { linkRoutes } from 'core';
import { getHotel, saveHotel } from './hotel-edit.api';
import { HotelEntityVm, createDefaultHotel } from './hotel-edit.vm';
import { HotelEditComponent } from './hotel-edit.component';
import { mapHotelFromApiToModel, mapHotelFromModelToApi } from './hotel-edit.mapper';

export const HotelEditContainer: React.FunctionComponent = props => {
   const { id } = useParams();
   const history = useHistory();
   const [hotel, setHotel] = React.useState(createDefaultHotel());

   React.useEffect(() => {
      getHotel(id).then(apiHotel => {
        const newHotel = mapHotelFromApiToModel(apiHotel);
        setHotel(newHotel);
      });
    }, [id]);
   
    const handleSave = (hotel: HotelEntityVm) => {
      const apiHotel = mapHotelFromModelToApi(hotel);
      saveHotel(apiHotel).then(() => {
        history.push(linkRoutes.hotelCollection);
      });
    };

   return <HotelEditComponent hotel={hotel} onSave={handleSave} />;
}