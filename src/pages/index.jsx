import HeroStoreScroll from "@/Components/sections/HeroStoreScroll"
import FeatureShowcase from "@/Components/sections/FeatureShowcase"
import AppGallery from "@/Components/sections/AppGallery"
import OperatorGallery from "@/Components/sections/OperatorGallery"
import DifferentialsSection from "@/Components/sections/DifferentialsSection"
import StatsSection from "@/Components/sections/StatsSection"
import PricingSection from "@/Components/sections/PricingSection"
import CtaSection from "@/Components/sections/CtaSection"
import Footer from "@/Components/layout/Footer"
import { mensuraEcommerceContent } from "@/data/content/mensura-ecommerce"
import { mensuraEcommercePlans } from "@/data/plans/mensura-ecommerce"

function Home() {
  const content = mensuraEcommerceContent

  return (
    <>
      <HeroStoreScroll
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        badge={content.hero.badge}
        productName="Mensura E-commerce"
        demoProduct="mensura-ecommerce"
        navItems={content.navItems}
      />

      <AppGallery />

      <OperatorGallery />

      <FeatureShowcase
        title="Funcionalidades de verdade, nas telas de verdade"
        subtitle="Kanban, roteirizador em tempo real e WhatsApp — da operação até a rota do motoboy."
        ids={["kanban", "roteirizador", "whatsapp"]}
        ctaLabel="Ver todas as funcionalidades"
        ctaHref="/funcionalidades"
      />

      <DifferentialsSection
        title={content.differentials.title}
        description={content.differentials.description}
        benefits={content.differentials.benefits}
        cta={content.differentials.cta}
        imageSrc={content.differentials.imageSrc}
        imageAlt={content.differentials.imageAlt}
      />

      <StatsSection
        title={content.stats.title}
        subtitle={content.stats.subtitle}
        items={content.stats.items}
      />

      <PricingSection
        title={content.pricing.title}
        subtitle={content.pricing.subtitle}
        plans={mensuraEcommercePlans}
        productSlug="mensura-ecommerce"
      />

      <CtaSection
        title={content.cta.title}
        subtitle={content.cta.subtitle}
      />

      <Footer />
    </>
  )
}

export default Home
