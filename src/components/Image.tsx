import React, { useEffect, useState } from 'react'
import type { Item } from '@/types/collections'

interface ImageProps {
  item: Item
  id: string
}

interface Size {
  width: number
  height: number
}

export default function ImageComponent ({ item, id }: ImageProps): JSX.Element {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 })
  const handleResize = (): void => {
    const imageElement = document.querySelector(`#img-${id}`)
    if (imageElement !== null) {
      setSize({
        width: imageElement.clientWidth,
        height: imageElement.clientHeight
      })
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
  }, [item.image])

  return (
        <>
            <div className="relative block md:hidden w-full h-full">
                <span className="flex flex-col items-center mb-2">
                    <h3 className="text-xl font-bold [font-family: Montserrat, sans-serif] text-black">
                        {item.name}
                    </h3>
                    <p className="text-md [font-family: Montserrat, sans-serif] text-black w-full">
                        {item.description}
                    </p>
                </span>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-lg"
                />
            </div>

            <div className="group hidden md:block relative w-full h-full hover:scale-90 transition-all duration-300 ease-in-out">
                <img
                    id={`img-${id}`}
                    src={item.image}
                    alt={item.name}
                    className="inset-0 w-11/12 max-h-max h-max md:[height:60dvh] md:max-w-max md:w-max rounded-lg z-9 group-hover:scale-110 group-hover:object-fill group-hover:blur-sm transition-all duration-300 ease-in-out"
                    onLoad={handleResize}
                />
                <span
                    className="absolute inset-0 rounded-lg z-10 bg-black opacity-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300 ease-in-out flex flex-col justify-around items-start"
                    style={{ width: `${size.width}px`, height: `${size.height}px` }}
                ></span>
                <div className="absolute px-3 py-2 inset-0 rounded-lg z-10  opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out flex flex-col justify-around items-center ">
                    <h3 className="text-xl font-bold [font-family: Montserrat, sans-serif] text-white">
                        {item.name}
                    </h3>
                    <p className="text-md [font-family: Montserrat, sans-serif] text-white">
                        {item.description}
                    </p>
                </div>
            </div>
        </>
  )
}
