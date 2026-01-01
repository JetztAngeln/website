import { Check, ChevronsUpDownIcon } from "lucide-react";
import { memo, useEffect } from "react";
import type { ClubWaterFragment } from "@/nhost-api/graphql/generated/sdks";
import { Dropdown, DropdownContent, DropdownTrigger } from "../../ui/dropdown/Dropdown";
import { DropdownItem } from "../../ui/dropdown/DropdownItem";

interface WaterSelectProps {
    waters: ClubWaterFragment[] | null;
    selectedWater: string | null;
    setSelectedWater: (water: string) => void;
    placeholder?: string;
    isLoading?: boolean;
}

const WaterSelect: React.FC<WaterSelectProps> = ({
    waters,
    selectedWater,
    setSelectedWater,
    placeholder = "Loading waters...",
    isLoading,
}) => {
    useEffect(() => {
        if (waters && waters.length > 0 && !selectedWater) {
            setSelectedWater(waters[0].id);
        }
    }, [waters, selectedWater, setSelectedWater]);

    if (!waters || waters.length === 0) return null;

    if (isLoading)
        return (
            <div className="w-full max-w-sm h-11 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
        );

    return (
        <Dropdown>
            <DropdownTrigger>
                <div className="flex items-center justify-between w-full h-11 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:border-brand-300 dark:hover:border-brand-800 transition-colors">
                    <span className={`text-sm ${selectedWater ? "text-gray-800 dark:text-white/90" : "text-gray-400"}`}>
                        {waters.find(w => w.id === selectedWater)?.name || placeholder}
                    </span>
                    <ChevronsUpDownIcon size={16} className="text-gray-500 dark:text-gray-400" />
                </div>
            </DropdownTrigger>
            <DropdownContent className="w-[240px] max-h-[300px] overflow-y-auto">
                {waters.map((water) => (
                    <DropdownItem
                        key={water.id}
                        onClick={() => setSelectedWater(water.id)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    >
                        <span className="text-gray-700 dark:text-gray-200">{water.name}</span>
                        {selectedWater === water.id && <Check size={16} className="text-brand-500" />}
                    </DropdownItem>
                ))}
            </DropdownContent>
        </Dropdown>
    );
};

export default memo(WaterSelect);
