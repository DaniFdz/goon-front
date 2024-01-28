interface Item {
    name: string;
    description?: string;
    image: string;
    collection: string;
}

interface Collection {
    name: string;
    description?: string;
}

export const collections: Collection[] = [
    {
        name: "Buba Anorex",
        description: "Este vestuario, realizado para la Drag Queen Buba Anorex, es en su enteridad creación de GOON Couture. Creado principalmente para el show El mundo del drag por Laura Collado Velado y Daniel Leira Estraviz; y posteriormente donado a Buba Anorex. El body encorsetado está hecho a medida puestos los pads de cadera y trasero, el color del diseño está basado en la colorimetría de la drag y la forma simula los trajes de los acróbatas en el circo, ensanchando la figura de la cadera y creando un efecto de cintura estrecha ya que es bailarina y debería de poder moverse con facilidad"
    },
    {
        name: "IT-Spain",
        description: "Estas son algunas de las prendas confeccionadas durante mi trabajo en IT-SPAIN. Los diseños son creación de Jose Luis Diaz Megía, director creativo y diseñador de IT-SPAIN"
    }
];

export const items: Item[] = [
    {
        name: "Buba Acróbata",
        description: "Fotografía y edición por Álvaro Panda @alvaropandaa en Instagram. Modelo Buba Anorex",
        image: "images/BubaAnorex/94483966-dd03-4f9d-9f34-9cca515f6e88.webp",
        collection: "Buba Anorex"
    },
    {
        name: "Buba Acróbata Diseño",
        description: "Diseño original",
        image: "images/BubaAnorex/0530c6a8-e233-4866-941d-2e4c83b3d899.webp",
        collection: "Buba Anorex"
    },
    {
        name: "Buba Acróbata",
        description: "Fotografía y edición por Álvaro Panda @alvaropandaa en Instagram. Modelo Buba Anorex",
        image: "images/BubaAnorex/3aa31b01-8f94-42b0-8ab0-8d2eaf162a9d.webp",
        collection: "Buba Anorex"
    },

    {
        name: "La Dosmilera Back",
        description: "Diseño conformado con tela traída de China, de estilo dosmilero. Mi participación en este look es completa en cuanto a confección. Diseño por Jose Luis Diaz Megía. Fotografía del día de pruebas por Alejandra Gradis. Modelo Dana",
        image: "images/ITSpain/7ac101ab-ed1a-424e-94a3-e6288accca11.webp",
        collection: "IT-Spain"
    },
    {
        name: "La Bacalaera Back",
        description: "Diseño principalmente conformado con tela traída desde China, de formas extravagantes pero elegantes. Mi participación en este look es completa en cuanto a confección, sin contar botas ni guantes.  Diseño por Jose Luis Diaz Megía. Fotografía del día de pruebas por Alejandra Gradis.  Modelo Gonzalo González",
        image: "images/ITSpain/b71fb644-5c29-43b5-a5c3-2f49bf0bbd47.webp",
        collection: "IT-Spain"
    },
    {
        name: "Corset de flecos",
        description: "Diseño de body encorsetado clásico de IT-SPAIN en vinilo rojo con tiras de strass rojo cosidas a mano. Mi participación en este look es la costura a mano de las tiras de strass a lo largo y ancho de todo el corsé. Diseño por Jose Luis Diaz Megía. Fotografía del día de pruebas por Alejandra Gradis. Modelo Cleo Herman-Walker",
        image: "images/ITSpain/324c9d1c-a63b-4989-8ac5-b6b291bfa312.webp",
        collection: "IT-Spain"
    },
    {
        name: "La Dosmilera",
        description: "Diseño conformado con tela traída de China, de estilo dosmilero. Mi participación en este look es completa en cuanto a confección. Diseño por Jose Luis Diaz Megía. Fotografía del día de pruebas por Alejandra Gradis. Modelo Dana",
        image: "images/ITSpain/a30ffd9a-2b6b-48de-91ce-c53e3c05378c.webp",
        collection: "IT-Spain"
    },
    {
        name: "La Bacalaera",
        description: "Diseño principalmente conformado con tela traída desde China, de formas extravagantes pero elegantes. Mi participación en este look es completa en cuanto a confección, sin contar botas ni guantes.  Diseño por Jose Luis Diaz Megía. Fotografía del día de pruebas por Alejandra Gradis.  Modelo Gonzalo González.",
        image: "images/ITSpain/c238230a-be31-4fff-89c8-a30d2aa411a3.webp",
        collection: "IT-Spain"
    },
];