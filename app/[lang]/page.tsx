
// app/[lang]/page.tsx
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import LayoutHome from "@/components/layout/layoutHome";


interface HomeProps {
    params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: HomeProps) {
    const { lang } = await params;
    const dict = await getDictionary(lang, 'home');
    return (
        <>
           <LayoutHome/>
        </>
    );
}
