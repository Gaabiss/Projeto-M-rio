//declarar constantes
const player1 = {
    NOME: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    PONTOS: 0,

}

const player2 = {
    NOME: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    PONTOS: 0,

}

//constantes declaradas

//lógica de dados de 6 lados

async function rollDice(){
    //corpo da função
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let result
    switch(true){
        case random < 0.33:
        result = "RETA"
        break;
        
        case random < 0.66 :
        result = "CURVA"
        break;

        default:
        result = "CONFRONTO"
    }
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName}🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
        
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
         console.log(`🏁Rodada${round}`);
         
         //sortear bloco
         let block = await getRandomBlock()
         console.log(`Bloco:${block}`); 
    

        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        let TotaltestSkill1 = 0
        let TotaltestSkill2 = 0

        if(block == "RETA"){
        TotaltestSkill1 = diceResult1 + character1.Velocidade;
        TotaltestSkill2 = diceResult2 + character2.Velocidade;
        await logRollResult(character1.NOME,
            "velocidade",
            diceResult1,
            character1.Velocidade
            )
            await logRollResult(character1.NOME,
            "velocidade",
            diceResult2,
            character2.Velocidade)
        }
            if(block == "CURVA"){
            TotaltestSkill1 = diceResult1 + character1.Manobrabilidade;
            TotaltestSkill2 = diceResult2 + character2.Manobrabilidade;
            await logRollResult(character1.NOME,
            "velocidade",
            diceResult1,
            character1.Manobrabilidade)

            await logRollResult(character1.NOME,
                "velocidade",
                diceResult2,
                character2.Manobrabilidade)

            }




                if(block == "CONFRONTO"){
                    let powerRestul1 = diceResult1 + character1.Poder
                    let powerRestul2 = diceResult2 + character2.Poder

                
                }
                if (TotaltestSkill1 > TotaltestSkill2){
                    console.log (`${character1.NOME} Marcou um ponto`)
                    character1.PONTOS++                    
                } else if (TotaltestSkill2 > TotaltestSkill1) {
                    console.log (`${character2.NOME} Marcou um ponto`);
                    character2.PONTOS++;
                }
                console.log("--------------------------------------------")
    }
}

(async function main(){
    //ela quem vai chamar as outras funções
    //do jeito que está, ela está como alto invocável
    console.log(`🏁🚨🏁Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
})();

