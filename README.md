# A History of Rome in Maps

## Project Purpose and my Goal
The purpose of this project was to use the knowledge that I learn so far to build a simple web application. This project was a test of my abilities to think critically and put together the sum of what I've learned in Phase 1 of my journey with Flatiron. As my first project from scratch, the challenge was more than I expected. With that in mind, I learned a lot about HTML and CSS as well as Javascript that I wouldn't have without hands on trial and error. This project exposed my weaknesses as well as my strengths and showed me what I needed to work on.

My goal with this project was to build a simple web application that I could be proud of. I took some things that I enjoy immensely, history and maps, and using my favorite time period I build a web application that, despite it's simplicity, I am proud of. I greatly enjoy talking about history and geography, and I wanted to share my passion with others through this web application



## How to use
*A History of Rome in Maps* is a simple web application consisting of a single page. Below the overview, you can use the drop down to select a time period to view a map, and read a short synopsis about that particular time period. There is a section to add general comments about the content or whatever you please. In addition there is a like button to show that you enjoyed a particular map or that you appreciated some of the information. 

## My Challenges
I believe a crucial part of learning is making mistakes, looking at what went wrong and reassessing the problem. Throughout the course of this project I made many mistakes. One of the main challenges that I faced was trying to take my JSON data, iterate throught that data, check the index of each object within my JSON data against the value assigned to a specific drop down option and append it to the DOM. I started by using the map method in an attempt to achieve that goal, which I learned was NOT the correct method. 


#### My first attempt:
```javascript
fetch('http://localhost:3000/maps')
.then(response => response.json())
.then(data => {
    data.map(element)
})
```
#### The correct method:
```javascript
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
      mapObjects.find((mapObject) => {
          if(mapObject.id === selectedId){
            buildCard(mapObject)
          }
      })
  }) 
```
In addition to using the wrong method, I was also making a get request EVERY TIME I was using the drop down to select a new map. I was able to correct my simple mistake and make my web application much more efficient and get it to work. 

I found this graphic to be very useful to help me visualize the different array iteration methods.

![graphic](https://res.cloudinary.com/practicaldev/image/fetch/s--ZaT0FkK9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kyfxc8l116xdsk6ko449.png)

## Conclusion
This project turned out to be harder than I thought it was going to be. I struggled plenty and spent many hours googling and watching videos. Working through this project and dealing with so many things happening in my personal life taught me a lot about staying focused and managing burn out. My start was strong but I started losing steam along the way. I had to remind myself about what the end goal was many times and this project was an excellent learning opportunity to achieve those long term goals. I added to my knowledge about managing my ADHD, managing my time, and separating my person life from my work life. I also really enjoyed playing with the HTML and CSS elements fo the project even though I still have more than plenty of room for improvement. Completing this project has given me a sense of achievement that I find very rewarding.

## Contributors

- Robert Bittick

#### Sources
- [wikipedia.org](https://en.wikipedia.org/wiki/Roman_Empire)

- [World History Encyclopedia](https://www.worldhistory.org/image/11818/western--eastern-roman-empire-395-ce/)

