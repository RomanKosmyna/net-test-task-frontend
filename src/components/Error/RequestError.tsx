type Props = {
    errorMessage: string | undefined;
};

const RequestError = ({ errorMessage }: Props) => {
    return (
        <div className="w-full flex flex-grow justify-center items-center">
            <h4 className="text-xl">{errorMessage}</h4>
        </div>
    )
};

export default RequestError;