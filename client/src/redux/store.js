import { combineReducers, configureStore } from '@reduxjs/toolkit'
import useReducer  from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer=combineReducers({user:useReducer});
const persistConfig={
    key:'root',
    storage,
    version:1, // Increment this version when you change the state structure
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  }),
});

export const persistor=persistStore(store);
 // You can use this with PersistGate in your app
