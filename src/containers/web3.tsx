import Web3 from "web3"
import { AbiItem } from "web3-utils"
import { Contract } from "web3-eth-contract"
import { createContext, useState, useEffect, useContext } from "react"

interface Web3ContextInterface {
  loading: boolean
  web3: Web3
  account: string
  contracts: Contract[]
}

export const useWeb3 = () => {
  return useContext(Web3Context)
}

export const Web3Context = createContext<Web3ContextInterface>(
  {} as Web3ContextInterface
)

export const Web3Provider: React.FC = ({ children }) => {
  const provider = Web3.givenProvider

  const [web3, setWeb3] = useState(null)
  const [account, setAccount] = useState(null)
  const [contracts, setContracts] = useState(null)

  const [loading, setLoading] = useState(true)

  const initWeb3 = async () => {
    try {
      const fallbackUrl = "http://localhost:8545"
      const web3 = new Web3(provider || fallbackUrl)
      const accounts = await provider.request({ 
        method: 'eth_requestAccounts' 
      })
      const account = accounts[0]

      setWeb3(web3)
      setAccount(account)
      setContracts([])
      setLoading(false)
    } catch(error) {
      alert("Unable to load web3")
      console.log(error)
    }
  }

  useEffect(() => {
    initWeb3()  
  }, [])
  
  return (
    <Web3Context.Provider value={{
      loading,
      web3,
      account,
      contracts
    }}>
      {children}
    </Web3Context.Provider>
  )
}
