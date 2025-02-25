"use client"
import { Provider } from 'react-redux';
import store from './store';

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <body>{children}</body>
            </html>
        </Provider>
    );
}