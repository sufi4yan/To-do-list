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

        popup.style.transform = `translateY(0px)`
        
        cancelbutton.addEventListener(`click`, () => {
            popup.style.transform = `translateY(-300%)`

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
comptask()
}) 

lib.addhtml()
slidedivs()
comptask()

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

                diffdel / 30 > 1 ? diffdel = 1: diffdel / 30 < 0 ? diffdel = 0: diffdel = diffdel / 30
                document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(${diffdel})`


                item.addEventListener(`touchend`, () => {
                    console.log(diffdiv)
                    if (diffdiv > 5){
                        diffdiv = 80
                        diffdel = 1
                        item.style.transition = `all 0.2s`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(${diffdel})`
                    }
                    
                    else{
                        diffdiv = 0
                        diffdel = 0
                        item.style.transition = `all 0.2s`
                        item.style.transform = `translateX(-${diffdiv}px)`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transition = `all 0.2s`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(${diffdel})`
                        setTimeout(() => {
                            document.getElementById(`delete${item.id.slice(-1)}`).style.display = `none`
                                
                                lib.clearhtml()
                                lib.addhtml()
                                slidedivs()
                                comptask()
                                
                            }, 100);
                    }
                })
                }
                    item.addEventListener(`click`, function black() {
                        console.log(`hello`)
                        item.style.transform = `translateX(0px)`
                        item.style.transition = `all 0.2s`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transition = `all 0.2s`
                        document.getElementById(`delete${item.id.slice(-1)}`).style.transform = `scale(0)`
                        
                        
                        setTimeout(() => {
                            document.getElementById(`delete${item.id.slice(-1)}`).style.display = `none`
                                
                                lib.clearhtml()
                                lib.addhtml()
                                slidedivs()
                                comptask()
                            }, 100);
                        })
                        
                        

                    
                
})
            

        }    )})} 

            

document.querySelector(`form`).addEventListener(`submit`, (e) => {
    e.preventDefault() 
})
function comptask(){
    document.querySelectorAll(`.loop`).forEach((item) => {
        console.log(item)
    item.addEventListener(`change`, () => {
        if (item.checked){
            console.log(lib.listtasks()[item.id.slice(-1)].title)
            lib.removetask(lib.listtasks()[item.id.slice(-1)].title)
            console.log(lib.listtasks())
        

        console.log(item.id.slice(-1))
        document.getElementById(`anima${item.id.slice(-1)}`).style.transition = `all 0.5s`
        document.getElementById(`anima${item.id.slice(-1)}`).style.opacity = `0.5`
        setTimeout(() => {
            document.getElementById(`anima${item.id.slice(-1)}`).style.transform = `translateX(-130%)`
        }, 500);
        setTimeout(() => {
            document.getElementById(`anima${item.id.slice(-1)}`).style.display = `none`
        }, 1000);
        }
    })
    })
}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#spinner").style.visibility = "visible";
    } else {
        document.querySelector(
          "#spinner").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};
