import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Anvisa Med';
export const siteTitle = 'Anvisa Med';

type Props = {
  children?: ReactNode;
  title?: string;
}

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: 'easeInOut',
                  duration: 0.8,
                },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                priority
                src="/static/images/pills.svg"
                height="100%"
                width="auto"
                alt={name}
              />
              <h1 className={[utilStyles.heading2Xl, 'text-center'].join(' ')}>{name}</h1>
            </motion.div>
          </>
        ) : (
          <>

          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
