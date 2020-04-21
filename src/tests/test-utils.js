import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
