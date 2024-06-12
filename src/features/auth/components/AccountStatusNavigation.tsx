import { Link } from "react-router-dom";

type Props = {
    text: string;
    linkRoute: string;
    linkText: string;
};

const AccountStatusNavigation = ({ text, linkRoute, linkText }: Props) => {
    return (
        <div className="w-full mt-6 flex flex-col items-center">
            <p className="text-heading text-[17px] font-medium">{text}</p>
            <Link
                to={linkRoute}
                className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline
                transition-all"
            >
                {linkText}
            </Link>
        </div>
    )
};

export default AccountStatusNavigation;