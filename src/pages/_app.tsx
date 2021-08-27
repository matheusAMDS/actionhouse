import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

import { Web3Provider } from "containers/web3"
import { IPFSProvider } from "containers/ipfs"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Web3Provider>
        <Component {...pageProps} />  
      </Web3Provider>
    </ChakraProvider>
  )
}

export default App
