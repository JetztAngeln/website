"use client";

import { useSidebar } from "@/context/SidebarContext";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { QrCode } from "lucide-react";
import { useTranslations } from "next-intl";
import Button from "../ui/button/Button";

export const ClubInviteQRCodeDownload: React.FC = () => {
    const { nhost, session } = useAuth();
    const t = useTranslations("MembersJoinPage");
    const { selectedClub } = useSidebar();

    const handleQRCodeDownload = async () => {
        const headers = new Headers();
        headers.set("authorization", session?.accessToken!);

        const result = await nhost.functions.post("/get_qr_code_for_club", {
            clubId: selectedClub?.id
        }, {
            headers: headers,
        });


        const a = document.createElement("a");
        a.href = result.body as string;
        a.download = "inviteQrCode.png";
        a.click();
    };

    return (
        <Button className="mb-6" onClick={handleQRCodeDownload}>
            <QrCode></QrCode>
            {t("inviteQrCode")}
        </Button>
    );
};