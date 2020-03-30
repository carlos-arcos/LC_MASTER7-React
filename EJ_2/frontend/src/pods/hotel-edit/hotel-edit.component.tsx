import * as React from 'react';
import { HotelEntityVm } from './hotel-edit.vm';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import { TextField, RatingComponent } from 'common/components/forms';
import { useStyles } from './hotel-edit.styles';
import { formValidation } from './hotel-edit.validations';

interface Props {
   hotel: HotelEntityVm;
   onSave: (hotel: HotelEntityVm) => void;
}

export const HotelEditComponent = (props: Props) => {
   const {hotel, onSave} = props;
   const classes = useStyles({});

   return (
      <Form onSubmit={onSave} 
            initialValues={hotel}
            validate={formValidation.validateForm}
            render={({ handleSubmit, values }) => (
               <form onSubmit={handleSubmit} className={classes.root}>
                  <Field fullWidth name="name" component={TextField}
                         type="text" label="Name" className={classes.marginTopBottom} />
                  <div className={classes.namePictureContainer}>
                     <img className={classes.picture} src={hotel.picture} />
                  </div>
                  <Field fullWidth name="rating" component={RatingComponent}
                        max={5} label="Rating" />
                  <Field fullWidth name="city" component={TextField}
                        type="text" label="City" className={classes.marginTopBottom} />
                  <Field fullWidth name="address" component={TextField}
                        type="text" label="Address" className={classes.marginTopBottom} />
                  <Field fullWidth name="description" component={TextField}
                        type="text" multiline={true} rows={3}
                        label="Description" className={classes.marginTopBottom} />
                  <div>
                     <Button variant="contained" color="primary" type="submit">Save</Button>
                  </div>
               </form>
            )}>
      </Form>
   );
}