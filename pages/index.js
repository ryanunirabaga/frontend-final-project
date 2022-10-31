import { Typography, Grid, Box, CssBaseline } from '@mui/material';
import { BrowseCard, DownloadCard, EnjoyCard } from '../src/card';
import { AuthenticationContext } from '../Contexts/authentication';
import { useContext, useEffect } from 'react';
import { DrawerAppBar } from '../src/navBar';
import { LatestNovels } from '../src/carousel';
import { Footer } from '../src/footer';

export default function Home() {

  const { logRoute } = useContext(AuthenticationContext);

  useEffect(()=>{
    logRoute();
  });

  return (
    <>
        <CssBaseline enableColorScheme/>
        <DrawerAppBar/>
        <Grid container className='grid-1'>
          <Grid item lg={4} md={12} sm={12} xs={12} className='flex-item-center'>
            <Box className='flex-item-center' p={2}>
              <Typography variant='h4' textAlign='center'>
                Check out our latest releases!
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12}>

              <LatestNovels/>
          </Grid>
        </Grid>
        <Grid container className='home-card'>
            <BrowseCard/>
            <DownloadCard/>
            <EnjoyCard/>
        </Grid>
        {/* footer */}
        <Footer/>
    </>
  )
}
