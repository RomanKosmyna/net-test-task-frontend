import { Link } from "react-router-dom";
import { useAuth } from "src/providers/useAuth";

const Header = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="w-full h-[84px] max-w-[1100px] flex justify-between items-center">
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <Link
                            to={"/"}
                            className="text-heading"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/about"}
                            className="text-heading"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                {isLoggedIn() ? (
                    <button
                        onClick={logout}
                        className="bg-red-700 text-heading font-medium rounded-md 
                        px-4 py-1 transition-opacity hover:opacity-90"
                    >
                        Log Out
                    </button>
                ) : (
                    <Link
                        to={"/auth/login"}
                        className="bg-green-700 text-heading font-medium rounded-md 
                        px-4 py-1 transition-opacity hover:opacity-90"
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    )
};

export default Header;