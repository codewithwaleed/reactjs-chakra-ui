# React & Chakra UI
###### It demonstrates that how can we use to chakra and react together to develop our applications. One of the benefit of using Chakra is that it makes development very easy it reduces your css code. You can check both in this repo, styling with css or use of styled component and without it. For example for padding, margin, responsiveness and etc.

###### Eslint is also configured in it.

###### Packages are already listed in Package.json. All you need to do is run following commands `npm install` and then `npm start`.
###### To run manually lint command simply run `npm run lint`.
### how to manage CSS with Chakra?
###### When we use Chakra our css work reduce to half. For example if i have to make a container which will show image, name and description then for me to apply css is very easy with chakra as it works as follow: 
###### One of the easist approach in chakra to handle responsiveness of your application is breakpoints like: ` <ReviewContainer key={key} boxShadow="2xl" p="6" rounded="md" ms="auto" w="30%" bg="brand.500">
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
                
                
                
###### In above example you can see that all of the styling has been passed as props without writing the complete css as normally we do in less or sass.

### BreakPoints

###### export const breakPoints = createBreakpoints({
######  sm: '30em',
######  md: '48em',
######  lg: '62em',
######  xl: '80em',
######  '2xl': '96em',
###### })

###### One more example is as follow you can have in your code `const size = useBreakpointValue({ base: 'md', lg: 'xl' })` and then you can use as `<Avatar size={size} loading="lazy" showBorder={true} name="Dan Abrahmov" src={value.imageUrl} />` so the value of md and xl will be picked from themes.js. 

### Dark Mode
###### Chakra it self provide Dark Mode feature, behind the scene they are using statement management for it but for developers its very easy to use, for example in this case we have 
```
export const bgColorMode = { light: 'brand.600', dark: 'brand.900' };
export const baseColorMode = { light: 'brand.500', dark: 'brand.500' };
```

###### Later in my different componenet it can be used as follow: 
```
So its simple to use it as follow:
import { useColorMode } from '@chakra-ui/react';
import { bgColorMode, baseColorMode } from '../../Utils/common';
const { colorMode } = useColorMode();

below is the line you can add in your container

bg={bgColorMode[colorMode]}

while my button is added in my header section which is generic for whole applicatoin:
<CgDarkMode p={2} cursor='pointer' bg='white' color='white' margin="auto" onClick={toggleColorMode} />
```

### Demo url: https://codewithwaleed.github.io/reactjs-chakra-ui/


###### Next version is coming soon with more addons in this combination.
