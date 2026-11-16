import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Servicos } from "@/components/Servicos";
import { Trabalhos } from "@/components/Trabalhos";
import { NossoStudio } from "@/components/NossoStudio";
import { Cuidado } from "@/components/Cuidado";
import { ProvaSocial } from "@/components/ProvaSocial";
import { Ambiente } from "@/components/Ambiente";
import { Contato } from "@/components/Contato";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Servicos />
        <Trabalhos />
        <NossoStudio />
        <Cuidado />
        <ProvaSocial />
        <Ambiente />
        <Contato />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
};

export default Index;
