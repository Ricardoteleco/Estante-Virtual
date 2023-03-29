export class CompetitionInputDTO {
    private name: string
    private start: string
    private end: string
 
    constructor(name: string, start: string, end: string){
        this.name = name
        this.start = start,
        this.end = end
    } 

    public setCompetitionName(){
        return this.name
    }

    public setStartDate(){
        return this.start
    }

    public setEndDate(){
        return this.end
    }
 }

export class Competition {
    constructor(
        private name: string,
        private start: string,
        private end: string,
        private id: string
    ) { }
   
    public setName() {
        return this.name
    }
    public setDate() {
        return this.start
    }
    public setEndDate() {
        return this.end
    }
    public setId() {
        return this.id
    }
}



export type AuthenticationData = {
    id: string
}