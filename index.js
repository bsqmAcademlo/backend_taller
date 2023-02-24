require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.json([
        {
            id: 1,
            name: "Hoodies",
            price: 14.0,
            image: "https://res.cloudinary.com/duu1imwxs/image/upload/v1677260034/eCommerce/featured4_byc4po.png",
            category: "hoodies",
            quantity: 5,
            description:
                "Un buzo de felpa polar con cierre de cremallera y cuello alto. Es de color azul marino y tiene un forro de malla transpirable en el interior. Tiene un ajuste relajado y mangas largas con puños y dobladillo acanalados. También cuenta con bolsillos con cremallera en los lados para guardar tus objetos de valor. Es perfecto para actividades al aire libre en climas fríos.",
        },
        {
            id: 2,
            name: "Shirts",
            price: 24.0,
            image: "https://res.cloudinary.com/duu1imwxs/image/upload/v1677260034/eCommerce/featured1_vg2m7p.png",
            category: "shirts",
            quantity: 7,
            description:
                "Un suéter de lana gruesa con cuello redondo y mangas largas. Tiene un diseño de trenzas en el cuerpo y un patrón de ochos en las mangas. Es de color beige claro y tiene un ajuste relajado. Es perfecto para mantenerse abrigado y cómodo en días fríos de invierno.",
        },
        {
            id: 3,
            name: "Sweatshirts",
            price: 24.0,
            image: "https://res.cloudinary.com/duu1imwxs/image/upload/v1677260034/eCommerce/featured3_zjkkdv.png",
            category: "sweatshirts",
            quantity: 9,
            description:
                "Una sudadera con capucha de algodón suave y cepillado en el interior. Es de color gris oscuro y tiene un logotipo impreso en la parte delantera en letras grandes y blancas. Tiene un corte holgado y mangas largas con puños y dobladillo acanalados. Es ideal para hacer ejercicio al aire libre o para usar en días informales.",
        },
        {
            id: 4,
            name: "Sweatshirts 1",
            price: 30.0,
            image: "https://res.cloudinary.com/duu1imwxs/image/upload/v1677260034/eCommerce/featured2_w0pjc7.png",
            category: "sweatshirts",
            quantity: 11,
            description:
                "Un suéter de punto grueso y suave con cuello de tortuga. Es de color beige claro y tiene un patrón de ochos en el cuerpo y las mangas. Las mangas son largas y holgadas, mientras que el cuerpo tiene un ajuste más ajustado. Es perfecto para combinar con jeans o pantalones de vestir para un look casual y cómodo.",
        },
    ]).status(200);
});

app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
});
