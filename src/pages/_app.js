import { AuthProvider } from '../context/authContext';
import '../styles/globals.css'
import '../styles/app.css'
import '../styles/panel.css'
import '../styles/device.css'
import '../styles/tokens.css'
import { SocketProvider } from '../context/socket';

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  </AuthProvider>
  )
}

export default MyApp
