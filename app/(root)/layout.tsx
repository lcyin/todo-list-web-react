import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      {children}
    </main>
  );
}
