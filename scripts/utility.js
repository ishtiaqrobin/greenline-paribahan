function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}

function removeClasslistById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function addClasslistById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add("bg-[#1DD100]", "text-white")
}

function getTextValueElementById(elementId) {
    const inputField = document.getElementById(elementId)
    const inputValue = inputField.value
    return inputValue
}