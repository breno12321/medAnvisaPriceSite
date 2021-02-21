import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
