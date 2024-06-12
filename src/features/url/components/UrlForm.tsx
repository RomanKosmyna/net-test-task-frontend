import { useUrlContext } from "@providers/UrlContext";
import { useUrlForm } from "@hooks/useUrlForm";
import UrlResult from "./UrlResult";

export const UrlForm = () => {
    const { refetch } = useUrlContext();
    const { url, handleUrlChange, handleShortenUrl, responseData } = useUrlForm(refetch);

    return (
        <div className="w-full flex flex-col">
            <form
                action=""
                method="POST"
                onSubmit={handleShortenUrl}
                className="w-full flex justify-center gap-2"
            >
                <input
                    type="url"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="Enter your link here"
                    className={`w-full h-[45px] max-w-[500px] px-3 py-2 border bg-main 
                        border-inputBorder rounded-md focus:outline-none focus:ring-blue-500 
                        focus:border-blue-500 sm:text-sm text-white placeholder-[#666]
                        font-medium`}
                />
                <button
                    type="submit"
                    className="bg-green-700 text-heading font-medium rounded-md 
                px-4 py-1 transition-opacity hover:opacity-90"
                >
                    Shorten Url
                </button>
            </form>
            <UrlResult url={responseData} />
        </div>
    )
};