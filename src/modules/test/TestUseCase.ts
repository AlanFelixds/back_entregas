

export class TestUseCase {
    async execute(tempo: number){
        const convertData = new Date(tempo);
        console.log("Valor recebido: " + tempo);
        console.log("Conversão da data: " + convertData);
        
        const firstDay = new Date(convertData.getFullYear(), convertData.getMonth(),1).valueOf();
        const lastDay = new Date(convertData.getFullYear(), convertData.getMonth() + 1, 0).valueOf();

        
        console.log("Primeiro dia da data: " + firstDay);
        console.log("Ultimo dia da data: " + lastDay);

        const retorno = { 
            "primeiro":firstDay, 
            "ultimo": lastDay
        }

        return retorno;
    }
}