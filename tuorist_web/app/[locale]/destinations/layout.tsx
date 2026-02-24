import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });
  
  return {
    title: t('dest_title'),
    description: t('dest_desc'),
    openGraph: {
      title: t('dest_title'),
      description: t('dest_desc'),
      url: ``,
      siteName: 'Travel Vista',
      images: [
        {
          url: '/Tours/tea.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    alternates: {
      languages: {
        'en': '/en/destinations',
        'si': '/si/destinations',
      },
    },
  };
}

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
