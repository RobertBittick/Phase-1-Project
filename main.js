document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById('event-dropdown')
  const container = document.getElementById('event-lists')
  const submit = document.querySelector('form')
  const commentList = document.querySelectorAll('.comments')
  let mapObjects

  function getMaps(){
    fetch('http://localhost:3000/maps')
    .then(response => response.json())
    .then(data => {
      mapObjects = data
    })
  }

  getMaps()

  submit.addEventListener('submit', (e) => addComment(e))

  select.addEventListener('change', () => {
      const selectedId = parseInt(select.value)
      mapObjects.find((mapObject) => {
          if(mapObject.id === selectedId){
            buildCard(mapObject)
          }
      })
  }) 

  function buildCard(element){

    let img = document.createElement('img')
    img.setAttribute('src', element.image)
    img.className = 'enlarge-onhover'

    let button = document.createElement('button')
    button.innerText = 'Like ❤️'
    button.className = 'like-btn'
    button.setAttribute('id', element.id)
    button.addEventListener('click', (e) => likes(e))

    let h2 = document.createElement('h2')
    h2.innerText = element.name

    let p = document.createElement('p')
    p.innerText = element.info

    let p2 = document.createElement('p')
    p2.innerText = `${element.likes} likes`
        
    let card = document.createElement('div')
    card.setAttribute('class','card')
    card.append(img,h2,p,p2,button)

    container.append(card) 
    
  }           
   

  function likes(event) {
    let more = parseInt(event.target.previousElementSibling.innerText) + 1
    fetch(`http://localhost:3000/maps/${event.target.id}`, { 
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
        body: JSON.stringify({
          'likes': more
        })
    })  
    .then(response => response.json())
    .then(data => {
      event.target.previousElementSibling.innerText= `${more} likes`
    })
  }

  function addComment(e) {
    e.preventDefault()
    const newComment = document.createElement('li')
    newComment.textContent = e.target['comment-input'].value
    commentList[0].appendChild(newComment)
    submit.reset()
  }

})

