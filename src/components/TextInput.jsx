import{ useState} from "react"
import { Textarea ,Button, useToast} from "@chakra-ui/react";


const TextInput = ( {extractKeywords}) => {
    const [text,setText] = useState('');
    const toast = useToast();

    const submitText = () =>{
        if(text===''){
            toast({
                title:'Text Field Empty',
                description:'Please enter text for extracting keywords ',
                status:'error',
                duration:3000,
                isClosable:false
            })
        }else{
            extractKeywords(text);
        }
    }

    return (
        <>
        <Textarea
            bg= 'purple.400'
            color='white'
            padding={4}
            marginTop={6}
            height={200}
            value={text}
            onChange={(e)=> setText(e.target.value)}
        />
        <Button
        bg='purple.500'
        color='white'
        marginTop={6}
        width='100%'
        _hover={{bg:'purple.700'}}
        onClick={submitText}
        >
            Extract Keywords
        </Button>
        </>

    )
    
}

export default TextInput;