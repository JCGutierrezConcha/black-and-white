import Jimp from 'jimp'
import { nanoid } from 'nanoid'
import path from 'path'

const __dirname = import.meta.dirname
const pathFile = path.join(__dirname, `../public/images/${nanoid()}.jpeg`)

const inicio = (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'))
}

const mostrarImagen = async (req, res) => {
    try {
        const image = await Jimp.read("https://picsum.photos/1000/1000")

        const buffer = await image
            .resize(500, 500)
            .quality(60)
            .greyscale()
            .getBufferAsync("image/jpeg")

        await image.writeAsync(pathFile)
        res.header("Content-Type", "image/jpeg")
        res.send(buffer)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const guardarImagen = async (req, res) => {
    try {
        const url = req.body.url
        const image = await Jimp.read(url)
        const buffer = await image
            .resize(500, 500)
            .quality(60)
            .greyscale()
            .getBufferAsync("image/jpeg")


        await image.writeAsync(pathFile)

        return res.sendFile(path.join(__dirname, '../public/volver.html'))

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const imageController = {
    inicio,
    mostrarImagen,
    guardarImagen
}