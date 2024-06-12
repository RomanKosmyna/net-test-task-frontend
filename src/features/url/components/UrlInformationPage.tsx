import { Link, useParams } from "react-router-dom";
import { useGetUrlById } from "../api/getUrlById";
import { getToken } from "@utils/localStorageUtils";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import GeneralLayout from "@components/Layout/GeneralLayout";
import SeparationLine from "@components/Elements/SeparationLine";
import { ExpirationDateFormatter } from "../utils/expirationDateFormatter";

export const UrlInformationPage = () => {
    const { id } = useParams();
    const token = getToken();
    const { isPending, isError, data, error } = useGetUrlById(token, id);

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data) return <EmptyRequestData message="No such url has been found" />

    const { originalUrl, shortenedVersion, createdBy, expirationDate } = data;

    const formattedExpirationDate = ExpirationDateFormatter(expirationDate);

    const renderUrlDetail = (label: string, value: string) => (
        <div>
            <h3 className="font-bold text-heading text-[35px]">{label}</h3>
            <p className="font-medium text-lightBlue text-[20px]">{value}</p>
        </div>
    );

    return (
        <GeneralLayout>
            <div className="flex flex-col gap-4 mt-6 px-5">
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
                {renderUrlDetail("Created By", createdBy)}
                {formattedExpirationDate !== null ? (
                    <>
                        <SeparationLine />
                        {renderUrlDetail("Expiration Date", formattedExpirationDate)}
                    </>
                ) : null}
            </div>
        </GeneralLayout>
    )
};