import { Spinner } from "@chakra-ui/react";

export default function PendingSpinner() {
    return (
        <div className="w-full flex min-h-[calc(100vh-84px)] justify-center items-center">
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