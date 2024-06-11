import { Link } from "react-router-dom";

type Props = {
    text: string;
    linkRoute: string;
    linkText: string;
};

const AccountStatusNavigation = ({ text, linkRoute, linkText }: Props) => {
    return (
        <div>
            <p>{text}</p>
            <Link
                to={linkRoute}
            >
                {linkText}
            </Link>
        </div>
    )
};

export default AccountStatusNavigation;