import {useState} from 'react';
import { Container,Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import { GoogleGenerativeAI } from '@google/generative-ai';
import KeywordsModal from './components/KeywordsModal';


const App = () =>{

const [keywords,setKeywords] = useState('');
const [isOpen,setIsOpen] = useState(false);
const [loading,setLoading] = useState(false);


const extractKeywords = async (text) =>
{
setLoading(true);
setIsOpen(true);
const API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

try{
  const model = genAI.getGenerativeModel({ model: "gemini-pro",
  temperature:0.5,
max_tokens:60});

const prompt = `
Extract the keywords from the given text. Separate the words using comma.`+text+'';
const result = await model.generateContent(prompt);
const response = await result.response;
const generatedText = response.text();

console.log(generatedText);

setKeywords(generatedText);
setLoading(false);

}
catch (error) {
  console.error('Error fetching data:', error);
} finally {
  setLoading(false);
}
};

const closeModal= () =>{
  setIsOpen(false);
}

return (
  <Box bg='purple.600' color='white' height='100vh' paddingTop='130px'>
  <Container maxW='3xl' centerContent>
  <Header/>
  <TextInput extractKeywords={extractKeywords}/>
  <Footer/>
  </Container>
  <KeywordsModal keywords={keywords} loading= {loading} isOpen={isOpen} closeModal={closeModal}/>
  </Box>
  
)
}

export default App;