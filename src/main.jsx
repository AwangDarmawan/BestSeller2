import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/tangerine";
AOS.init({
  duration: 2000,
  easing: "ease-out-cubic",
  once: false,
  mirror: true,
  offset: 80,
  delay: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
