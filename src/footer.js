import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography, Grid, Box } from '@mui/material'


export function Footer() {

    return (
        <Grid container sx={{
            backgroundColor: '#3d3d3d',
          }}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  display:'flex',
                  alignItems: 'Center',
                  justifyContent: 'center',
                  p: 1
                }}
              >
                  <Typography variant='p'>
                    Follow us on: &nbsp;
                  </Typography>
                  <FacebookIcon sx={{fontSize: '30px',}}/>
                  <InstagramIcon sx={{fontSize: '30px',}}/>
                  <TwitterIcon sx={{fontSize: '30px',}}/>
              </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <Box className='flex-item-center'
                sx={{
                  height: '100%', p: 1
                }}
              >
                  <Typography variant='p'>
                    Copyright © ReadJPNovels.com
                  </Typography>
              </Box>
              </Grid>
          </Grid>
    )
}


