document.addEventListener("DOMContentLoaded", () => {


const select = document.getElementById('event-dropdown')
const dropDown = select.options[select.selectedIndex]

const container = document.getElementById('event-lists')
let mapObjects

    function getMaps(){
        fetch('http://localhost:3000/maps')
        .then(response => response.json())
        .then(data => {
            mapObjects = data
        })
    }

    getMaps()
    
    select.addEventListener('change', () => {

        const selectedId = parseInt(select.value)
    
        let match = mapObjects.find((mapObject) => mapObject === selectedId)
        
            //find map object with that ID
            //add card to DOM for that map object
        //debugger  
     }) // end event listener

    function buildCard(element){
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
    }           
   
}) //end event listener

