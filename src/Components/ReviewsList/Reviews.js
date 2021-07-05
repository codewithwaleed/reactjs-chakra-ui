import React, { useEffect, useState } from 'react'; // eslint-disable-line
import { Box, Avatar, useBreakpointValue, Text, Center } from '@chakra-ui/react';
import { ReviewContainer } from './style'
import Reviews from './Reviews.json' /* In real senario this data will be coming from api. */

const Main = () => {
    const size = useBreakpointValue({ base: 'md', lg: 'xl' })
    const textSize = useBreakpointValue({ base: 'lg', lg: 'xl' })
    const [card, setCard] = useState([])

    useEffect(() => {
        iterateData() /* it means that whenever component will load it will iterate your data on front end. */
    });

    function iterateData() {
        const array = []
        Reviews.forEach((value) => {
            array.push(
                <ReviewContainer boxShadow="2xl" p="6" rounded="md" ms="auto" w="30%" bg="brand.500">
                    <Box>
                        <Center>
                            <Avatar size={size} loading="lazy" showBorder={true} name="Dan Abrahmov" src={value.imageUrl} />
                        </Center>
                        <Center>
                            <Text fontWeight="extrabold" w="auto" pt={4} fontSize={textSize} color="brand.600">{value.name}</Text>
                        </Center>
                    </Box>
                    <Box>
                        <Text align="center" color="brand.800">{value.description}</Text>
                    </Box>
                </ReviewContainer>)
        })

        setCard(array);
    }
    return (
        <Box bg="brand.600" p={10} textAlign="center" alignItems="center" justifyContent="space-between" color="white">
            {card}
        </Box>
    )
}

export default Main