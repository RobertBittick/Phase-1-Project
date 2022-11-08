document.addEventListener("DOMContentLoaded", () => {


const select = document.getElementById('event-dropdown')

select.addEventListener('change', () => {
    fetch('http://localhost:3000/Events')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.map(element => {
            eventArray =[]
            eventArray.push(element)
            buildCard(element[1])

            
        }) // end of data.map
            
        
    }) // end .then

    function buildCard(el) {
        let img = document.createElement('img')
        img.setAttribute('src', el.image)

        let h2 = document.createElement('h2')
        h2.innerText = el.name

        let p = document.createElement('p')
        p.innerText = el.info

        let card = document.createElement('div')
        card.setAttribute('class','card')
        card.append(img,h2,p)
    }
    buildCard()
}) //end event listener


})