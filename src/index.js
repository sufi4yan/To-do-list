import * as dates from 'date-fns'
import anime from 'animejs'

import {task, taskslib} from './script2.js';
const title = document.getElementById(`task-label`)
const createButton = document.getElementById(`create`)
const popup = document.getElementById(`overlay`)
const cancelbutton = document.querySelector(`.cancelbutton`)
const submitButton = document.getElementById(`submitt`)
const date = document.getElementById(`date`)
date.value = dates.format(new Date(), `yyyy-MM-dd`)
time.value = dates.format(new Date(), `hh:mm`)
createButton.addEventListener(`click`,()=> {

        popup.style.top = `0%`
        
        cancelbutton.addEventListener(`click`, () => {
            popup.style.top = `-300%`

        })
})
let priorities
function prioritydom() {
    
    document.querySelectorAll(`.pr`).forEach((item) => {
        item.addEventListener(`click`, () => {
            
            document.querySelectorAll(`.pr`).forEach((item) => {
                item.style.border = `none`
            })
            item.style.border = `2px solid black`
             
            priorities = item.classList[0].replace(`-pr`, ``)
           
        })
        
    })

    
}
function priority(){
        prioritydom()
}


let lib = new taskslib()

priority()
submitButton.addEventListener(`click`, () => {

    const duedat = dates.parse(date.value, 'yyyy-MM-dd', new Date())
    let  formattedtime = dates.parse(time.value, 'HH:mm', new Date())
    formattedtime = dates.format(formattedtime, `hh:mm a`)
    const duedate = dates.format(duedat, `d-MMM`)
    console.log(priorities)
    const taskTitle = title.value
    lib.newtask(new task(taskTitle, duedate, formattedtime, priorities))
    console.log(lib.listtasks())
    lib.clearhtml()
lib.addhtml()
slidedivs()    
}) 

lib.addhtml()
slidedivs()
function slidedivs() {


const box = document.querySelectorAll('.looper');
box.forEach((item) => {

item.addEventListener(`dblclick`, () => {
    console.log(`bello`)
})
item.addEventListener('touchstart', function(e) {
    let isslide = false
    console.log(e)
    let startingpointX = e.changedTouches[0].screenX
    let startingpointY = e.changedTouches[0].screenY
    console.log(item.clientLeft)
    item.addEventListener(`touchmove`, (e)=> {
        let ongoingX = e.changedTouches[0].screenX
        let ongoingY = e.changedTouches[0].screenY

        
            isslide = true
            if (isslide){
                document.getElementById(`delete${item.id.slice(-1)}`).style.display = `block`
                let diffdiv = startingpointX - ongoingX
                let diffdel = startingpointX - ongoingX
                diffdiv > 80 ? diffdiv = 80:diffdiv = diffdiv
                item.style.transform = `translateX(-${diffdiv}px)`
                diffdel / 30 > 1 ? diffdel = 1: diffdel / 30 < 0 ? diffdel = 0: diffdel = diffdel / 30
                document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(${diffdel})`


                item.addEventListener(`touchend`, () => {
                    if (diffdiv > 20){
                        diffdiv = 80
                        diffdel = 1
                        item.style.transform = `translateX(-${diffdiv}px)`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(${diffdel})`

                    }
                    else{
                        diffdiv = 0
                        diffdel = 0
                        item.style.transform = `translateX(-${diffdiv}px)`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(${diffdel})`

                    }
                })

                    document.querySelector(`body`).addEventListener(`click`, function black() {

                        item.style.transform = `translateX(0px)`
                                
                                setTimeout(() => {
                                    lib.clearhtml()
                                lib.addhtml()
                                slidedivs()
                                }, 1000);
                        })

                        
                        

                    }
                })
})
            

        })}     

            

document.querySelector(`form`).addEventListener(`submit`, (e) => {
    e.preventDefault()
})


