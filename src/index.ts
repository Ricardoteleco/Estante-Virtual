import { Request, Response } from "express"
import app from './app'
import { competitionRouter } from "./router/CompetitionRouter"


app.use("/competition", competitionRouter)