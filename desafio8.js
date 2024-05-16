const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDealunosEMedias = [alunos,medias];

function exibeNomeeNota(aluno){
    if (listaDealunosEMedias[0].includes(aluno)){
        const indice = listaDealunosEMedias[0].indexOf(aluno);

        const mediaAluno = listaDealunosEMedias[1][indice];

        console.log(`${aluno} tem média ${mediaAluno}`)

    } else {
    console.log("Aluno(a) não encontrado!")
    }
}
exibeNomeeNota("João")
exibeNomeeNota("Juliana")
exibeNomeeNota("Ana")
exibeNomeeNota("Caio")
