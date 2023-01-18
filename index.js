require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.json({
        data: [
            {
                id: 1,
                name: "enero",
            },
            {
                id: 2,
                name: "febrero",
            },
            {
                id: 3,
                name: "marzo",
            },
            {
                id: 4,
                name: "abril",
            },
        ],
    }).status(200);
});

app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
});
