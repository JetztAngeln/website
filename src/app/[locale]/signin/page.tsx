"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Input from "./../components/form/input/InputField";
import Label from "./../components/form/Label";
import Button from "../components/ui/button/Button";
// Import both server actions
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
            // window.location.href = result.url;
            console.log(result.url);
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
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <title>Google logo</title>
                                    <path d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z" fill="#4285F4" />
                                    <path d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z" fill="#34A853" />
                                    <path d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z" fill="#FBBC05" />
                                    <path d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z" fill="#EB4335" />
                                </svg>
                                {isLoading ? t("signingIn") : t("signInWithGoogle")}
                            </button>
                            {/* APPLE BUTTON: Added onClick handler and disabled state */}
                            <button
                                type="button"
                                onClick={() => handleProviderSignIn("apple")}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fill-color" width="21" height="24" viewBox="0 0 21 26" className="dark:fill-white">
                                    <title>Apple logo</title><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                </svg>
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