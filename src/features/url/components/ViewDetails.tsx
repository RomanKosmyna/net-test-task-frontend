import { Link } from "react-router-dom";

type Props = {
    id: string | undefined;
};

export default function ViewDetails({ id }: Props) {
    return (
        <Link
            to={`/url/${id}`}
            className="bg-lightBlue text-heading font-medium rounded-md 
                px-4 py-1 transition-opacity hover:opacity-90"
        >
            View Details
        </Link>
    )
}