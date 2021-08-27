import IPFS, { IPFS as IPFSType } from "ipfs"
import { createContext, useContext, useEffect, useState } from "react"

interface IPFSContextInterface {
  ipfs: IPFSType
}

export const IPFSContext = createContext<IPFSContextInterface>(
  {} as IPFSContextInterface
)

export const useIPFS = () => useContext(IPFSContext)

export const IPFSProvider: React.FC = ({ children }) => {
  const [ ipfs, setIPFS ] = useState<IPFSType>({} as IPFSType)

  useEffect(() => {
    async function loadIPFS() {
      const ipfs = await IPFS.create({ repo: "./ipfs" })

      setIPFS(ipfs)
    }

    loadIPFS()
  }, [])

  return (
    <IPFSContext.Provider value={{ ipfs }}>
      {children}
    </IPFSContext.Provider>
  )
}

