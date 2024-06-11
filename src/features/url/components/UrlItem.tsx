import { Link } from "react-router-dom";
import { UrlType } from "../types";
import SeparationLine from "@components/Elements/SeparationLine";
import RemoveUrl from "./RemoveUrl";
import ViewDetails from "./ViewDetails";

type Props = {
    url: UrlType;
    onDelete: () => void;
};

export default function UrlItem({ url, onDelete }: Props) {
    const { id, originalUrl, shortenedVersion } = url;

    return (
        <li className="bg-card rounded-md px-5 py-2 flex flex-col gap-4 pb-3">
            <div>
                <h3 className="font-bold text-darkHeading text-[35px]">Original URL</h3>
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
                <h3 className="font-bold text-darkHeading text-[35px]">Shortened URL</h3>
                <Link
                    to={originalUrl}
                    className="font-medium text-lightBlue hover:text-darkerLightBlue hover:underline
                transition-all"
                >
                    {`https://localhost:7282/api/url/${shortenedVersion}`}
                </Link>
            </div>
            <SeparationLine />
            <div className="flex items-center gap-3">
                <ViewDetails id={id} />
                <RemoveUrl id={id} onDelete={onDelete} />
            </div>
        </li>
    )
}