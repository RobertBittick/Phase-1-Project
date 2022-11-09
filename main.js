document.addEventListener("DOMContentLoaded", () => {


const select = document.getElementById('event-dropdown')
const selectedVal = document.getElementById('event-dropdown').value
const container = document.getElementById('event-lists')


select.addEventListener('change', () => {
    fetch('http://localhost:3000/Events')
    .then(response => response.json())
    .then(function(data) {
            data.map(element =>{
                console.log(element.id)
                console.log(selectedVal)
                
                switch(element.id) {
                    case 1:
                        let img = document.createElement('img')
                        img.setAttribute('src', element.image)

                        let h2 = document.createElement('h2')
                        h2.innerText = element.name

                        let p = document.createElement('p')
                        p.innerText = element.info

                        let card = document.createElement('div')
                        card.setAttribute('class','card')
                        card.append(img,h2,p)

                        container.append(card) 
                        break
                    }
                })
                
            })   
            
        
    }) // end .then

   
}) //end event listener

