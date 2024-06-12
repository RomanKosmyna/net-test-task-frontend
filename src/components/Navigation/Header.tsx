import { Link } from "react-router-dom";
import { useAuth } from "src/providers/useAuth";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="w-full h-[84px] max-w-[1100px] bg-main flex justify-between items-center px-5 fixed z-20">
            <HeaderNavigation />
            <div>
                {isLoggedIn() ? (
                    <button
                        onClick={logout}
                        className="bg-red-700 text-heading font-medium rounded-md 
                        px-7 py-2 transition-opacity hover:opacity-90"
                    >
                        Log Out
                    </button>
                ) : (
                    <Link
                        to={"/auth/login"}
                        className="bg-green-700 text-heading font-medium rounded-md 
                        px-7 py-2 transition-opacity hover:opacity-90"
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    )
};

export default Header;