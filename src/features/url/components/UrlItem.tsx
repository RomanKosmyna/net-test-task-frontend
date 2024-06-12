import { Link } from "react-router-dom";
import SeparationLine from "@components/Elements/SeparationLine";
import RemoveUrl from "./RemoveUrl";
import ViewDetailsLink from "./ViewDetailsLink";
import { checkUserRole } from "@utils/checkUserRole";
import { checkUserId } from "@utils/checkUserId";

import { UrlType } from "../types";

type Props = {
    url: UrlType;
    onDelete: () => void;
};

export default function UrlItem({ url, onDelete }: Props) {
    const { id, userId, originalUrl, shortenedVersion } = url;
    const role = checkUserRole();
    const activeUserId = checkUserId();
    
    return (
        <li className="bg-card rounded-md px-5 py-2 flex flex-col justify-between gap-4 pb-3">
            <div>
                <h3 className="font-bold text-heading text-[35px]">Original URL</h3>
                <Link
                    to={originalUrl}
                    className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline
                transition-all"
                >
                    {originalUrl}
                </Link>
            </div>
            <SeparationLine />
            <div>
                <h3 className="font-bold text-heading text-[35px]">Shortened URL</h3>
                <Link
                    to={originalUrl}
                    className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline
                transition-all"
                >
                    {`https://localhost:7282/api/url/${shortenedVersion}`}
                </Link>
            </div>
            <SeparationLine />
            {role === "Admin" || role === "User" ? (
                <div className="flex items-center gap-3">
                    <ViewDetailsLink id={id} />
                    {role === "Admin" && (
                        <RemoveUrl id={id} onDelete={onDelete} />
                    )}
                    {role === "User" && activeUserId === userId && (
                        <RemoveUrl id={id} onDelete={onDelete} />
                    )}
                </div>
            ) : null}

        </li>
    )
}