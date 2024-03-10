import Head from "next/head";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Analytics } from "@/config/analytics";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  naverVerification: "061c882ab10ff10185fd0201e48f190446637aa8",
  googleVerification: "E7qaacgjDgcBw1R26pBmFLz5coNPPXcDIPRh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* 네이버 */}
        <title>{metadata.title.default}</title>
        <meta
          name="naver-site-verification"
          content={metadata.naverVerification}
        />
        <meta
          name="google-site-verification"
          content={metadata.googleVerification}
        />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.icons.icon} />

        {/* Add other meta tags, link tags, etc. as needed */}
        <Analytics />
      </Head>
      {/* 구글 */}
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/moonjjj"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Made by</span>
                <p className="text-primary">js moon</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
