import {Box,Image,Flex,Text, Container} from "@chakra-ui/react";
import logo from "../assets/gemini.svg";


const Footer = () =>{
    return (
        <>

        <Box marginTop='50px'>
        <Flex direction='column' justifyContent='center' alignItems='center'>
        <Text fontSize={12} color='white'>Powered by</Text>
        <Image src={logo} height={70} marginTop={-5}/>
        </Flex>
        </Box>
        </>

        
    );
}

export default Footer;