export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="min-h-screen">{children}</section>;
}
