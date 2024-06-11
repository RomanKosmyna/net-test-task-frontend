export const UrlForm = () => {
    const handleRequest = async () => {
        await fetch();
    };

    return (
        <form action="" method="POST" className="flex gap-1">
            <input
                required
                placeholder="Url"
                type="url"
                name="fullUrl"
                className="px-3 py-2 rounded-sm"
            />
            <button
                type="submit"
                className="bg-slate-600 px-3 rounded-sm font-bold"
            >
                Shorten Url
            </button>
        </form>
    )
};