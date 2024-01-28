import { useState } from "preact/compat";
import MenuIcon from "@/components/icons/Menu.tsx";
import LinkedInIcon from "./icons/LinkedIn.tsx";
import InstagramIcon from "./icons/Instagram.tsx";
import { collections } from "@/utils/collections.ts";

export default function Navbar() {
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-dvw flex flex-wrap items-center justify-between backdrop-blur-sm mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <div class="flex flex-row gap-2 items-center py-3">
              <a
                className="mr-8 text-xl font-bold tracking-[0.15em] leading-relaxed inline-block py-2 whitespace-nowrap text-white"
                href="/"
                // style="font-family: art-nuvo, Montserrat, sans-serif"
              >
                GOON
              </a>
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-gray-300"
                href="#"
                onMouseEnter={() => setCollectionsOpen(true)}
                onClick={() => setCollectionsOpen(!collectionsOpen)}
              >
                Collections
              </a>
            </div>
            <button
              className="text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none md:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon/>
            </button>
          <ul className="hidden md:flex flex-row items-center list-none ml-auto gap-2">
              <li className="nav-item">
                <a
                  className="px-2 py-1 leading-5 flex items-center text-xs gap-1 font-bold text-gray-300 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-200/30 transform transition-all duration-300"
                  href="https://www.instagram.com/gooncouture/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon/>
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-1 flex items-center text-xs gap-1 font-bold leading-snug text-gray-300 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-200/30 transform transition-all duration-300"
                  href="https://www.linkedin.com/in/laurana-corrales-aldea-64b1232aa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon/>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div
            className={
              "flex-grow items-center md:hidden" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
          <ul className="flex flex-col list-none justify-center gap-2">
            <li className="nav-item">
                <a
                  className="px-2 py-1 flex items-center text-xs gap-1 font-bold leading-snug text-gray-300 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-200/30 transform transition-all duration-300"
                  href="https://www.instagram.com/gooncouture/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon/>
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-1 flex items-center text-xs gap-1 font-bold leading-snug text-gray-300 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-200/30 transform transition-all duration-300"
                  href="https://www.linkedin.com/in/laurana-corrales-aldea-64b1232aa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon/>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div
            className={"mx-24 flex-grow items-center" +
              (collectionsOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
            onMouseLeave={() => setCollectionsOpen(false)}
          >
          <ul className="flex flex-col list-none justify-center gap-2">
            {collections.map((collection) => (
              
              <li className="nav-item px-2 py-1 rounded-full hover:opacity-75 hover:scale-110 hover:bg-gray-200/30 transform transition-all duration-300">
                  <a
                    className="text-xs font-bold leading-snug text-gray-300"
                    href={`/collections/${collection.name}`}
                    target="_blank"
                    rel="noreferrer"
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
  );
}