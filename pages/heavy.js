import Head from 'next/head'
import styles from '../styles/Heavy.module.css'
import {promisify} from "util";
import {randomBytes} from "crypto";

const randomBytesAsync = promisify(randomBytes)

function Heavy({ data }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p>Generated digest: {data.random}</p>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    const random = (await randomBytesAsync(5000000)).toString('base64').slice(0, 100);

    return {
        props: {
            data: {
                random
            },
        },
    }
}

export default Heavy
