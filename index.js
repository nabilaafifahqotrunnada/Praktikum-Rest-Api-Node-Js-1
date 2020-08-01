const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body

    let volume = panjang * lebar * tinggi
    let luaspermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body

    let volume = sisi ** 3
    let luaspermukaan = 6 * (sisi ** 2)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) // mengambil nilai jarijari dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body

    let volume = 3.14 * (jarijari ** 2) * tinggi
    let luaspermukaan = 2 * 3.14 * jarijari * (jarijari + tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) // mengambil nilai jari-jari dari body

    let volume = 4 / 3 * 3.14 * (jarijari ** 3)
    let luaspermukaan = 4 * 3.14 * (jarijari ** 2)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kerucut" dengan method POST
app.post("/kerucut", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) // mengambil nilai jarijari dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body

    let volume = 1/3 * 3.14 * (jarijari ** 2) * tinggi
    let luaspermukaan = 3.14 * jarijari * (jarijari + (Math.sqrt(tinggi ** 2 + jarijari ** 2)))

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})