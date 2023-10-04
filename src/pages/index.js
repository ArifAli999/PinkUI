import Image from 'next/image'
import { Inter } from 'next/font/google'
import DateBoxes from '../../components/Header/DateBoxes';
import Portal from '../../components/Portal/Portal';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row gap-10 justify-between p-12 w-full bg-primary-pink ${inter.className}`}
    >

      <DateBoxes />

      <Portal />


    </main>
  )
}
