import react from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { useContext, useEffect } from 'react';
import { AuthenticationContext } from '../Contexts/authentication';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © ReadJPNovels.com'}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/* const theme = createTheme(); */

export default function SignIn() {

  const { anonymousSignIn, isLoggedIn, setIsLoggedIn, route } = useContext(AuthenticationContext);
  const router = useRouter();

  useEffect(()=>{
    if(isLoggedIn)
      router.push(route);
    else
      setIsLoggedIn(false);
  })
  

  return (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(./loginBackground.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper}>
          <Box className='flex-item-center login-grid'
            sx={{
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <Avatar sx={{ m: 2, color: '#00d9ff' }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in anonymously
            </Typography>
            <Box>
              <Button
                color='warning'
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={anonymousSignIn}
              >
                Sign In
              </Button>
              <Box sx={{
                display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none'},
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image className='readNovelsLogo' src='/Read Novels.svg' width={134} height={67} alt='ReadJPNovels Logo'/>
              </Box>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

  );
}