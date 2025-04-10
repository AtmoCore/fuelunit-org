import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">1 FU = 1 human day of continued existence.</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-10">
        Everything else is optional. This is not.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/manifesto">
          <Button variant="secondary" className="px-6 py-3 text-lg">Read the Manifesto</Button>
        </Link>
        <Link href="/model">
          <Button className="px-6 py-3 text-lg">Explore the FU Model</Button>
        </Link>
        <Link href="/calculator">
          <Button variant="outline" className="px-6 py-3 text-lg">Calculate Your FU Score</Button>
        </Link>
      </div>
      <footer className="mt-20 text-sm text-gray-500">
        © 2025 Otto Selymesi — Fuel Unit Standard
      </footer>
    </div>
  );
}
