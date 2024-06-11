import { Link } from "react-router-dom";

const GuestLink = () => {
    return (
        <div>
            <Link
                to={"/"}
            >
                Browse as a guest
            </Link>
        </div>
    )
};

export default GuestLink;