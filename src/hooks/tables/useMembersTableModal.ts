import { type Dispatch, type SetStateAction, useState } from "react";
import type { ClubUserRelationFragment } from "@/nhost-api/graphql/generated/sdks";
import { useModal } from "../useModal";

export type MembersTableActions = {
	edit(user: ClubUserRelationFragment): void;
	delete(user: ClubUserRelationFragment): void;
	accept(user: ClubUserRelationFragment): void;
	decline(user: ClubUserRelationFragment): void;
};

export type MembersTableModalsType = {
	selected: ClubUserRelationFragment | null;
	setSelected: Dispatch<SetStateAction<ClubUserRelationFragment | null>>;
	edit: {
		isOpen: boolean;
		openModal: () => void;
		closeModal: () => void;
		toggleModal: () => void;
	};
	del: {
		isOpen: boolean;
		openModal: () => void;
		closeModal: () => void;
		toggleModal: () => void;
	};
	accept: {
		isOpen: boolean;
		openModal: () => void;
		closeModal: () => void;
		toggleModal: () => void;
	};
	decline: {
		isOpen: boolean;
		openModal: () => void;
		closeModal: () => void;
		toggleModal: () => void;
	};
	actions: MembersTableActions;
};

export function useMembersTableModals(): MembersTableModalsType {
	const [selected, setSelected] = useState<ClubUserRelationFragment | null>(
		null,
	);

	const edit = useModal();
	const del = useModal();
	const accept = useModal();
	const decline = useModal();

	const actions = {
		edit(user: ClubUserRelationFragment) {
			setSelected(user);
			edit.openModal();
		},
		delete(user: ClubUserRelationFragment) {
			setSelected(user);
			del.openModal();
		},
		accept(user: ClubUserRelationFragment) {
			setSelected(user);
			accept.openModal();
		},
		decline(user: ClubUserRelationFragment) {
			setSelected(user);
			decline.openModal();
		},
	};

	return {
		selected,
		setSelected,
		edit,
		del,
		accept,
		decline,
		actions,
	};
}
