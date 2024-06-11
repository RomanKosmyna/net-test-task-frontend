import { useAllUrls } from "../api/getAllUrls";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import UrlItem from "./UrlItem";

import { UrlType } from "../types";

export const UrlList = () => {
    const { isPending, isError, data, error, refetch } = useAllUrls();

    const handleDelete = () => {
        refetch();
    };

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data?.length) return <EmptyRequestData message="No urls has been found" />

    return (
        <ul className={`w-full mt-10 grid gap-4 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2
            ${data.length < 3 ? "justify-start" : "justify-between"}`}>
            {data
                .map((url: UrlType) => (
                    <UrlItem
                        key={url.id}
                        url={url}
                        onDelete={handleDelete}
                    />
                ))}
        </ul>
    )
};