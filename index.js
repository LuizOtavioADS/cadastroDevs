
 //função para que, ao clicar no botão, uma nova Label seja criada
 function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    
    return label
}

//função para criar inputs, para os usuários conseguirem add uma nova tecnologia e seu tempo de experiência na mesma
function createInput(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

//criando a variável do botão "Adicionar nova Tencologia"
const addTechBtn = document.getElementById('addTechBtn')

//criando var do formulário
const form = document.getElementById('devForm')

//Array auxiliar
const developers = []

//Número de linhas de tecnologias
let inputRows = 0

//Evento para dar ação ao botão
addTechBtn.addEventListener('click', function(ev){
    //Guardando o valor da <ul> em uma variável
    const stackInputs = document.getElementById('stackInputs')

    //Criando uma <li> dentro da <ul> 
    const newRow = document.createElement('li')

    //Index para cada linha adicionada
    const rowIndex = inputRows
    inputRows++

    //Para cada elemento criado, um novo id será atribuído
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    //Criando a label para aparecer junto com o input da nova tecnologia, usando a função criada para adicionar uma nova label e passando seus respectivos parâmetros
    const techNameLabel = createLabel('Nome: ', 'techName- ' + rowIndex)

    //Criando o novo input, utilizando a função criada lá no início do código
    const techNameInput = createInput('techName- ' + rowIndex, null, 'techName')
    
    //Usando o método append para guardar os elementos criados, dentro das 'li' e depois, da 'ul'
    newRow.append(
        techNameLabel, techNameInput
    )

    stackInputs.append(newRow)

})