import '../styles/globals.css'
import { ColorModeContextProvider } from '../Contexts/ColorMode';
import { AuthenticationContextProvider } from '../Contexts/authentication';
import { GetFilesProvider } from '../Contexts/firebaseStorage';

function MyApp({ Component, pageProps }) {

  return (
      <ColorModeContextProvider>
        <AuthenticationContextProvider>
          <GetFilesProvider>
          <Component {...pageProps} />
          </GetFilesProvider>
        </AuthenticationContextProvider>
      </ColorModeContextProvider>
  );
}

export default MyApp
