import AcceptNewJoinerModal from "@/components/ui/modal/AcceptNewJoinerModal";
import DeclineNewJoinerModal from "@/components/ui/modal/DeclineNewJoinerModal";
import DeleteUserModal from "@/components/ui/modal/DeleteUserModal";
import EditUserRoleModal from "@/components/ui/modal/EditUserRoleModal";
import type { MembersTableModalsType } from "@/hooks/tables/useMembersTableModal";

export default function MembersModals({
    modals,
    clubId,
    onSuccess,
}: Readonly<{
    modals: MembersTableModalsType;
    clubId: string | null | undefined;
    onSuccess: () => void;
}>) {
    return (
        <>
            {/* Edit User Modal */}
            <EditUserRoleModal
                isOpen={modals.edit.isOpen}
                closeModal={modals.edit.closeModal}
                selectedUserClubRelation={modals.selected ?? null}
                onSuccess={onSuccess}
            />
            {/* Delete User Modal */}
            <DeleteUserModal
                isOpen={modals.del.isOpen}
                closeModal={modals.del.closeModal}
                selectedUserClubRelation={modals.selected ?? null}
                onSuccess={onSuccess}
                clubId={clubId || ""}
            />
            {/* Accept New Joiner Modal */}
            <AcceptNewJoinerModal
                isOpen={modals.accept.isOpen}
                closeModal={modals.accept.closeModal}
                selectedUserClubRelation={modals.selected ?? null}
                onSuccess={onSuccess}
                clubId={clubId || ""}
            />
            {/* Decline New Joiner Modal */}
            <DeclineNewJoinerModal
                isOpen={modals.decline.isOpen}
                closeModal={modals.decline.closeModal}
                selectedUserClubRelation={modals.selected ?? null}
                onSuccess={onSuccess}
                clubId={clubId || ""}
            />
        </>
    );
}
