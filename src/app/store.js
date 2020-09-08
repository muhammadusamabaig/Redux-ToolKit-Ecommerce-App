import { configureStore } from '@reduxjs/toolkit';
import usama from '../features/counter/BookSlice';
// import usama2 from '../features/counter/reducer2';

export default configureStore({
  reducer: {
    counter: usama,
  
  },
});
