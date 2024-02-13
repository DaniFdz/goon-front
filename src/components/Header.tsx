import React, { useState } from 'react'
import MenuIcon from '@/components/icons/Menu'
import LinkedInIcon from '@/components/icons/LinkedIn'
import InstagramIcon from '@/components/icons/Instagram'
import type { Collection } from '@/types/collections'
import collectionsData from '@/data/collections.json'

const collections: Collection[] = collectionsData

export default function Navbar (): JSX.Element {
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-dvw flex flex-wrap items-center justify-between backdrop-blur-sm mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <div className="flex flex-row gap-4 items-center py-3">
              <a
                className="mr-4 text-xl font-bold tracking-[0.15em] leading-relaxed inline-block py-2 whitespace-nowrap text-black"
                href="/"
              // style="font-family: art-nuvo, Montserrat, sans-serif"
              >
                GOON
              </a>
              <button
                className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap text-gray-800"
                onMouseEnter={() => { setCollectionsOpen(true) }}
                onClick={() => { setCollectionsOpen(!collectionsOpen) }}
              >
                Portfolio
              </button>
              <a
                className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap text-gray-800"
                href="/contact"
              >
                Contacto
              </a>
            </div>
            <button
              className="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none md:hidden"
              type="button"
              onClick={() => { setNavbarOpen(!navbarOpen) }}
              name="navbarOpen"
            >
              <MenuIcon />
            </button>
            <ul className="hidden md:flex flex-row items-center list-none ml-auto gap-2">
              <li className="nav-item">
                <a
                  className="px-2 py-1 leading-5 flex items-center text-xs gap-1 font-bold text-gray-800 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-600/30 transform transition-all duration-300"
                  href="https://www.instagram.com/gooncouture/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-1 flex items-center text-xs gap-1 font-bold leading-snug text-gray-800 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-600/30 transform transition-all duration-300"
                  href="https://www.linkedin.com/in/laurana-corrales-aldea-64b1232aa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              'flex-grow items-center md:hidden' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none justify-center gap-2">
              <li className="nav-item">
                <a
                  className="px-2 py-1 flex items-center text-xs gap-1 font-bold leading-snug text-gray-800 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-600/30 transform transition-all duration-300"
                  href="https://www.instagram.com/gooncouture/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-1 flex items-center text-xs gap-1 font-bold leading-snug text-gray-800 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-600/30 transform transition-all duration-300"
                  href="https://www.linkedin.com/in/laurana-corrales-aldea-64b1232aa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div
            className={'mx-24 flex-grow items-center' +
              (collectionsOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
            onMouseLeave={() => { setCollectionsOpen(false) }}
          >
            <ul className="flex flex-col list-none justify-center gap-2">
              {collections.map((collection, i) => (

                <li key={i} className="nav-item px-2 py-1 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-600/30 transform transition-all duration-300">
                  <a
                    className="text-xs font-bold leading-snug text-gray-800"
                    href={`/collections/${collection.name}`}
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
