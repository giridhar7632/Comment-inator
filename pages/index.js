import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Comment-inator</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Comment-inator</h1>
        <button onClick={(e) => auth.signinWithGitHub()}>signIn</button>
        {auth?.user && <button onClick={(e) => auth.signout()}>signOut</button>}
        <div>{auth?.user?.email}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://comment-inator.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/icon.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
