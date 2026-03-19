import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About This Directory | Speech Therapy Directories",
  description:
    "Learn about SpeechTherapyDirectories.com — a trusted directory helping caregivers compare speech therapy practices and services across the US and Canada.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-us": "https://speechtherapydirectories.com/about",
    },
  },
  openGraph: {
    title: "About This Directory | Speech Therapy Directories",
    url: "/about",
    siteName: "SpeechTherapyDirectories.com",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          About us
        </p>
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">
          About This Directory
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          SpeechTherapyDirectories.com is a professional, easy-to-use directory that helps caregivers find and compare speech therapy practice options across the United States and Canada.
        </p>
      </header>

      <div className="mt-10 max-w-3xl space-y-6 text-sm text-slate-700">
        <p>
          We list verified speech therapy practices and services — so you can explore options by state and city, compare contact details and ratings, and make informed decisions. Our listings are sourced from public information and verified where possible; we encourage you to confirm certifications and quality with your state or provincial authority and to visit practices in person when possible.
        </p>
        <p>
          This site is for informational purposes only. We do not endorse any specific facility. Always verify licensing, inspections, and accreditation with the appropriate regulatory body in your area.
        </p>
        <p>
          Speech therapy practice owners can learn about featured and premium listings on our{" "}
          <Link href="/advertise" className="font-medium text-teal hover:text-teal-soft">
            Advertise
          </Link>{" "}
          page. For questions or feedback, please{" "}
          <Link href="/contact" className="font-medium text-teal hover:text-teal-soft">
            contact us
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 text-sm text-slate-600">
        <Link href="/" className="text-teal hover:text-teal-soft">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
