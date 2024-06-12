import { useEffect, useState } from "react";
import SeparationLine from "@components/Elements/SeparationLine";
import GeneralLayout from "@components/Layout/GeneralLayout";
import { checkUserRole } from "@utils/checkUserRole";
import { EditInformation } from "./EditInformation";
import EditableText from "./EditableText";
import { useGetAboutById } from "../api/getAboutById";
import PendingSpinner from "@components/Pending/PendingSpinner";
import RequestError from "@components/Error/RequestError";
import EmptyRequestData from "@components/EmptyData/EmptyRequestData";
import { useUpdateAbout } from "../api/updateAbout";
import { getToken } from "@utils/localStorageUtils";

export const AboutPage = () => {
    const aboutId = "3FA85F64-5717-4562-B3FC-2C963F66AFA6";
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
        } catch (error) {
            console.error("Error updating about:", error);
        }
    };

    if (isPending) return <PendingSpinner />

    if (isError) return <RequestError errorMessage={error?.message} />

    if (!data) return <EmptyRequestData message="No information has been found" />

    const { description } = data;

    return (
        <GeneralLayout>
            <div className="flex flex-col gap-4 mt-6 px-5">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-heading text-[35px]">About</h3>
                    {role === "Admin" ? (
                        <EditInformation
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
                    <p className="font-medium text-heading">{description}</p>
                )}
            </div>
        </GeneralLayout>
    )
};