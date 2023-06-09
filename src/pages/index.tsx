import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Layout.module.css'
import { Button, Image, Text, Select, Box } from '@chakra-ui/react'
import dayjs from 'dayjs'
import axios from 'axios'
import { useRouter } from "next/router";
import DateSelect from './components/dateSelect'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [date, setDate] = React.useState<Date | null>(null)

  const handleClick = () => {
    router.push('/shouldi/' + date)
  }

  const handleSelect = (e) => {
    setDate(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box border="2px" rounded="xl" padding="25px">
          <Text fontSize={52} fontWeight={"bold"} >Puis-je deployer aujourd'hui ?</Text>
        </Box>
        <Box display="flex" gap="6">
          <DateSelect onChange={handleSelect} />
          {date && (
            <Button onClick={handleClick} border="1px" borderColor="black">
              Envoyer
            </Button>
          )}
        </Box>
      </main>
    </>
  )
}
