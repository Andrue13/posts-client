import { useEffect, useRef, useState } from 'react'
import MainMenu from './components/MainMenu'
import MainComponent from './components/MainComponent'
import LinkContext from './services/linkContext'
import RevalidateContext from './services/revalidateContext'

function App() {
  const [link, setLink] = useState('/')
  const revalidateRef = useRef(null)
  const [filter, setFilter] = useState('')
  // const [revalidate, setRevalidate] = useState<(() => void) | null>(null)
  return (
    <LinkContext.Provider value={[link, setLink]} >
      <RevalidateContext.Provider value={revalidateRef}>
        <MainMenu filter={filter} setFilter={setFilter} />
        <MainComponent filter={filter} />
      </RevalidateContext.Provider>
    </LinkContext.Provider>
  )
}

export default App
