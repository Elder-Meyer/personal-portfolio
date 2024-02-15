import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import './config/lan/i18n.jsx'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <>
        <CssBaseline/>
        <App />
    </>
);
