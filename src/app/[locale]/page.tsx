import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Flagship } from "@/components/Flagship";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;

  return (
    <>
      <Hero locale={locale} />
      <Problem locale={locale} />
      <Services locale={locale} />
      <Industries locale={locale} />
      <Flagship locale={locale} />
      <BeforeAfter locale={locale} />
      <Process locale={locale} />
      <Projects locale={locale} />
      <WhyUs locale={locale} />
      <Testimonials locale={locale} />
      <CTA locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
