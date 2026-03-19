import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { getCanadaDirectoryIndex } from "@/lib/canadaFacilities";
import { getDirectoryIndex } from "@/lib/stateFacilities";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://SpeechTherapistDirectories.com"),
  title: {
    default: "SpeechTherapistDirectories.com | Speech Therapist Directory",
    template: "%s | SpeechTherapistDirectories.com",
  },
  description:
    "SpeechTherapistDirectories.com is a professional, easy-to-use Speech Therapy directory helping families find local speech pathologists and services across the United States and Canada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SpeechTherapistDirectories.com | Speech Therapist Directory",
    description:
      "Trusted resource to explore and compare speech pathologists and services across North America.",
    url: "/",
    siteName: "SpeechTherapistDirectories.com",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SpeechTherapistDirectories.com logo preview",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [directory, canadaDirectory] = await Promise.all([
    getDirectoryIndex(),
    getCanadaDirectoryIndex(),
  ]);

  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8586688641645596" crossorigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <header className="w-full border-b-[3px] border-gold bg-cyan-700 text-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-[11px] font-bold tracking-[0.28em] sm:text-xs text-white hover:text-gold-soft transition-colors"
                  aria-label="SpeechTherapistDirectories.com – go to homepage"
                >
                  SpeechTherapistDirectories.com
                </Link>
                <nav className="flex items-center gap-4" aria-label="Main navigation">
                  <Link
                    href="/"
                    className="text-xs font-medium text-white/90 hover:text-gold-soft transition-colors"
                  >
                    USA
                  </Link>
                  <Link
                    href="/canada"
                    className="text-xs font-medium text-white/90 hover:text-gold-soft transition-colors"
                  >
                    Canada
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-medium text-white/90 hover:text-gold-soft transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/advertise"
                    className="inline-flex items-center rounded-full bg-teal px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Advertise
                  </Link>
                </nav>
              </div>
              <p className="ml-4 hidden max-w-xs text-right text-xs text-gold-soft sm:block">
                Trusted Speech Therapist directory for families and caregivers.
              </p>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <section
            className="w-full border-t-[3px] border-gold bg-background px-4 py-5 text-foreground/80 sm:px-6 lg:px-8"
            aria-label="Full state and city directory"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              <h2 className="text-sm font-semibold text-gold-soft">
                Full State and City Directory
              </h2>
              <p className="text-[11px] text-foreground/70">
                Crawlable internal links to every state and city page.
              </p>
              <div className="flex flex-col gap-5">
                {directory.map((state) => (
                  <div key={state.stateSlug} className="space-y-2">
                    <Link
                      href={`/${state.stateSlug}`}
                      className="text-sm font-semibold text-gold-soft hover:text-gold"
                    >
                      {state.stateName}
                    </Link>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {state.cities.map((city) => (
                        <Link
                          key={`${state.stateSlug}-${city.citySlug}`}
                          href={`/${state.stateSlug}/${city.citySlug}`}
                          className="text-[11px] text-foreground/85 hover:text-gold"
                        >
                          {city.cityName}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                {canadaDirectory.length > 0 && (
                  <>
                    <div className="space-y-2 border-t border-navy/10 pt-5">
                      <Link
                        href="/canada"
                        className="text-sm font-semibold text-gold-soft hover:text-gold"
                      >
                        Canada
                      </Link>
                    </div>
                    {canadaDirectory.map((province) => (
                      <div key={province.provinceSlug} className="space-y-2">
                        <Link
                          href={`/canada/${province.provinceSlug}`}
                          className="text-sm font-semibold text-gold-soft hover:text-gold"
                        >
                          {province.provinceName}
                        </Link>
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {province.cities.map((city) => (
                            <Link
                              key={`${province.provinceSlug}-${city.citySlug}`}
                              href={`/canada/${province.provinceSlug}/${city.citySlug}`}
                              className="text-[11px] text-foreground/85 hover:text-gold"
                            >
                              {city.cityName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </section>

          <footer className="w-full border-t border-navy/10 bg-background">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-foreground/80 sm:px-6 lg:px-8">
              <p>
                © {new Date().getFullYear()} SpeechTherapistDirectories.com. For
                informational purposes only – always verify licensing,
                certifications, and safety requirements with your local authority.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="hover:text-gold">
                  About this directory
                </Link>
                <Link href="/contact" className="hover:text-gold">
                  Contact
                </Link>
                <Link href="/privacy" className="hover:text-gold">
                  Privacy &amp; terms
                </Link>
                <Link href="/advertise" className="hover:text-gold">
                  Advertise
                </Link>
                <Link href="/advertise" className="hover:text-gold">
                  For speech pathologists
                </Link>
                <Link href="/advertise" className="hover:text-gold">
                  Featured Listing
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
