import { TopBar } from "@/components/topbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-row w-full">
        <div className="w-full md:w-3/4">
          <TopBar />
          <main className="w-full mt-5 h-screen">{children}</main>
        </div>
        <div className="hidden md:flex w-1/4 ml-6 h-screen">xxx</div>
      </div>
    </section>
  );
}
