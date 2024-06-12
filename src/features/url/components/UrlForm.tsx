import { useUrlContext } from "@providers/UrlContext";
import { useUrlForm } from "@hooks/useUrlForm";
import UrlResult from "./UrlResult";
import { checkUserRole } from "@utils/checkUserRole";

export const UrlForm = () => {
    const { refetch } = useUrlContext();
    const { url, handleUrlChange, handleShortenUrl, responseData } = useUrlForm(refetch);

    const role = checkUserRole();
    if (role !== "Admin" && role !== "User") return null;

    return (
        <div className="w-full flex flex-col tablet:items-center px-5 desktop:px-5">
            <form
                action=""
                method="POST"
                onSubmit={handleShortenUrl}
                className="w-full desktop:max-w-[700px] flex flex-col tablet:flex-row justify-center gap-2"
            >
                <input
                    type="url"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="Enter your link here"
                    className={`w-full h-[45px] flex-grow tablet:flex-grow-0 px-3 py-2 border bg-main 
                        border-inputBorder rounded-md focus:outline-none focus:ring-blue-500 
                        focus:border-blue-500 sm:text-sm text-white placeholder-[#666]
                        font-medium`}
                />
                <button
                    type="submit"
                    className="w-full tablet:w-[150px] bg-green-700 text-heading font-medium rounded-md 
                px-4 py-2 transition-opacity hover:opacity-90"
                >
                    Shorten Url
                </button>
            </form>
            <UrlResult url={responseData} />
        </div>
    )
};