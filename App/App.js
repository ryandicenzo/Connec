import React from 'react';

// Import Provider to wrap our app's highest level component
import { Provider } from 'react-redux';

// Import our app's store and persistor
import {store, persistor } from './redux/store';

// Wrap root component with PersistGate
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Main } from './tabs/Main.js'

// Provider: Boilerplate to make the Redux store available to all components by wrapping the top level component, Navigator
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main></Main>
      </PersistGate>
      </Provider>
    );
  }
}
