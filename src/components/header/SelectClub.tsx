import { Check, ChevronsUpDownIcon } from "lucide-react";
import { memo, useEffect } from "react";
import type { ClubForUserFragment } from "@/nhost-api/graphql/generated/sdks";
import { Dropdown, DropdownContent, DropdownTrigger } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

interface ClubSelectProps {
    clubs: ClubForUserFragment[] | null;
    selectedClub: ClubForUserFragment | null;
    setSelectedClub: (club: ClubForUserFragment) => void;
    placeholder?: string;
    error?: unknown;
    isLoading?: boolean;
}

const ClubSelect: React.FC<ClubSelectProps> = ({
    clubs,
    selectedClub,
    setSelectedClub,
    placeholder = "Loading clubs...",
    error,
    isLoading,
}) => {
    // Default to the first club when clubs are available
    useEffect(() => {
        if (clubs && clubs.length > 0 && !selectedClub) {
            setSelectedClub(clubs[0]);
        }
    }, [clubs, selectedClub, setSelectedClub]);

    // Hide component if no clubs available
    if (!clubs || clubs.length === 0) return null;

    if (error) return <p className="text-red-500">Failed to load clubs</p>;
    if (isLoading)
        return (
            <div className="w-full max-w-sm h-11 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
        );

    return (
        <Dropdown>
            <DropdownTrigger>
                <div className="flex items-center justify-between w-full h-11 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-brand-300 dark:hover:border-brand-800 transition-colors">
                    <span className={`text-sm ${selectedClub ? "text-gray-800 dark:text-white/90" : "text-gray-400"}`}>
                        {selectedClub ? selectedClub.name : placeholder}
                    </span>
                    <ChevronsUpDownIcon size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
            </DropdownTrigger>
            <DropdownContent className="w-[240px] max-h-[300px] overflow-y-auto">
                {clubs.map((club) => (
                    <DropdownItem
                        key={club.id}
                        onClick={() => setSelectedClub(club)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    >
                        <span className="text-gray-700 dark:text-gray-200">{club.name}</span>
                        {selectedClub?.id === club.id && <Check size={16} className="text-brand-500" />}
                    </DropdownItem>
                ))}
            </DropdownContent>
        </Dropdown>
    );
};

export default memo(ClubSelect);
