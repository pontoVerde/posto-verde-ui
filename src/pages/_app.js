import { AuthProvider } from '../context/authContext';
import '../styles/globals.css'
import '../styles/app.css'
import '../styles/panel.css'
import '../styles/device.css'
import '../styles/tokens.css'

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  )
}

export default MyApp
