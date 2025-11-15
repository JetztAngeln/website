import { MousePointerIcon, WaypointsIcon } from "lucide-react";
import { createTranslator, Messages } from "next-intl";

type AddWaterDescriptionType = {
    t: ReturnType<typeof createTranslator<Messages, "WatersPage">>
};

export default function AddWaterDescription({ t }: AddWaterDescriptionType) {
    return (
        t.rich('description', {
            drawTool: (chunks) => <span className="text-brand-500 dark:text-brand-400 font-bold">{chunks} <WaypointsIcon className="inline mb-1" size={16} /></span>,
            selectTool: (chunks) => <span className="text-brand-500 dark:text-brand-400 font-bold">{chunks} <MousePointerIcon className="inline mb-1" size={16} /></span>
        })
    );
}