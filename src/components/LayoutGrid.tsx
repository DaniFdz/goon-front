import type { Item } from "@/types/collections";

export default function LayoutGrid({ items }: { items: Item[] }) {
    <div className="mt-15 w-[90dvw] mx-auto flex flex-row flex-wrap z-10">
        {items.map((item, i) => (
            <img
                key={i}
                src={item.image}
                alt={item.name}
                className="max-w-[30vw] max-h-[30vw] w-full h-full"
            />
        ))}
    </div>
}