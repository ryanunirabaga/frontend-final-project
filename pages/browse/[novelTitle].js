import { Container, Grid, Link, Typography, Box, Card, Divider, Button } from "@mui/material";
import { firebaseStorageContext } from "../../Contexts/firebaseStorage";
import { AuthenticationContext } from "../../Contexts/authentication";
import CssBaseline from '@mui/material/CssBaseline';
import { useContext } from "react";
import { DrawerAppBar } from "../../src/navBar";
import { useRouter } from "next/router";
import { synopsis } from "../../src/synopsis";
import Image from "next/image";


function NovelDetails() {

    const { fileArray } = useContext(firebaseStorageContext);
    const { logRoute, isLoggedIn } = useContext(AuthenticationContext);
    const router = useRouter();

    const novelTitle = router.query.novelTitle;
    const imgLocation = `/NovelCovers/${novelTitle}.webp`;

    const redirectToSignIn = () => {
        logRoute();
        router.push('/signIn');
    }

    function DonwloadLinks() {

        const novelVolumes = [...fileArray.filter((item) => item.folderName === novelTitle).map((item) => item.fileName).sort()];

        return (
            novelVolumes.map((novelVolumeNo, index) => {
                const novelVol = fileArray.filter((item) => item.fileName === novelVolumeNo)[0];
                return (
                    <div key={index}>
                        <Link href={novelVol.downloadURL} target='_blank' className='download-link'>
                            <Typography variant="p" fontSize={13} >{novelVol.fileName}</Typography>
                        </Link>
                    </div>
                );
            })
        );
    }

    function SignInToDownload() {
        if(!isLoggedIn)
            return (
                <Button onClick={redirectToSignIn} color='warning' variant='contained'>
                    Sign In to show download links
                </Button>
            )
        return (<DonwloadLinks/>)
    }

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Container maxWidth='lg' sx={{my: 3}}>
                <Card className="card">
                <Typography variant="h4" textAlign='center' my={2} px={2}>
                    {novelTitle}
                </Typography>
                <Divider/>
                <Grid container justifyContent='space-around'>
                    <Grid item lg={4} md={4} sm={12} xs={12} my={2}>
                        <Box className="flex-item-center">
                            <Card>
                                <Box className="description-card-block">
                                    <Image
                                        src={imgLocation}
                                        alt={novelTitle}
                                        width={290}
                                        height={415}
                                        layout='responsive'
                                    />
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} xs={12} my={2}>
                        <Box
                            sx={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: {
                                lg: 'start',
                                md: 'start',
                                sm: 'center',
                                xs: 'center',
                            },
                            px: 5
                        }}
                        >
                            <Typography variant="h6" mb={1} textAlign='start'>
                                Synopsis
                            </Typography>
                            <Typography variant="p" fontSize={13} textAlign='justify' mb={1}>
                                {synopsis[`${novelTitle}`]}
                            </Typography>
                            <Typography variant="h6" my={1} >
                                Download Links
                            </Typography>
                            <SignInToDownload/>
                        </Box>
                    </Grid>
                </Grid>
                </Card>
            </Container>
            
        </>
    );
}

export default NovelDetails;