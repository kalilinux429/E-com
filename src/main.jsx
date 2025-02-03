import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProvider } from './context/AppContext';
import App from './App.jsx';

// Create root with createRoot and render your app
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppProvider>  {/* Wrap your app with AppProvider */}
      <App />
    </AppProvider>
  </StrictMode>
);
