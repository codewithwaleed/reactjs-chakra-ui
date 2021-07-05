# React & Chakra UI
###### It demonstrates that how can we use to chakra and react together to develop our applications. One of the benefit of using Chakra is that it makes development very easy it reduces your css code. You can check both in this repo, styling with css or use of styled component and without it. For example for padding, margin, responsiveness and etc.

###### Eslint is also configured in it.

###### Packages are already listed in Package.json. All you need to do is run following commands `npm install` and then `npm start`.
###### To run manually lint command simply run `npm run lint`.

### BreakPoints
###### One of the easist approach in chakra to handle responsiveness of your application is breakpoints like: 

###### export const breakPoints = createBreakpoints({
######  sm: '30em',
######  md: '48em',
######  lg: '62em',
######  xl: '80em',
######  '2xl': '96em',
###### })

###### One more example is as follow you can have in your code `const size = useBreakpointValue({ base: 'md', lg: 'xl' })` and then you can use as `<Avatar size={size} loading="lazy" showBorder={true} name="Dan Abrahmov" src={value.imageUrl} />` so the value of md and xl will be picked from themes.js. 

### Demo url: https://codewithwaleed.github.io/reactjs-chakra-ui/


###### Next version is coming soon with more addons in this combination.
