window.addEventListener("keypress", function(){
    document.getElementById("text").lastChild.data = `Key code for "${event.key}": ${event.keyCode}`
})
