import '@/src/styles/globals.css'
import '@/src/styles/reset.css'
import type { AppProps } from 'next/app'
import FuturaPT from 'next/font/local'

const FUTURA_PT = FuturaPT({
   src: [
      {
         path: '../../public/fonts/LEMONMILK-Light.otf',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../../public/fonts/FuturaPT-Demi.woff2',
         weight: '600',
         style: 'normal',
      },
      {
         path: '../../public/fonts/LEMONMILK-Bold.otf',
         weight: '700',
         style: 'normal',
      },
   ],
})

export default function App({ Component, pageProps }: AppProps) {

   return (
      <div className={['wrapper', FUTURA_PT.className].join(' ')}>
         <Component {...pageProps} />
      </div>
   )
}
