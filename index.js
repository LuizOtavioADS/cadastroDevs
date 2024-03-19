
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

    //Criando as entradas de valores da tecnologia
    const expLabel = createLabel('Experiência: ')

    const id1 = 'expRadio- ' + rowIndex + '.1'
    const expRadio1 = createInput(id1,'0-2 anos', 'techExp- ' + rowIndex, 'radio' )
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 = 'expRadio- ' + rowIndex + '.2'
    const expRadio2 = createInput(id2,'3-4 anos', 'techExp- ' + rowIndex, 'radio' )
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 = 'expRadio- ' + rowIndex + '.3'
    const expRadio3 = createInput(id3,'5+ anos', 'techExp- ' + rowIndex, 'radio' )
    const expLabel3 = createLabel('5+ anos', id3)

   const removeRowBtn = document.createElement('button')
   removeRowBtn.type = 'button'
   removeRowBtn.innerText = 'Remover'
   removeRowBtn.addEventListener('click', function(){
    stackInputs.removeChild(newRow)
   })
    
    //Usando o método append para guardar os elementos criados, dentro das 'li' e depois, da 'ul'
    newRow.append(
        techNameLabel, techNameInput, expLabel, expLabel1, expRadio1, expLabel2, expRadio2, expLabel3, expRadio3, removeRowBtn
    )

    stackInputs.append(newRow)

})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullNameInput = document.getElementById('fullName')
    const inputRows = document.querySelectorAll('.inputRow')

    let techs = []

    inputRows.forEach(function(row){
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value

        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        techs.push({name: techName, exp: techExp})
    })

    const newDev = { fullname: fullNameInput.value, techs: techs}

    developers.push(newDev)
    alert('Dev cadastrado com sucesso! :D')

    fullNameInput.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })
    console.log(developers)
})