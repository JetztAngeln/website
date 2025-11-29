import { UserInfo } from "@/lib/models/user_info";
import { deleteUserClubRelation } from "@/nhost-api/clubs/relation.server";
import { useTranslations } from "next-intl";
import { Modal } from ".";
import Button from "../button/Button";

export default function DeclineNewJoinerModal({ isOpen, closeModal, selectedUser, clubId, onSuccess }: { isOpen: boolean; closeModal: () => void; selectedUser: UserInfo | null; clubId: string; onSuccess: () => void }) {
    const t = useTranslations("DeclineNewJoinerModal");

    const handleDecline = async () => {
        if (selectedUser) {
            try {
                const responseOk = await deleteUserClubRelation(selectedUser.id, clubId);
                if (responseOk) {
                    console.log("New joiner declined successfully");
                    onSuccess();
                } else {
                    console.error("Failed to decline new joiner: user session");
                }
            } catch (error) {
                console.error("Error declining new joiner:", error);
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
                {t.rich('description', {
                    b: (chunks) => <b className="text-brand-500 dark:text-brand-400 text-base font-bold">{chunks}</b>, name: selectedUser?.displayName || t("user")
                })}
            </p>

            <div className="flex items-center justify-between w-full gap-3 mt-8">
                <Button size="sm" variant="outline" onClick={closeModal}>
                    {t("cancel")}
                </Button>
                <Button size="sm" onClick={handleDecline} variant="error">
                    {t("decline")}
                </Button>
            </div>
        </Modal>
    )
}
