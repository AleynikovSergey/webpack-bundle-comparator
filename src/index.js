import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import App from 'src/views/App';
import configureStore from 'src/state/store';
import client from 'src/config/client';

const Container = () => {
  const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Container />, document.getElementById('root'));
