import { NavLink } from "react-router-dom";

export default function HeaderNavigation() {

    return (
        <nav>
            <ul className="flex gap-5">
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive ? "text-lightBlue font-bold text-[18px]" :
                                "text-heading hover:underline hover:text-lightBlue font-bold text-[18px] transition-opacity hover:opacity-90"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/about"}
                        className={({ isActive }) =>
                            isActive ? "text-lightBlue font-bold text-[18px]" :
                                "text-heading hover:underline hover:text-lightBlue font-bold text-[18px] transition-opacity hover:opacity-90"
                        }
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}