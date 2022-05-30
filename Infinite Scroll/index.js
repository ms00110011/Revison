const container = document.querySelector('.container')

var q = 1



function loadNames() {
    

    for(var i=0; i<25; i++) {
        const h3 = document.createElement('h3')
        h3.innerText = `Masai Student ${q++} ` 
        container.appendChild(h3)
    }

}

loadNames()



window.addEventListener('scroll',() => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadNames()
        console.log("hey")
    }
})

