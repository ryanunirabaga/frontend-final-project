import { Container, Typography } from "@mui/material";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerAppBar } from "../src/navBar";
import ReactPlayer from 'react-player/youtube'
import { Footer } from "../src/footer";

export default function AboutUs() {

    return (
        <>
            <CssBaseline/>
            <DrawerAppBar/>
            <Container maxWidth='lg' className="flex-item-center"
                sx={{
                    my: 3
                }}
            >
                <ReactPlayer 
                    muted={false}
                    playing={true}
                    url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    width='100%'
                    height='80vh'
                    />    
            </Container>
            <Footer/>
        </>
    )
}