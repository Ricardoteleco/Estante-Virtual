import { CompetitionInputDTO, Competition } from "../models/Competition"
import { CompetitionDatabase } from "../data/CompetitionDatabase"
import { idGenerator } from "../services/IdGenerator"

export class CompetitionBusiness {
    private competitionDatabase = new CompetitionDatabase()

    async createCompetition (input: CompetitionInputDTO) {
        try {
            
            const id = idGenerator.generateId()
            const competition: Competition = new Competition(input.setCompetitionName(), input.setStartDate(), input.setEndDate(), id )
            await this.competitionDatabase.createCompetition(competition)

        } catch (error: any) {
            throw (error.statusCode, error.message)
    }
  }
} 