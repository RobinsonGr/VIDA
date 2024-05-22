import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from './features/cartSlice';
import authReducer from './features/authSlice'

const persistConfig = {
    key: 'root',
    storage
};


//this set up is because I'm using thunk for presistence such as the cart or the auth
const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    //this middleware prevent some unexpected behaviour, so it's importat to keep it.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export const persistor = persistStore(store);


