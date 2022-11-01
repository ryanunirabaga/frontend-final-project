import '../styles/globals.css'
import { AuthenticationContextProvider } from '../Contexts/authentication';
import { GetFilesProvider } from '../Contexts/firebaseStorage';

function MyApp({ Component, pageProps }) {

  return (
        <AuthenticationContextProvider>
          <GetFilesProvider>
            <Component {...pageProps} />
          </GetFilesProvider>
        </AuthenticationContextProvider>
  );
}

export default MyApp
