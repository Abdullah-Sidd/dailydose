import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import {DailydoseProvider} from '../context/DailydoseContext'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/router'
import 'react-quill/dist/quill.snow.css';

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  }, [])
  return (
    <DailydoseProvider>
      <LoadingBar color='#f11946'
  progress={progress}
  waitingTime = {400}
  onLoaderFinished={() => setProgress(0)}/>
    <Component {...pageProps} />
   </DailydoseProvider>
  )
}

export default MyApp
