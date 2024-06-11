import { Link } from "react-router-dom";
import { useAuth } from "src/providers/useAuth";

const Header = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <header className="w-full h-[84px] max-w-[1100px] flex justify-between items-center">
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
            <div>
                {isLoggedIn() ? (
                    <button onClick={logout}>Log Out</button>
                ) : (
                    <Link to={"/auth/login"}>Sign In</Link>
                )}
            </div>
        </header>
    )
};

export default Header;