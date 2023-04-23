// Função para verificar se o número de abdominais é válido
function isAbsValid(abs) {
    return abs >= 41;
}

// Função para verificar se a distância e tempo de natação são válidos
function isSwimValid(swimDistance, swimTime, diveTime) {
    return (swimDistance >= 100 && swimTime <= 60) || diveTime <= 30;
}

// Função para verificar se a altura é válida
function isHeightValid(height, gender) {
    if (gender === "male") {
        return height >= 1.70;
    } else if (gender === "female") {
        return height >= 1.60;
    }
    return false;
}

// Função para verificar se o número de repetições de barra ou tempo de barra é válido
function isBarTestValid(barReps, barSeconds, gender) {
    if (gender === "male") {
        return barReps >= 6 || barSeconds >= 15;
    } else if (gender === "female") {
        return barReps >= 5 || barSeconds >= 12;
    }
    return false;
}

// Função para verificar se a distância e tempo de corrida são válidos
function isRunValid(runDistance, runTime, gender) {
    if (gender === "male") {
        return (runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200);
    } else if (gender === "female") {
        return (runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320);
    }
    return false;
}

// Função para mostrar a mensagem em caixa alta
function showMessage(message) {
    console.log(message.toUpperCase());
}

// Função para verificar se todos os resultados do candidato são válidos
function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime) {
    const isAbsValidResult = isAbsValid(abs);
    const isSwimValidResult = isSwimValid(swimDistance, swimTime, diveTime);
    const isHeightValidResult = isHeightValid(height, gender);
    const isBarTestValidResult = isBarTestValid(barReps, barSeconds, gender);
    const isRunValidResult = isRunValid(runDistance, runTime, gender);

    return isAbsValidResult && isSwimValidResult && isHeightValidResult && isBarTestValidResult && isRunValidResult;
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11] // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
showMessage(areCandidateValid.toString());