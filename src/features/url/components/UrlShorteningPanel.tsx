import { useState } from "react";
import UrlResult from "./UrlResult";
import { checkUserRole } from "@utils/checkUserRole";
import { UrlForm } from "./UrlForm";

import { UrlType } from "../types";

export const UrlShorteningPanel = () => {
    const [responseData, setResponseData] = useState<UrlType | null>(null);

    const role = checkUserRole();

    if (role !== "Admin" && role !== "User") return null;

    return (
        <div className="w-full flex flex-col tablet:items-center px-5 desktop:px-5">
            <UrlForm setResponseData={setResponseData} />
            <UrlResult url={responseData} />
        </div>
    )
};