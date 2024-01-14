import Header from "@/components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header isHeaderBackgroundVisible isSearchBarVisible></Header>
      {children}
      {/* <ResultSection></ResultSection> */}
    </section>
  );
}
