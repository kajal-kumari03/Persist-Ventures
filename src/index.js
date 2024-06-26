import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
