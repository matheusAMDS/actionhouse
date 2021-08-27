import { Heading } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ActionHouse</title>
        <meta name="description" content="An auction dapp for NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Welcome</Heading>
    </>
  )
}
