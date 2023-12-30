import Header from "@/components/layout/header";
import ResultSection from "@/components/result-card";

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
