document.addEventListener("DOMContentLoaded", () => {


const select = document.getElementById('event-dropdown')
const container = document.getElementById('event-lists')

select.addEventListener('change', () => {
    fetch('http://localhost:3000/Events')
    .then(response => response.json())
    .then(function(data) {
            let option;
            for(let i = 0; i < data.length; i++) {

                let img = document.createElement('img')
                img.setAttribute('src', el.image)

                let h2 = document.createElement('h2')
                h2.innerText = el.name

                let p = document.createElement('p')
                p.innerText = el.info

                let card = document.createElement('div')
                card.setAttribute('class','card')
                card.append(img,h2,p)

                container.append(card)
            }   
            
        
    }) // end .then

   
    //buildCard()
}) //end event listener

        let img = document.createElement('img')
        img.setAttribute('src', el.image)

        let h2 = document.createElement('h2')
        h2.innerText = el.name

        let p = document.createElement('p')
        p.innerText = el.info

        let card = document.createElement('div')
        card.setAttribute('class','card')
        card.append(img,h2,p)

        container.append(card)

})