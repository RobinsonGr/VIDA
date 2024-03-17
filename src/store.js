import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from './features/cartSlice';
import authReducer from './features/authSlice'


const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export const persistor = persistStore(store);


