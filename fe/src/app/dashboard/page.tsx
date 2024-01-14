import BaseMap from "@/components/map";

export default function Home() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center z-0">
      {/* <Header isHeaderBackgroundVisible isSearchBarVisible></Header> */}
      <BaseMap></BaseMap>
    </section>
  );
}
