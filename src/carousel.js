import { Typography, Box, CardActionArea, Card, CardContent } from '@mui/material';
import { firebaseStorageContext } from '../Contexts/firebaseStorage';
import Carousel from 'react-material-ui-carousel';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Image from 'next/image';




export function LatestNovels(props) {

    const {folderArray} = useContext(firebaseStorageContext);

    return (
        <Box
        sx={{
            alignItems: 'Center',
            justifyContent: 'center',
            pb: 2
        }}
        >
            <Carousel>
                {
                    folderArray.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Box>
    )
}

function Item(props) {

    const imgLocation = `/NovelCovers/${props.item}.webp`;
    const router = useRouter();

    const routeTo = () => {
        const route = `/browse/${props.item}`;
        router.push(route);
    }
    
    return (
        <Box className='flex-item-center' mt={2}>
            <Card sx={{backgroundColor: 'transparent', mb: 1}}>
                <CardActionArea onClick={routeTo}>
                <Box className='description-card-block'>
                    <Image
                        src={imgLocation}
                        alt={props.item}
                        width={290}
                        height={415}
                        layout='responsive'
                    />
                    <CardContent>
                        <Box className='flex-item-center'>
                            <Typography variant='p'>
                                {props.item}
                            </Typography>
                        </Box>
                    </CardContent> 
                </Box>
                
                </CardActionArea>
            </Card>
                            
        </Box>
    )
}