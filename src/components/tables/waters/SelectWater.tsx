import { ClubWater } from "@/lib/models/water";
import { ChevronsUpDownIcon } from "lucide-react";
import { useEffect } from "react";

interface WaterSelectProps {
  waters: ClubWater[] | null;
  selectedWater: string | null;
  setSelectedWater: (water: string) => void;
  placeholder?: string;
  error?: any;
  isLoading?: boolean;
}

const WaterSelect: React.FC<WaterSelectProps> = ({
  waters,
  selectedWater,
  setSelectedWater,
  placeholder = "Loading waters...",
  error, isLoading
}) => {
  // Default to the first club when clubs are available
  useEffect(() => {
    if (waters && waters.length > 0 && !selectedWater) {
      setSelectedWater(waters[0].id);
    }
  }, [waters, selectedWater, setSelectedWater]);

  // Hide component if no clubs available
  if (!waters || waters.length === 0) return null;

  if (error) return <p className="text-red-500">Failed to load waters</p>;
  if (isLoading) return <WaterSelect placeholder="Loading waters..." waters={[]} selectedWater={null} setSelectedWater={(_: string): void => {
    throw new Error("Function not implemented.");
  }} />;

  return (
    <div className="w-full max-w-sm relative">
      <select
        className={`h-11 w-full appearance-none rounded-lg border border-gray-300  px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${selectedWater
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
          }`}
        value={selectedWater ?? ""}
        onChange={(e) => {
          const club = waters.find((c) => c.id === e.target.value);
          if (club) setSelectedWater(club.id);
        }}
      >
        {/* Placeholder only shown if nothing is selected */}
        {!selectedWater && (
          <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
            {placeholder}
          </option>
        )}

        {Array.isArray(waters) ? waters.map((water) => (
          <option key={water.id} value={water.id} className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
            {water.name}
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

export default WaterSelect;