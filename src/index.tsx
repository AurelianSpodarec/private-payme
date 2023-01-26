import React from 'react';
import ReactDOM from 'react-dom/client';

import "./../src/styles/styles.scss";

import App from 'views/App';
import reportWebVitals from './utils/reportWebVitals';

import ModalProvider from 'context/modalContext';
import { AuthProvider } from 'context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>

        <AuthProvider>
        <ModalProvider>
            
            <App />

        </ModalProvider>
        </AuthProvider>

    </React.StrictMode>
);

reportWebVitals();