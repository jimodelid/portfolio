import Head from "next/head";
import Image from "next/image";
import Card from "../modules/card";
import PortfolioCard from "../modules/portfolio-card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jim Odelid - Utvecklare</title>
        <meta
          name="description"
          content="Är du på jakt efter en ny hemsida och/eller mobilapp för ditt bolag? Då har du träffat rätt. Titta in på sidan för att skapa kontakt."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="pt-20 pb-40 text-center">
          <div className="flex justify-center">
            <Image
              className="rounded-full transition ease-in-out duration-1000 hover:scale-75"
              src="/logos/logo.png"
              width="300"
              height="300"
            />
          </div>
          <div className="text-5xl mt-6 mb-2 font-bold transition-all ease-in-out delay-150 duration-300">
            Jim Odelid
          </div>
          <div className="text-xl">
            Apputvecklare | Webbutvecklare | Designer
          </div>
        </div>
        <div className="bg-purple-200 py-24 px-10 skew-y-6 shadow-inner flex justify-center">
          <div className="sm:flex  max-w-5xl -skew-y-6">
            <div className="w-full sm:w-1/2 flex justify-center">
              <Image
                className="rounded-full transition ease-in-out duration-1000 hover:scale-75"
                src="/profile_pic.webp"
                width="400"
                height="600"
              />
            </div>
            <div className="w-full sm:w-1/2 text-center flex justify-center items-center sm:ml-5">
              <div>
                <div className="w-full text-3xl uppercase font-semibold pt-10">
                  Om mig
                </div>
                <div className="text-lg py-4 sm:py-10 sm:px-5">
                  Jag är en mjukvaruingenjör med meritlista inom
                  supportbranschen. Jag har en passion för människor och älskar
                  att ta itu med unika problem. Som en erfaren utvecklare och
                  designer drivs jag av att hjälpa dem jag arbetar med att se
                  sin potential i sin nystartade eller befintliga verksamhet med
                  hjälp av mina tjänster.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-20 pb-36">
          <div className="text-center py-16">
            <div className="uppercase font-semibold text-3xl">Erfarenhet</div>
            <div className="text-lg">
              Jag har många erfarenheter men dessa har högst fokus hos mig.
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-5">
            <Card
              background="bg-blue-300"
              image="/logos/flutter.png"
              title="Flutter"
              text="För utveckling mot alla plattformar så som PC, mobil och Web, baseras på språket dart."
            />
            <Card
              background="bg-black"
              image="/logos/nextjs.webp"
              title="Next.JS"
              text="För utveckling mot webb och API, enligt mig en förbättrad variant av React.JS."
            />
            <Card
              background="bg-orange-400"
              image="/logos/fb.png"
              title="Firebase"
              text="Molnlösning med Databas, lagring, authentisering och notifikationer med mera."
            />
            <Card
              background="bg-purple-800"
              image="/logos/ai.png"
              title="Adobe Illustrator"
              text="Grafiskt designverktyg som gör arbetet enklare för avancerade design behov."
            />
            <Card
              background="bg-blue-400"
              image="/logos/ps.png"
              title="Photoshop"
              text="Bildredigeringsverktyg för både lätt och avancerad redigering av bilder och logotyper."
            />
            <Card
              background="bg-orange-400"
              image="/logos/html.webp"
              title="HTML"
              text="Standard ramverk för att strukturera information på webben."
            />
            <Card
              background="bg-blue-500"
              image="/logos/css.webp"
              title="CSS"
              text="Standard designsspråk för att manipulera innehåll, färger och text på webben."
            />
            <Card
              background="bg-orange-300"
              image="/logos/js.webp"
              title="Javascript"
              text="Standard språk för många ramverk samt ger funktioner på webben som inte finns i vanliga fall."
            />
          </div>
        </div>
        <div className="-skew-y-6 bg-purple-200 p-20 my-10 shadow-inner">
          <div className="skew-y-6 text-center py-10">
            <div className="font-semibold text-4xl mb-10">Portfolio</div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
              <PortfolioCard
                image="/logos/vsupport.png"
                title="vSupport"
                text="Support App med öppettider, driftstörning, telefon och chatt och fler kommande funktioner."
                appstore="https://apps.apple.com/se/app/vsupport/id1627177919"
                playstore="https://play.google.com/store/apps/details?id=com.vendolink.vsupport"
              />
            </div>
          </div>
        </div>
        <div className="my-24 text-center">
          <div className="text-4xl font-semibold">Ta kontakt</div>
          <hr className="w-1/5 border m-auto my-10 border-gray-300 transition ease-in-out duration-1000 hover:scale-150" />
          <div className="grid grid-cols-3 gap-5 contact-links">
            <a target="blank" href="https://www.linkedin.com/in/jim-sundqvist/">
              <img
                className="transition ease-in-out duration-1000 hover:scale-110"
                src="/logos/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a target="blank" href="https://github.com/jimodelid">
              <img
                className="transition ease-in-out duration-1000 hover:scale-110"
                src="/logos/github.png"
                alt="github"
              />
            </a>
            <a target="blank" href="mailto:jim.odelid@gmail.com">
              <img
                className="transition ease-in-out duration-1000 hover:scale-110"
                src="/logos/mail.png"
                alt="mail"
              />
            </a>
          </div>
        </div>
        <div className="bg-black opacity-80 p-20 shadow-inner text-center text-white">
          Copyright 2022 &copy; Jim Odelid - All rights reserved.
        </div>
      </main>
    </div>
  );
}
