import { useAllUrls } from "../api/getAllUrls";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import UrlItem from "./UrlItem";

import { UrlType } from "../types";

export const UrlList = () => {
    const { isPending, isError, data, error } = useAllUrls();

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data?.length) return <EmptyRequestData message="No urls has been found" />

    return (
        <ul className="w-full flex flex-col gap-3 mt-10">
            {data
                .map((url: UrlType) => (
                    <UrlItem key={url.id} url={url} />
                ))}
        </ul>
    )
};