import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Nextjs</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-128.png"
        />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from the server- API endpoints */}
          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
