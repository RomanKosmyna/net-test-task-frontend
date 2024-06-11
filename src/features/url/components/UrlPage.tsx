import GeneralLayout from "@components/Layout/GeneralLayout";
import { UrlForm } from "@features/url/components/UrlForm";
import { UrlList } from "@features/url/components/UrlList";

const UrlPage = () => {

    return (
        <GeneralLayout>
            {/* <UrlForm /> */}
            <UrlList />
        </GeneralLayout>
    )
};

export default UrlPage;