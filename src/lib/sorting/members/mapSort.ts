import { ClubUserOrderByEnum } from "@/nhost-api/graphql/generated/sdks";
import { SortingState } from "@tanstack/react-table";

export default function membersMapSort(
  inputs: SortingState
): ClubUserOrderByEnum[] {
  return inputs.map((input) => {
    switch (input.id) {
      case "displayName":
        return input.desc
          ? ClubUserOrderByEnum.DisplayNameDesc
          : ClubUserOrderByEnum.DisplayNameAsc;
      case "role":
        return input.desc
          ? ClubUserOrderByEnum.RoleDesc
          : ClubUserOrderByEnum.RoleAsc;
      case "lastSeen":
        return input.desc
          ? ClubUserOrderByEnum.LastSeenDesc
          : ClubUserOrderByEnum.LastSeenAsc;
      default:
        return ClubUserOrderByEnum.DisplayNameAsc;
    }
  });
}
