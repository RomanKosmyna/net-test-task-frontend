import { Dispatch, SetStateAction } from "react";

type Props = {
    isEditActive: boolean;
    setIsEditActive: Dispatch<SetStateAction<boolean>>;
    update: () => void;
};

export const EditNavigation = (
    { isEditActive, setIsEditActive, update }: Props
) => {
    const handleEdit = () => {
        setIsEditActive(true);
    };

    const handleCancel = () => {
        setIsEditActive(false);
    };

    const handleUpdate = () => {
        update();
        setIsEditActive(false);
    };

    return (
        <>
            {isEditActive ? (
                <div className="flex gap-2">
                    <button
                        onClick={handleCancel}
                        className="bg-red-700 text-heading font-medium rounded-md 
                px-10 py-2 transition-opacity hover:opacity-90">
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdate}
                        className="bg-green-700 text-heading font-medium rounded-md 
                px-10 py-2 transition-opacity hover:opacity-90">
                        Update
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleEdit}
                    className="bg-lightBlue text-heading font-medium rounded-md 
                px-10 py-2 transition-opacity hover:opacity-90">
                    Edit
                </button>
            )}
        </>
    )
};