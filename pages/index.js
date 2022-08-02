import Head from "next/head";
import Image from "next/image";
import Card from "../modules/card";
import PortfolioCard from "../modules/portfolio-card";

export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Jim Odelid - Utvecklare</title>
        <meta
          name="description"
          content="Är du på jakt efter en ny hemsida och/eller mobilapp för ditt bolag? Då har du träffat rätt. Titta in på sidan för att skapa kontakt."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full">
        <header className="max-w-full pt-20 pb-40 text-center">
          <div className="flex justify-center">
            <Image
              className="rounded-full max-w-full transition ease-in-out duration-1000 hover:scale-75"
              src="/logos/logo.png"
              width="300"
              height="300"
            />
          </div>
          <h1 className="text-5xl mt-2 mb-2 font-bold transition-all ease-in-out delay-150 duration-300">
            Jim Odelid
          </h1>
          <h3 className="text-md sm:text-xl">
            Apputvecklare | Webbutvecklare | Designer
          </h3>
        </header>
        <div className="max-w-full bg-purple-200 py-24 skew-y-6 shadow-inner flex  justify-center">
          <div className="sm:flex sm: max-w-5xl -skew-y-6">
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                className="p-5 max-w-sm profile-pic"
                alt="Jim Odelid"
                src="/profile2.jpg"
              />
            </div>
            <div className="w-full sm:w-1/2 text-center flex justify-center items-center sm:ml-5">
              <div>
                <h2 className="w-full text-3xl uppercase font-semibold pt-10">
                  Om mig
                </h2>
                <p className="text-lg py-4 px-5">
                  Jag är en mjukvaruingenjör med meritlista inom
                  supportbranschen. Jag har en passion för människor och älskar
                  att ta itu med unika problem. Som en erfaren utvecklare och
                  designer drivs jag av att hjälpa mina klienter med att se sin
                  potential i sin nystartade eller befintliga verksamhet med
                  hjälp av mina tjänster. <br /> Jag tar hänsyn till alla dina
                  önskemål samt bidrar med lösningar och nytänkande till ett
                  förmånligt pris.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 sm:p-10 md:p-20 pb-16">
          <div className="text-center py-5 pt-16 sm:py-10">
            <h2 className="uppercase font-semibold text-3xl">Kompetenser</h2>
            <p className="text-lg">
              Jag har många kompetenser men dessa har högst fokus hos mig.
            </p>
          </div>
          <div className="p-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 sm:gap-5 overflow-x-hidden max-w-5xl m-auto">
            <Card
              background="bg-blue-300"
              image="/logos/flutter.png"
              title="Flutter"
              text="För utveckling mot alla plattformar så som PC, Mobil och Web. Baseras på språket dart."
            />
            <Card
              background="bg-black"
              image="/logos/nextjs.webp"
              title="Next.JS"
              text="För utveckling mot webb och API, enligt mig en förbättrad och förenklad variant av React.JS."
            />
            <Card
              background="bg-orange-400"
              image="/logos/fb.png"
              title="Firebase"
              text="Molnlösning med Databas, lagring, authentisering och notifikationer med mera."
            />
            <Card
              background="bg-red-400"
              image="/logos/hjc.png"
              title="HTML/CSS/JS"
              text="Standard ramverk för att strukturera, styla och manipulera information och innehåll på webben."
            />
          </div>
          <hr className="w-1/5 border m-auto my-12 border-gray-300 transition ease-in-out duration-1000 hover:scale-150" />
          <div className="text-center">
            <h4 className="text-xl pb-2">
              Nämnvärda kompetenser med mindre fokus
            </h4>
            <p>
              MySQL | MariaDB | Supabase | PostgreSQL | MongoDB | React | Vue |
              PHP | React Native | Ionic
            </p>
          </div>
        </div>
        <div className="max-w-full -skew-y-6 bg-purple-200 p-5 sm:p-10 md:p-20 my-10 shadow-inner">
          <div className="skew-y-6 text-center py-10">
            <h2 className="font-semibold text-4xl">PORTFÖLJ</h2>
            <p className="text-lg mb-10">
              Projekt jag hanterat själv eller varit delaktig i för att nå en
              färdig basis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-hidden max-w-5xl m-auto">
              <PortfolioCard
                image="/logos/vsupport.png"
                title="vSupport"
                text="Support App med öppettider, driftstörning, telefon, chatt och fler kommande funktioner."
                appstore="https://apps.apple.com/se/app/vsupport/id1627177919"
                playstore="https://play.google.com/store/apps/details?id=com.vendolink.vsupport"
              />
              <PortfolioCard
                image="/logos/revolutioab.png"
                title="Revolutio AB"
                text="Webbutik för en cykelhandlare som integrerat med POS, baserat på Prestashop plattformen."
                weblink="https://revolutioab.se"
              />
              <PortfolioCard
                image="/logos/jsskylift.png"
                title="JS Skylift"
                text="Enkel hemsida för uthyrning av skylift med integrerad adminpanel för egenhantering."
                weblink="http://jsskylift.se"
              />
              <PortfolioCard
                image="/logos/jc.png"
                title="joChat"
                text="Chattprojekt med Flutter, inkluderar komplett användarhantering och live-feed för meddelanden."
                demolink="https://jochat-ea666.web.app/#/"
                gitlink="https://github.com/jimodelid/jochat"
              />
            </div>
          </div>
        </div>
        <div className="my-24 text-center">
          <h2 className="text-4xl font-semibold">TA KONTAKT</h2>
          <p className="text-lg">
            Du når mig enklast på någon av dessa plattformar.
          </p>
          <hr className="w-1/5 border m-auto my-10 border-gray-300 transition ease-in-out duration-1000 hover:scale-150" />
          <div className="grid grid-cols-3 gap-5 contact-links max-w-5xl m-auto">
            <a target="blank" href="https://www.linkedin.com/in/jim-sundqvist/">
              <img
                className="transition max-w-full ease-in-out duration-1000 hover:scale-110"
                src="/logos/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a target="blank" href="https://github.com/jimodelid">
              <img
                className="transition max-w-full ease-in-out duration-1000 hover:scale-110"
                src="/logos/github.png"
                alt="github"
              />
            </a>
            <a target="blank" href="mailto:jim.odelid@gmail.com">
              <img
                className="transition max-w-full ease-in-out duration-1000 hover:scale-110"
                src="/logos/mail.png"
                alt="mail"
              />
            </a>
          </div>
        </div>
      </main>
      <footer className="max-w-full bg-black opacity-80 p-20 shadow-inner text-center text-white">
        <span>
          Copyright 2022 &copy; Jim Odelid <br /> All rights reserved.
        </span>
      </footer>
    </div>
  );
}
