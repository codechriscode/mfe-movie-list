import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

type ContainerWindowType = typeof window & { isInContainer: boolean };
const isInContainer = (window as ContainerWindowType).isInContainer;

const rootComponent = isInContainer ? 'hosted-app' : 'root'

ReactDOM.createRoot(document.getElementById(rootComponent) as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
