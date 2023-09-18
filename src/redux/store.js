import {configureStore} from '@reduxjs/toolkit';
import cartreducer from './cartreducer';
export default configureStore({
  reducer: {
    cart: cartreducer,
  },
});
