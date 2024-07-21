export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-200">
      {children}
    </section>
  );
}
