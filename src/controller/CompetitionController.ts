import { Request, Response } from "express"
import { CompetitionBusiness } from "../business/CompetitionBusiness"
import { CompetitionInputDTO } from "../models/Competition"

export class CompetitionController {
    private competitionBusiness = new CompetitionBusiness()

    async createCompetition(req: Request, res: Response){
        try {
            const {name, start, end} = req.body
            
            const input = new CompetitionInputDTO(name, start, end)
            await this.competitionBusiness.createCompetition(input)

            res.status(201).send({message: "Competition created successfully"})
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}