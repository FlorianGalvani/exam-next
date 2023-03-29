import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import dayjs from 'dayjs'
require('dayjs/locale/fr')
dayjs.locale('fr');

export default function App({ Component, pageProps }: AppProps) {
  return (<ChakraProvider><Component {...pageProps} /></ChakraProvider>)
}
