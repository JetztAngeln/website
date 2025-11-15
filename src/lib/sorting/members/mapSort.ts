import { MemberSortEnum } from "@/lib/enums/MemberSortEnum";
import { SortingState } from "@tanstack/react-table";

export default function membersMapSort(inputs: SortingState): MemberSortEnum[] {
  return inputs.map((input) => {
    switch (input.id) {
      case "displayName":
        return input.desc
          ? MemberSortEnum.DISPLAY_NAME_DESC
          : MemberSortEnum.DISPLAY_NAME_ASC;
      case "role":
        return input.desc ? MemberSortEnum.ROLE_DESC : MemberSortEnum.ROLE_ASC;
      case "lastSeen":
        return input.desc
          ? MemberSortEnum.LAST_SEEN_DESC
          : MemberSortEnum.LAST_SEEN_ASC;
      default:
        return MemberSortEnum.DISPLAY_NAME_ASC;
    }
  });
}
