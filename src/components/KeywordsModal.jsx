import {
Text,
Button,
Modal,
ModalOverlay,
ModalContent,
ModalCloseButton,
ModalHeader,
ModalBody,
ModalFooter,
CircularProgress
} from '@chakra-ui/react'

const KeywordsModal = ({keywords,loading,isOpen,closeModal}) =>{
    return(
        <>
        <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay/>
        <ModalContent>
        <ModalHeader>Keywords</ModalHeader>
        <ModalCloseButton/>
        <ModalBody display='flex' alignItems='center' justifyContent='center'>
            {loading ? (
                <CircularProgress isIndeterminate color='purple.300'/>
            ) : (<Text>
                {keywords}
            </Text>)}
        </ModalBody>
        <ModalFooter>
            <Button colorScheme='purple' mr={3} onClick={closeModal}>
                Close
            </Button>
        </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
}

export default KeywordsModal;