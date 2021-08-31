import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import store from './src/redux';
import SplashScreen from 'react-native-splash-screen';

const persistor = persistStore(store);

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PersistGate>
  );
}
