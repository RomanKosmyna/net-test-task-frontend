import { Link } from "react-router-dom";

import { UrlType } from "../types";
import SeparationLine from "@components/Elements/SeparationLine";

type Props = {
    url: UrlType | null
};

export default function UrlResult({ url }: Props) {
    if (!url) {
        return <div className="w-full h-[15px] mt-5 mb-3"></div>;
    }

    const { originalUrl, shortenedVersion } = url;

    return (
        <div className="w-full min-h-[80px] flex justify-center mt-5 mb-3">
            <div className="w-full max-w-[850px] flex flex-col items-center bg-card rounded-lg shadow-darkBorder p-4">
                <div className="flex justify-center">
                    <h2 className="text-heading text-[25px] font-medium">Latest shortened Url</h2>
                </div>
                <div className="w-full flex flex-col gap-3 mt-2">
                    <div className="w-full">
                        <h4 className="font-bold text-heading text-[15px]">Original URL</h4>
                        <Link
                            to={originalUrl}
                            className="font-medium text-lightBlue break-words hover:text-darkerLightBlue hover:underline
                transition-all"
                        >
                            {originalUrl}
                        </Link>
                    </div>
                    <SeparationLine />
                    <div className="w-full">
                        <h4 className="font-bold text-heading text-[15px]">Shortened URL</h4>
                        <Link
                            to={originalUrl}
                            className="font-medium text-lightBlue break-words hover:text-darkerLightBlue hover:underline
                transition-all"
                        >
                            {`https://localhost:7282/api/url/${shortenedVersion}`}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}