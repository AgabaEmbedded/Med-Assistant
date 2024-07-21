import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 py-8 px-8">
        <h1>Med Assistant</h1>
        <p>Get insights about your health with our AI assistant</p>

        <Link
          href="/chat"
          className="py-4 px-8 bg-blue-500 text-white rounded-md"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
