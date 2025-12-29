import { UserInfo } from "@/lib/models/user_info";
import { updateUserRole } from "@/nhost-api/clubs/relation.server";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Modal } from ".";
import Button from "../button/Button";

const roleColors: Record<string, string> = {
    ADMIN: "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
    SUPERVISOR: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
    USER: "bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15 dark:text-blue-light-500",
};

const defaultStyle = "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80"

export default function EditUserRoleModal({ isOpen, closeModal, selectedUser, onSuccess }: Readonly<{ isOpen: boolean; closeModal: () => void; selectedUser: UserInfo | null; onSuccess: () => void; }>) {
    const [role, setRole] = useState(selectedUser?.role || "USER");
    const [loading, setLoading] = useState(false);
    const t = useTranslations("EditUserRoleModal");

    useEffect(() => {
        if (selectedUser) {
            setRole(selectedUser.role);
        }
    }, [selectedUser]);

    const handleSave = async () => {
        if (selectedUser) {
            try {
                setLoading(true);
                const responseOk = await updateUserRole(selectedUser.id, role);
                if (responseOk) {
                    console.log("User role updated successfully");
                    onSuccess();
                } else {
                    console.error("Failed to update user role")
                }
            } catch (error) {
                console.error("Error updating user role:", error);
            } finally {
                setLoading(false);
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
                    {/* {t("description", { name: selectedUser?.displayName || t("user") })} */}
                    {t.rich('description', {
                        b: (chunks) => <b className="text-brand-500 dark:text-brand-400 text-base font-bold">{chunks}</b>, name: selectedUser?.displayName || t("user")
                    })}
                </p>
                <div className="relative mt-6 flex items-center justify-center gap-3">
                    <button type="button" onClick={() => setRole("USER")} className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-bold ${role === "USER" ? roleColors[role] : defaultStyle}`}>
                        USER
                    </button>
                    <button type="button" onClick={() => setRole("SUPERVISOR")} className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-bold ${role === "SUPERVISOR" ? roleColors[role] : defaultStyle}`}>
                        SUPERVISOR
                    </button>
                    <button type="button" onClick={() => setRole("ADMIN")} className={`inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-bold ${role === "ADMIN" ? roleColors[role] : defaultStyle}`}>
                        ADMIN
                    </button>
                </div>

                <div className="flex items-center justify-center w-full gap-3 mt-8">
                    <Button size="sm" variant="outline" onClick={closeModal} disabled={loading}>
                        {t("cancel")}

                    </Button>
                    <Button size="sm" onClick={handleSave} disabled={loading}>
                        {t("save")}
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
