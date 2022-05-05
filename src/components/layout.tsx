import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile.jpeg'
import { NAME, SITE_TITLE } from 'bin/constants'
import styles from "@/styles/Layout.module.css";

export default function Layout(props: { children: any, home: boolean }) {
  const {children, home} = props
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <section className={styles.title}>
            <Image
              priority
              src={profilePic}
              className={styles.profilePic}
              height={70}
              width={70}
              alt={'profile image'}
            />
            <h1 className={styles.titleName}>{NAME}</h1>
          </section>
        ) : (
          <h2 >
            <Link href="/">
              <a>{NAME}</a>
            </Link>
          </h2>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}