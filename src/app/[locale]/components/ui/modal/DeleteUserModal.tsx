import { useTranslations } from "next-intl";
import type { UserInfo } from "@/app/lib/nhost/server/data/users";
import Button from "../button/Button";
import { Modal } from ".";

export default function DeleteUserModal({ isOpen, closeModal, selectedUser, clubId, onSuccess }: { isOpen: boolean; closeModal: () => void; selectedUser: UserInfo | null; clubId: string; onSuccess: () => void }) {
    const t = useTranslations("DeleteUserModal");

    const handleDelete = async () => {
        if (selectedUser) {
            try {
                const response = await fetch(`/api/clubs/${clubId}/users/${selectedUser.id}/`, {
                    method: "DELETE",
                });
                if (!response.ok) {
                    console.error("Failed to delete user:", response.statusText);
                } else {
                    console.log("User deleted successfully");
                    onSuccess();
                }
            } catch (error) {
                console.error("Error deleting user:", error);
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
            <div className="text-center">
                <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
                    {t("title")}
                </h4>
                <p className="leading-6 text-gray-500 dark:text-gray-400">
                    {t.rich('description', {
                        b: (chunks) => <b className="text-brand-500 dark:text-brand-400 text-base font-bold">{chunks}</b>, name: selectedUser?.displayName || t("user")
                    })}
                </p>

                <div className="flex items-center justify-center w-full gap-3 mt-8">

                    <Button size="sm" variant="outline" onClick={closeModal}>
                        {t("cancel")}
                    </Button>
                    <Button size="sm" onClick={handleDelete} variant="error">
                        {t("delete")}
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
