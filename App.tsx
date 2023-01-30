/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { store , persistor} from './app/redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import MainApp from './app/screens/MainApp';

const App = () => {
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading = {null}>
          <MainApp />
      </PersistGate>
    </Provider>
    </>
  );
};

export default App;
