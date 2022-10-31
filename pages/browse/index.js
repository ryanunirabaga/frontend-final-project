import { Box, Grid, Typography, CardActionArea, Card, CardContent, CssBaseline } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DrawerAppBar } from "../../src/navBar";
import { firebaseStorageContext } from "../../Contexts/firebaseStorage";
import Image from 'next/image'
import { Footer } from "../../src/footer";
import { useRouter } from "next/router";
import { AuthenticationContext } from "../../Contexts/authentication";

export default function BrowseNovels() {

    const { folderArray } = useContext(firebaseStorageContext);
    const router = useRouter();

    const { logRoute } = useContext(AuthenticationContext);

    useEffect(()=>{
      logRoute();
    });


    function NovelCard({title}) {

        const imgLocation = `/NovelCovers/${title}.webp`;
        
        const routeTo = () => {
            const route = `/browse/${title}`;
            router.push(route);
        }

        return (
            <Grid item lg={4} md={12} sm={12} xs={12} className='flex-item-center'>
            <Box className="flex-item-center"
                sx={{
                    mt:2,
                    mb:3
                }}
            >
                <Card>
                    <CardActionArea onClick={routeTo}>
                        <Box className="novel-card-block" data-key={title}>
                            <Image
                                src={imgLocation}
                                alt={title}
                                width={290}
                                height={415}
                                layout='responsive'
                            />
                            <CardContent>
                            <Box className="flex-item-center">
                                <Typography variant='p' fontSize={16}>
                                    {title}
                                </Typography>
                            </Box>
                        </CardContent> 
                        </Box>
                    </CardActionArea>
                </Card>
            </Box>
        </Grid>
        )
    }

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Grid container justifyContent='space-around'>
            {
                folderArray.sort().map((item, index) => <NovelCard key={index} title={item} /> )
            }
            </Grid>
            <Footer/>
        </>
    )
}