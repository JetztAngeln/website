import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SidebarProvider } from "../../context/SidebarContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { AuthProvider } from "../../lib/nhost/AuthProvider";
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Landing' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription')
  };
}

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className="dark:bg-gray-900">
        <NextIntlClientProvider>
          <ThemeProvider>
            <AuthProvider>
              <SidebarProvider>
                {children}
              </SidebarProvider>
            </AuthProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
