import GeneralLayout from "@components/Layout/GeneralLayout";
import { UrlList } from "@features/url/components/UrlList";
import { UrlShorteningPanel } from "./UrlShorteningPanel";

const UrlPage = () => {

    return (
        <GeneralLayout>
            <UrlShorteningPanel />
            <UrlList />
        </GeneralLayout>
    )
};

export default UrlPage;