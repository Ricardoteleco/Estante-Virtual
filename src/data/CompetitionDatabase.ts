import { CustomError } from "../error/customError"
import { Competition } from "../models/Competition"
import { BaseDatabase } from "./BaseDataBase"

export class CompetitionDatabase extends BaseDatabase{

    async createCompetition (competition: Competition){
        try {
            await CompetitionDatabase.connection("Competition").insert(competition)
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}