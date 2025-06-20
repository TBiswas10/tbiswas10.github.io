import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Tirtha Biswas | Portfolio",
  description:
    "Tirtha Biswas - Aspiring Software Engineer, AI & Quantum Computing Enthusiast.",
  openGraph: {
    title: "Tirtha Biswas | Portfolio",
    description:
      "Aspiring Software Engineer, AI & Quantum Computing Enthusiast.",
  },
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E40AF" />
      </Head>
      <body className="dark:bg-black text-text font-body antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'light') {
                    // if you have a light theme, you may need to add a 'light' class
                    document.documentElement.classList.remove('dark');
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
