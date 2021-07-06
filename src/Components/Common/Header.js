import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { CgDarkMode } from 'react-icons/cg';
import { bgColorMode, baseColorMode } from '../../Utils/common';
const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamBurderIconDisplay = useBreakpointValue({ lg: 'none' })
  const stackDisplay = useBreakpointValue({ base: isOpen ? 'block' : 'none', lg: 'flex' })
  const menuItemColor = useBreakpointValue({ lg: 'brand.500', base: 'brand.600' })

  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg={bgColorMode[colorMode]}
      color={baseColorMode[colorMode]}
      borderBottom="1px solid white"
      {...props}
    >
      {/* Here you can use both image or text as per your design */}
      <Flex align="center" mr={5}>
        <Heading size="lg" letterSpacing={'tighter'}>
          Logo
        </Heading>
      </Flex>

      <Box display={hamBurderIconDisplay} textAlign="right" width="90%">
        {
          !isOpen ? <HamburgerIcon onClick={onOpen} /> : <CloseIcon onClick={onClose} />
        }
      </Box>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        display={stackDisplay}
        width={{ base: 'full', lg: 'auto' }}
        alignItems="center"
        alignContent="left"
        flexGrow={1}
        mt={{ base: 4, lg: 0 }}
      >

        <Text bg={bgColorMode[colorMode]} color={menuItemColor} cursor="pointer" p={4}>Menu Item 1</Text>
        <Text bg={bgColorMode[colorMode]} color={menuItemColor} cursor="pointer" p={4}>Menu Item 2</Text>
        <Text bg={bgColorMode[colorMode]} color={menuItemColor} cursor="pointer" p={4}>Menu Item 3</Text>
        <Button
          variant="outline"
          _hover={{ bg: 'brand.500', borderColor: 'brand.600', color: 'brand.600' }}
          display={{ base: 'none', lg: 'block' }}
        >
          Create account
        </Button>
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
      </Box>

      <Box width="2%" margin="auto" >
        <CgDarkMode p={2} cursor='pointer' bg='white' color='white' margin="auto" onClick={toggleColorMode} />
      </Box>
    </Flex >
  );
};

export default Header;
