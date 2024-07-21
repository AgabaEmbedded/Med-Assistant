export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      {children}
    </section>
  );
}
