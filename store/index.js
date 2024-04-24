// import { configureStore } from '@reduxjs/toolkit';
// import  userReducer  from './userSlice';
// const store = configureStore({
//      reducer: {
//       user:userReducer
//     //   auth: authReducer,
// //       therapistAuth: therapistReducer,
// //       adminAuth: adminReducer,
// //       [userApiSlice.reducerPath]: userApiSlice.reducer,
//      },
// //     middleware: (getDefaultMiddleware) =>
// //       getDefaultMiddleware().concat(userApiSlice.middleware),
// //     devTools: true,
//    }
// )
  
//   export default store

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import adminReducer from './adminSlice'; // Import the admin reducer
import listUserReducer from'./listUserSlice'
import listexpertReducer from './listexpertSlice';
import expertReducer from './expertSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer ,// Add the admin reducer
       listUser:listUserReducer,
       expert:listexpertReducer,
       expert:expertReducer
    },
    // Other configurations...
});

export default store;

