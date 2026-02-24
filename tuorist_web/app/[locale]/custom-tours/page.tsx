import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomTourForm from "@/components/CustomTourForm";
import { getTranslations } from "next-intl/server";

export default async function CustomToursPage() {
  const t = await getTranslations('CustomTours');
  return (
    <main className="min-h-screen relative bg-gray-50 pb-20">
      <Navbar />
      <PageHeader title={t('page_title')} bgImage="/images/custome_touer_bg.jpg"/>
      
      <section className="py-24">
        <div className="container-custom">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6 text-[#222] uppercase tracking-widest">{t('section_title')}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    {t('section_desc')}
                </p>
            </div>
            
            <CustomTourForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
