import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Car/carslice'

 
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
