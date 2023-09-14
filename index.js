let tecnologiaCount = 0
let validacao = true
let arrayCandidato = {}

function adicionarTecnologia(ev) {
  ev.preventDefault()
  const section = document.getElementById("sectionID")

  const form = document.getElementById("formulario")

  const ul = document.createElement("ul")

  const h3 = document.createElement("h3")
  h3.innerText = "Tecnologia";

  const techLi = document.createElement("li")
  techLi.innerText = "Nome da tecnologia: "
  const tech = document.createElement("input")
  tech.type = "text";
  tech.name = `Tecnologia${tecnologiaCount}`
  techLi.appendChild(tech)
  ul.appendChild(techLi)
  ul.appendChild(document.createElement("br"))

  const techXpLi = document.createElement("li")
  techXpLi.innerText = "Experiência: "

  const uniqueGroupName = `Experiência${tecnologiaCount}`
  const techXp1 = createRadioInput(uniqueGroupName, "0-2 anos")
  const techXp2 = createRadioInput(uniqueGroupName, "3-4 anos")
  const techXp3 = createRadioInput(uniqueGroupName, "5+ anos")

  techXpLi.appendChild(techXp1)
  techXpLi.appendChild(techXp2)
  techXpLi.appendChild(techXp3)
  ul.appendChild(techXpLi)
  ul.appendChild(document.createElement("br"))

  const btnExcluir = document.createElement("button")
  btnExcluir.type = "button"
  btnExcluir.className = "btnExcluir"
  btnExcluir.innerText = "Excluir tecnologia"
  btnExcluir.id = `btnExcluir${tecnologiaCount}`
  btnExcluir.addEventListener("click", function() {
      h3.remove()
      ul.remove()
  })

  ul.appendChild(btnExcluir)

  tecnologiaCount++

  form.append(h3)
  form.append(ul)
  section.append(form)
  
  console.log(section)
}

function createRadioInput(name, value) {
  const input = document.createElement("input")
  input.type = "radio"
  input.name = name
  input.value = value

  const label = document.createElement("label")
  label.innerText = value

  const container = document.createElement("div")

  container.appendChild(input)
  container.appendChild(label)

  return container
}

const btn = document.getElementById("adicionaTec")
btn.addEventListener("click", adicionarTecnologia)

const forma = document.getElementById("formulario")
const btn2 = document.getElementById("cadDev")


function cadastrar(event) {
  event.preventDefault()

  const nome = document.getElementById("fullName").value

  const tecnologiasInputs = document.querySelectorAll('input[name^="Tecnologia"]')
  const experienciasInputs = document.querySelectorAll('input[name^="Experiência"]')

  const tecnologiasArray = []

  for (let i = 0; i < tecnologiasInputs.length; i++) {
    const tecnologia = tecnologiasInputs[i].value;
    const experiencia = experienciasInputs[i].value

    const tecnologiaObj = {
      Nome: tecnologia,
      Experiência: experiencia
    }

    tecnologiasArray.push(tecnologiaObj)
  }

  arrayCandidato = {
    Nome: nome,
    Tecnologias: tecnologiasArray
  }

  console.log(arrayCandidato)
  const formulario = document.getElementById("formulario")
  formulario.reset()
}


btn2.addEventListener("click", cadastrar)