import React from 'react';
import ReactDOM from 'react-dom/client';

import "./../src/styles/styles.scss";

import App from 'views/App';
import reportWebVitals from './utils/reportWebVitals';

import ModalProvider from 'context/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
            <ModalProvider>
                <App />
            </ModalProvider>
    </React.StrictMode>
);

reportWebVitals();