import React from 'react';
import ReactDOM from 'react-dom/client';

import "./../src/styles/styles.scss";

import App from 'views/App';
import reportWebVitals from './utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
