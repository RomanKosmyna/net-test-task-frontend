import { Link } from "react-router-dom";

const GuestLink = () => {
    return (
        <div className="w-full mt-5">
            <Link
                to={"/"}
                className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline
                transition-all"
            >
                Browse as a guest
            </Link>
        </div>
    )
};

export default GuestLink;