import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>My First Post</title>
            </Head>
            <h1>First Post</h1>
            <Link href="/">
                <a>Back To Home</a>
            </Link>
        </Layout>
    )
}