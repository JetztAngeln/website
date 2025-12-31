// Format file size in a readable way
export function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${Number.parseFloat((bytes / 1024 ** i).toFixed(2))} ${sizes[i]}`;
}

/**
 * Checks if WebAuthn (FIDO2) authentication is supported in the current browser
 *
 * WebAuthn requires:
 * 1. A secure context (HTTPS or localhost)
 * 2. The PublicKeyCredential API
 * 3. The navigator.credentials API
 *
 * This function determines if the current environment can support passwordless
 * authentication using security keys or platform authenticators (e.g., Touch ID,
 * Face ID, Windows Hello, or FIDO security keys).
 *
 * Note: Even if this returns true, the user still needs to have an authenticator
 * (biometric sensor, security key) available on their device.
 *
 * @returns {boolean} Whether WebAuthn is supported in the current environment
 */
export const isWebAuthnSupported = (): boolean => {
    return (
        globalThis.window !== undefined &&
        !!globalThis.window.PublicKeyCredential &&
        !!navigator.credentials
    );
};

export function capitalizeFirst(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
