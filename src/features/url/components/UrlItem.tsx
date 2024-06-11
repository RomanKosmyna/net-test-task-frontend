import { Link } from "react-router-dom";
import { UrlType } from "../types";

type Props = {
    url: UrlType;
};

export default function UrlItem({ url }: Props) {
    const { id, originalUrl, shortenedVersion } = url;

    return (
        <li className="bg-slate-400 rounded-md px-5 py-2 flex gap-4">
            <div>
                <h3>Original URL</h3>
                <Link to={originalUrl}>{originalUrl}</Link>
            </div>
            <div>
                <h3>Shortened URL</h3>
                <Link to={originalUrl}>{shortenedVersion}</Link>
            </div>
            <Link to={`/url/${id}`} className="bg-green-600 flex items-center px-5">View details</Link>
        </li>
    )
}