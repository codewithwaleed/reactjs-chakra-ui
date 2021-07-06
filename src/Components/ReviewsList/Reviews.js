import React, { useEffect, useState } from 'react'; // eslint-disable-line
import { Box, Avatar, useBreakpointValue, Text, Center, useColorMode } from '@chakra-ui/react';
import { ReviewContainer } from './style'
import Reviews from './Reviews.json' /* In real senario this data will be coming from api. */
import { bgColorMode, baseColorMode } from '../../Utils/common';

const Main = () => {
    const { colorMode } = useColorMode();
    const size = useBreakpointValue({ base: 'md', lg: 'xl' })
    const textSize = useBreakpointValue({ base: 'lg', lg: 'xl' })
    const [card, setCard] = useState([])

    useEffect(() => {
        card.length === 0 && iterateData() /* it means that whenever component will load it will iterate your data on front end. */
    });

    function iterateData() {
        const array = []
        Reviews.forEach((value, key) => {
            array.push(
                <ReviewContainer key={key} boxShadow="2xl" p="6" rounded="md" ms="auto" w="30%" bg="brand.500">
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
        <Box bg={bgColorMode[colorMode]} p={10} textAlign="center" alignItems="center" justifyContent="space-between" color="white">
            {card}
        </Box>
    )
}

export default Main