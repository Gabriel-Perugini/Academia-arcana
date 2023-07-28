const MagicaDominante = prompt("Capacidade mágica dominante (Fogo, Cura, Transformação ou Ilusão).").toLowerCase();
const habilidade = prompt("Habilidade específica do candidato (Controle de Elementos, Invocação de Criaturas Místicas, Leitura de Pergaminhos Antigos ou Feitiços de Proteção).").toLowerCase();
const Respeito = parseInt(prompt("Grau de respeito pela magia? (em uma escala de 1 a 10)."));
const Etica = prompt("Você concorda em utilizar seus poderes mágicos de forma ética? (Sim ou Não)").toLowerCase();
const Equipe = prompt("Você está disposto a trabalhar em equipe? (Sim ou Não)").toLowerCase();
const Constante = prompt("Você deseja aprender constantemente? (Sim ou Não)").toLowerCase();

if (
    (MagicaDominante === "fogo" && habilidade === "controle de elementos") ||
    (MagicaDominante === "cura" && habilidade === "feitiços de proteção") ||
    (MagicaDominante === "transformação" && Respeito >= 8) ||
    (MagicaDominante === "ilusão" && Etica === "sim" && Equipe === "sim")
) {
    alert("Parabéns! Você foi aceito como aprendiz na Academia Arcana.");
} else {
    alert("Infelizmente, você não atende aos requisitos para se tornar um aprendiz na Academia Arcana.");
}