"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../../../components/form/input/InputField";
import Label from "../../../components/form/Label";
import Button from "../../../components/ui/button/Button";
import { getProviderSignInUrl, sendMagicLink } from "./actions";

export default function SignInForm() {
    const t = useTranslations("SignIn");
    const router = useRouter();

    // State for loading and error feedback
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Handler for social provider sign-in
    const handleProviderSignIn = async (provider: "google" | "apple") => {
        setIsLoading(true);
        setError(null);
        const result = await getProviderSignInUrl(provider);

        if (result.error) {
            setError(result.error);
            setIsLoading(false);
        } else if (result.url) {
            // Redirect to the provider's sign-in page
            window.location.href = result.url;
        }
    };

    // Handler for the magic link form submission
    const handleMagicLinkSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const result = await sendMagicLink(formData);

        if (result.error) {
            setError(result.error);
            setIsLoading(false);
        } else if (result.redirect) {
            // On success, redirect to the specified page
            router.push(result.redirect);
        }
    };


    return (
        <div className="flex flex-col flex-1 lg:w-1/2 w-full">
            <div className="flex flex-col justify-center flex-1 w-full max-w-lg mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                            {t("title")}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t("subtitle")}
                        </p>
                    </div>

                    {/* Error Message Display */}
                    {error && (
                        <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-400" role="alert">
                            {error}
                        </div>
                    )}

                    <div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                            {/* GOOGLE BUTTON: Added onClick handler and disabled state */}
                            <button
                                type="button"
                                onClick={() => handleProviderSignIn("google")}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Image
                                    width={20}
                                    height={20}
                                    src="/images/brands/google.svg"
                                    alt="Google"
                                />
                                {isLoading ? t("signingIn") : t("signInWithGoogle")}
                            </button>
                            {/* APPLE BUTTON: Added onClick handler and disabled state */}
                            <button
                                type="button"
                                onClick={() => handleProviderSignIn("apple")}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Image
                                    width={21}
                                    height={24}
                                    src="/images/brands/apple.svg"
                                    alt="Apple"
                                />
                                {isLoading ? t("signingIn") : t("signInWithApple")}
                            </button>
                        </div>
                        <div className="relative py-3 sm:py-5">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                                    {t("or")}
                                </span>
                            </div>
                        </div>
                        {/* MAGIC LINK FORM: Attached the new onSubmit handler */}
                        <form onSubmit={handleMagicLinkSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <Label>
                                        Email <span className="text-error-500">*</span>{" "}
                                    </Label>
                                    <Input
                                        placeholder="info@gmail.com"
                                        type="email"
                                        name="email"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <Button
                                        className="w-full"
                                        size="sm"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? t("sendingLink") : t("signInWithEmail")}
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-5">
                            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                                {t("tos_text_pre")}{" "}
                                <Link
                                    href="/terms"
                                    className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                                >
                                    {t("tos")}
                                </Link>{" "}
                                {t("tos_text_post")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}