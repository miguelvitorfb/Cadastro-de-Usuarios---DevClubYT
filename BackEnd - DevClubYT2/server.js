import express from 'express'
import pkg from '@prisma/client'
const { PrismaClient } = pkg
import cors from 'cors'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())
app.use(cors())

app.get("/usuarios", async (req, res) => {

    try {
        const users = await prisma.user.findMany()

        res.status(200).send(users)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

app.post("/usuarios", async (req, res) => {

    try {
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })


        res.status(200).send(req.body)
    }
    catch (e) {
        res.status(400).send(e)
    }

})

app.put("/usuarios/:id", async (req, res) => {
    try {
        await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })

        res.status(200).send({ message: "Usuário editado" })
    }
    catch (e) {
        res.status(400).send(e)
    }
})

app.delete("/usuarios/:id", async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        })

        res.status(200).send({ message: "Usuário deletado" })
    }
    catch (e) {
        res.status(400).send(e)
    }
})

app.listen(3000, () => {
    console.log("Servidor está rodando")
})



