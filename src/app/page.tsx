import Image from "next/image";
import localFont from 'next/font/local'
import { Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa6"; 
// Font files can be colocated inside of `pages`
const Simonetta = localFont({
  src: [
    {
      path: './fonts/Simonetta-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Simonetta-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Simonetta-Black.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Simonetta-BlackItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})
const SimonettaItalic = localFont({
  src:'./fonts/Simonetta-BlackItalic.ttf'
})
const laries = localFont({
  src:'./fonts/laries.otf'
})
export default function Home() {
  return (
    <div className=" grid grid-rows-[275px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className=" bg-[#FED5B5] p-12 rounded-[30px] flex flex-row justify-between items-center">
        <div>
          <h1 className={laries.className + ' text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px]' }>Bread So Good,</h1>
          <h1 className={SimonettaItalic.className + ' text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] text-[#2D8077]' }>It’s a Whole Vibe!</h1>
        </div>
        {/* <Image
          src="/funky-buns-logo.png"
          alt="Funky Buns Logo"
          width={275}
          height={275}
        /> */}
      </header>
      <main className=" bg-[#FEAB82] p-6 sm:p-8 md:p-10 lg:p-12 rounded-[30px] flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            src="/funky-buns-menu-12-3-24.png"
            alt="Funky Buns Menu"
            width={600}
            height={500}
          />
        </div>
      </main>
      <footer className="bg-[#CD561D] p-8 rounded-[30px] text-[#FEE7D5] row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/people/Funky-Buns-Sourdough-Co/61556670928535/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            aria-hidden
            fontSize='20px'
          >
            <FaFacebook />
          </Icon>
          Facebook
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/funkybunssourdough/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            aria-hidden
            fontSize='20px'
          >
            <FaInstagram />
          </Icon>
          Instagram
        </a>
      </footer>
    </div>
  );
}
