import { createRoot } from 'react-dom/client'      // React 18 API to create a root for rendering
import './index.css'                                // Global CSS import
import App from './App.jsx'                         // Main App component
import { BrowserRouter } from 'react-router-dom'   // BrowserRouter for client-side routing
import { ClerkProvider } from '@clerk/clerk-react' // ClerkProvider for authentication context

// Import your Publishable Key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Ensure the Publishable Key exists, otherwise throw an error
if (!PUBLISHABLE_KEY)
{
  throw new Error('Missing Publishable Key')
}

// Render the root React component
createRoot(document.getElementById('root')).render(
  // Wrap App with ClerkProvider for authentication and BrowserRouter for routing
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
