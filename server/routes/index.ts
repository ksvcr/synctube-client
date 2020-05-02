import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
    res.send({ response: 'I am alive' }).status(200)
})

module.exports = router
