import { FC, createContext, useContext, useState } from 'react'
import { CollectedData } from '../types/user'

interface UserInfoContextType {
  onSetField: <T extends keyof CollectedData>(
    field: T,
    value: NonNullable<CollectedData[T]>
  ) => void
  collectedData: CollectedData
}

const UserInfoContext = createContext<UserInfoContextType>({
  onSetField: () => {},
  collectedData: {},
})

const BuyFlowProvider: FC = ({ children }) => {
  const [collectedData, setCollectedData] = useState<CollectedData>({})

  const onSetField: UserInfoContextType['onSetField'] = (field, value) => {
    setCollectedData((data) => ({ ...data, [field]: value }))
  }

  const value: UserInfoContextType = {
    collectedData,
    onSetField,
  }

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  )
}

export default BuyFlowProvider

export const useUserInfo = () => useContext(UserInfoContext)
