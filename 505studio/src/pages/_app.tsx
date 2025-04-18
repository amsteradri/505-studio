import "@/styles/globals.css";
import "@/styles/ShinyText.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
