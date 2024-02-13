import React from 'react'
import type { Item } from '@/types/collections'
import Image from '@/components/Image'

interface Props {
  items: Item[]
  title: string
  description: string
}

export default function LayoutGrid ({ items, title, description }: Props): JSX.Element {
  return <section className="pt-20 min-h-dvh w-[90vw] mx-auto flex flex-col items-center justify-center">
        <span className='flex flex-col items-center gap-4 mb-3'>
            <h2 className="text-4xl font-bold text-black [font-family: Montserrat, sans-serif]">{title}</h2>
            <p className="text-md text-black [font-family: Montserrat, sans-serif]">
                {description}
            </p>
        </span>
        <ul className="flex flex-col md:flex-row items-center [width:90vw] overflow-x-auto gap-2.5">
            {items.map((item, i) => (
                <li className="flex flex-col justify-center items-center gap-3 p-3" key={i}>
                    <Image item={item} id={`${i}`}/>
                </li>
            ))}
        </ul>
    </section>
}
