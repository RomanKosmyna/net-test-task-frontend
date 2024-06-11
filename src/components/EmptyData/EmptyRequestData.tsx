type Props = {
    message: string;
};

export default function EmptyRequestData({ message }: Props) {
    return (
        <div className="w-full flex flex-grow justify-center items-center">
            <h4 className="text-xl">{message}</h4>
        </div>
    )
}