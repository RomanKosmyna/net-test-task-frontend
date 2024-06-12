import { useEffect, useState } from "react";
import SeparationLine from "@components/Elements/SeparationLine";
import GeneralLayout from "@components/Layout/GeneralLayout";
import { checkUserRole } from "@utils/checkUserRole";
import { EditNavigation } from "./EditNavigation";
import EditableText from "./EditableText";
import { useGetAboutById } from "../api/getAboutById";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import { useUpdateAbout } from "../api/updateAbout";
import { getToken } from "@utils/localStorageUtils";
import { Bounce, toast } from "react-toastify";
import DescriptionFormatter from "./DescriptionFormatter";

export const AboutPage = () => {
    const aboutId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    const role = checkUserRole();
    const token = getToken();

    const [isEditActive, setIsEditActive] = useState(false);
    const [text, setText] = useState("");

    const { isPending, isError, data, error, refetch } = useGetAboutById(aboutId);
    const mutation = useUpdateAbout(token, { id: aboutId, description: text }, aboutId);

    useEffect(() => {
        if (data) {
            setText(data.description || "");
        }
    }, [data]);

    const update = async () => {
        try {
            await mutation.mutateAsync();
            refetch();

            toast.success('You have successfully update information', {
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

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data) return <EmptyRequestData message="No information has been found" />

    const { description } = data;

    return (
        <GeneralLayout>
            <div className="flex flex-col gap-4 mt-6 px-5">
                <div className="flex flex-col about:flex-row justify-between items-center">
                    <h3 className="font-bold text-heading text-[35px]">About</h3>
                    {role === "Admin" ? (
                        <EditNavigation
                            isEditActive={isEditActive}
                            setIsEditActive={setIsEditActive}
                            update={update}
                        />
                    ) : null}
                </div>
                <SeparationLine />
            </div>
            <div className="w-full mt-10 px-5">
                {isEditActive ? (
                    <EditableText
                        text={text}
                        setText={setText}
                    />
                ) : (
                    <DescriptionFormatter description={description} />
                )}
            </div>
        </GeneralLayout>
    )
};