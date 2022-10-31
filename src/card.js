import { Grid, Box, Typography } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DevicesIcon from '@mui/icons-material/Devices';

export function BrowseCard() {
  return (
    <Grid item lg={4} md={6} sm={12} xs={12} my={4} className='flex-item-center'>
        <Box className='home-card-box'>
            <ContentPasteSearchIcon className='home-card-icon'/>
            <Typography variant='h5' sx={{mb: 1}}>
                Browse
            </Typography>
            <Typography className='home-card-text'>
            {`Check if it's avaiable on us!`}
            </Typography>

        </Box>
    </Grid>
    
  );
}

export function DownloadCard() {
    return (
      <Grid item lg={4} md={6} sm={12} xs={12} my={4} className='flex-item-center'>
          <Box className='home-card-box'>
              <FileDownloadIcon className='home-card-icon'/>
              <Typography variant='h5' sx={{mb: 1}}>
                  Download
              </Typography>
              <Typography className='home-card-text'>
              {`No waiting time, or unnecessary redirects!`}
              </Typography>
          </Box>
      </Grid>
      
    );
  }

export function EnjoyCard() {
    return (
        <Grid item lg={4} md={6} sm={12} xs={12} my={4} className='flex-item-center'>
            <Box className='home-card-box'>
                <DevicesIcon className='home-card-icon'/>
                <Typography variant='h5' sx={{mb: 1}}>
                    Enjoy
                </Typography>
                <Typography className='home-card-text'>
                {`Read in any device you want!`}
                </Typography>

            </Box>
        </Grid>
        
    );
}