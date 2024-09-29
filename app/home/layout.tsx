import { TopBar } from "@/components/topbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-row">
        <div className="w-full">
          <TopBar />
          <main className="bg-amber-600 w-full mt-5 h-screen">{children}</main>
        </div>
        <div className="hidden md:block w-full ml-6 bg-blue-500 h-screen">
          xxx
        </div>
      </div>
    </section>
  );
}
