import { Bounce, toast } from "react-toastify";
import { useDeleteUrl } from "../api/deleteUrl";

type Props = {
    id: string | undefined;
    onDelete: () => void;
};

export default function RemoveUrl({ id, onDelete }: Props) {
    const token = localStorage.getItem("token")!;
    const deleteUrl = useDeleteUrl(token, id);

    const removeUrl = async () => {
        try {
            await deleteUrl.mutateAsync();

            onDelete();

            toast.success('You have successfully removed url', {
                position: "bottom-center",
                className: "toast-success-message",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                transition: Bounce,
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);

            toast.error(errorMessage, {
                position: "bottom-center",
                className: "toast-error-message",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                transition: Bounce,
            });
        }
    };

    return (
        <button
            onClick={() => removeUrl()}
            className="bg-red-700 text-heading font-medium rounded-md 
                px-4 py-1 transition-opacity hover:opacity-90"
        >
            Remove
        </button>
    )
}