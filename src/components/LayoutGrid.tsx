import type { Item } from "@/types/collections";

export default function LayoutGrid({ items, title }: { items: Item[], title: string }) {
    return <section className="pt-20 min-h-dvh w-[90vw] mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl text-black [font-family: Montserrat, sans-serif]">{title}</h2>
        <ul className="flex flex-col md:flex-row items-center [width:90vw] overflow-x-auto gap-2.5">
            {items.map((item, i) => (
                <li className="flex flex-col justify-center items-center gap-3 p-3">
                    <h3 className="text-lg [font-family: Montserrat, sans-serif]">
                        {item.name}
                    </h3>
                    <img
                        key={i}
                        src={item.image}
                        alt={item.name}
                    className="w-11/12 max-h-max h-max md:[height:60dvh] md:max-w-max md:w-max rounded-lg"
                    />
                </li>
            ))}
        </ul>
    </section>
}