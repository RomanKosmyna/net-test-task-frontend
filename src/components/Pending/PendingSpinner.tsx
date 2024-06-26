import { Spinner } from "@chakra-ui/react";

export default function PendingSpinner() {
    return (
        <div className="w-full flex flex-grow justify-center items-center">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    )
}