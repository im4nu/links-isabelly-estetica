import { LinkCard } from "@/components/Card";
import { LinkCards, Services } from "../data";
import Image from "next/image";
import { Carrossel } from "@/components/Carrossel";
import ArrowRight from "../public/assets/icons/arrow-right.svg";

import Avatar from "../public/assets/images/bell-avatar.png";

export default function Home() {
  return (
    <main className="w-screen h-full gradient-main font-nunito">
      <section>
        {LinkCards.map((item) => (
          <LinkCard
            key={item.name}
            title={item.name}
            label={item.label}
            bg={item.bg}
            link={item.link}
            icon={item.logo}
            photo={item.image}
          />
        ))}
      </section>

      <section className="flex flex-col w-screen items-center text-center gap-6 mt-12">
        <Image
          height={100}
          width={100}
          src={Avatar}
          alt="Imagem de pergil Isabelly"
        />
        <h1 className="font-main text-gray-900 text-3xl">Isabelly Freitas</h1>
        <p className="font-light px-6">
          {" "}
          <span className="text-main font-main text-3xl">D</span> escubra uma
          experiência única de relaxamento e rejuvenescimento em nosso ambiente
          especialmente projetado para elevar sua saúde e bem-estar.
        </p>
        <Carrossel />
      </section>

      <section className="flex w-screen flex-col bg-service bg-no-repeat bg-cover items-center text-center -mt-16 py-32 gap-6">
        <h2 className="px-6">
          Trabalhamos com{" "}
          <span className="text-main font-bold">
            {" "}
            agendamento e tratamentos presenciais{" "}
          </span>
        </h2>

        <div className="flex flex-col justify-start">
          {Services.map((item) => (
            <div key={item} className="flex my-2 gap-2">
              <Image alt="Seta para direita" src={ArrowRight} />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <p className="px-6">
          {" "}
          <span className="text-main font-bold">Agende agora</span> sua sessão e
          sinta a diferença desde o primeiro momento.
        </p>

        <button className="flex items-center bg-white text-main px-4 py-2 rounded-lg font-semibold">
          Agendar Agora
        </button>
      </section>

      <section className="w-screen justify-center items-center py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7268073553146!2d-39.280859524061945!3d-7.04135786899449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a3d3a8289529af%3A0xcda5cf981b191a2a!2sR.%20Zuli%20Morais%2C%201%20-%20Mte.%20Neco%2C%20Cariria%C3%A7u%20-%20CE%2C%2063220-000!5e0!3m2!1spt-BR!2sbr!4v1682386582101!5m2!1spt-BR!2sbr"
          width="90%"
          height="300"
          loading="lazy"
          style={{ borderRadius: 8, marginInline: "5%" }}
        ></iframe>
      </section>
    </main>
  );
}
