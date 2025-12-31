import { useTranslations } from "next-intl";
import { acceptNewJoiner } from "@/nhost-api/clubs/relation.server";
import type { ClubUserRelationFragment } from "@/nhost-api/graphql/generated/sdks";
import Button from "../button/Button";
import { Modal } from ".";

export default function AcceptNewJoinerModal({
    isOpen,
    closeModal,
    selectedUserClubRelation,
    clubId,
    onSuccess,
}: Readonly<{
    isOpen: boolean;
    closeModal: () => void;
    selectedUserClubRelation: ClubUserRelationFragment | null;
    clubId: string;
    onSuccess: () => void;
}>) {
    const t = useTranslations("AcceptNewJoinerModal");

    const handleAccept = async () => {
        if (selectedUserClubRelation) {
            try {
                const responseOk = await acceptNewJoiner(
                    selectedUserClubRelation.user.id,
                    clubId,
                );
                if (responseOk) {
                    console.log("New joiner accepted successfully");
                    onSuccess();
                } else {
                    console.error("Failed to accept new joiner: user session");
                }
            } catch (error) {
                console.error("Error accepting new joiner:", error);
            }
        }
        closeModal();
    };
    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            showCloseButton={false}
            className="max-w-[507px] p-6 lg:p-10"
        >
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                {t("title")}
            </h4>
            <p className="leading-6 text-gray-500 dark:text-gray-400">
                {t.rich("description", {
                    b: (chunks) => (
                        <b className="text-brand-500 dark:text-brand-400 text-base font-bold">
                            {chunks}
                        </b>
                    ),
                    name:
                        selectedUserClubRelation?.user.displayName || t("user"),
                })}
            </p>

            <div className="flex items-center justify-between w-full gap-3 mt-8">
                <Button size="sm" variant="outline" onClick={closeModal}>
                    {t("cancel")}
                </Button>
                <Button size="sm" onClick={handleAccept}>
                    {t("accept")}
                </Button>
            </div>
        </Modal>
    );
}
