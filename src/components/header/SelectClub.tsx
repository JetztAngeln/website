import { ClubInfo } from "@/lib/models/club_info";
import { ChevronsUpDownIcon } from "lucide-react";
import { useEffect } from "react";

interface ClubSelectProps {
  clubs: ClubInfo[] | null;
  selectedClub: ClubInfo | null;
  setSelectedClub: (club: ClubInfo) => void;
  placeholder?: string;
  error?: any;
  isLoading?: boolean;
}

const ClubSelect: React.FC<ClubSelectProps> = ({
  clubs,
  selectedClub,
  setSelectedClub,
  placeholder = "Loading clubs...",
  error, isLoading
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
  if (isLoading) return <ClubSelect placeholder="Loading clubs..." clubs={[]} selectedClub={null} setSelectedClub={(_: ClubInfo): void => {
    throw new Error("Function not implemented.");
  }} />;

  return (
    <div className="w-full max-w-sm relative">
      <select
        className={`h-11 w-full appearance-none rounded-lg border border-gray-300  px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${selectedClub
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
          }`}
        value={selectedClub?.id ?? ""}
        onChange={(e) => {
          const club = clubs.find((c) => c.id === e.target.value);
          if (club) setSelectedClub(club);
        }}
      >
        {/* Placeholder only shown if nothing is selected */}
        {!selectedClub && (
          <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
            {placeholder}
          </option>
        )}

        {Array.isArray(clubs) ? clubs.map((club) => (
          <option key={club.id} value={club.id} className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
            {club.name}
          </option>
        )) : (
          <option>{placeholder}</option>
        )}

      </select>
      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
        <ChevronsUpDownIcon size={16} />
      </span>
    </div>
  );
};

export default ClubSelect;