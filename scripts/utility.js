function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}
