import { createNhostClient } from "@nhost/nhost-js";
import { getTranslations } from "next-intl/server";
import PageBreadcrumb from "../../../../components/common/PageBreadCrumb";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Club" });

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
    };
}

export default async function Club() {
    const nhost = createNhostClient();
    const session = nhost.getUserSession();

    return (
        <div>
            <PageBreadcrumb pageTitle="Vereinsverwaltung" />
            <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
                <div className="mx-auto w-full max-w-[630px] text-center">
                    <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
                        In Arbeit
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                        Guten Tag {session?.user?.displayName.split(" ")[0]},
                        leider ist diese Seite noch in Arbeit. Wir bitten um
                        dein Verständnis. Solltest du bereits Wünsche haben, die
                        auf dieser Seite erscheinen sollen, lass es uns doch
                        gerne wissen :)
                    </p>
                </div>
            </div>
        </div>
    );
}
