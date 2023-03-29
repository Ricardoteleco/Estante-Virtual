import express from "express"
import { CompetitionController } from "../controller/CompetitionController"


const competitionController = new CompetitionController()
export const competitionRouter = express.Router()

competitionRouter.post("/createCompetition", competitionController.createCompetition)