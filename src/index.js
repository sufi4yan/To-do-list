import * as dates from 'date-fns'
import anime from 'animejs'

import {task, taskslib} from './script2.js';
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
submitButton.addEventListener(`click`, (e) => {
    e.preventDefault()
    const duedat = dates.parse(date.value, 'yyyy-MM-dd', new Date())
    let  formattedtime = dates.parse(time.value, 'HH:mm', new Date())
    formattedtime = dates.format(formattedtime, `hh:mm a`)
    const duedate = dates.format(duedat, `d-MMM`)
    console.log(priorities)

    lib.newtask(new task(`wild`, duedate, formattedtime, priorities))
    console.log(lib.listtasks())
    lib.clearhtml()
    lib.addhtml()
    const complete = document.querySelectorAll(`.loop`)
complete.forEach((item) => {
    item.addEventListener(`change`, () => {
        console.log(item.id.slice(-1))
        anime({
            targets: `#anima${item.id.slice(-1)}`,
            textDecoration:`line-through`,
            translateX: outerWidth,
            opacity: 0.5,
            complete: function anim() {
                        document.getElementById(`anima${item.id.slice(-1)}`).style.display = `none`
                    }

                })

            } )
        })
        const box = document.querySelectorAll('.looper');
    box.forEach((item) => {
        const LONG_PRESS_TIME = 500; 
    let pressTimer;
        item.addEventListener(`dblclick`, () => {
            console.log(`bello`)
        })
        item.addEventListener('touchstart', function(e) {
            let isslide = false
            console.log(e)
            let startingpointX = e.changedTouches[0].screenX
            let startingpointY = e.changedTouches[0].screenY
            item.addEventListener(`touchmove`, (e)=> {
                let ongoingX = e.changedTouches[0].screenX
                let ongoingY = e.changedTouches[0].screenY
                console.log(`silde = ` + e.changedTouches[0].screenX)
                 isslide = true
                 if (isslide && startingpointX > ongoingX && startingpointY === ongoingY){
                    anime({
                        targets: item,
                        translateX: -50,
                        zIndex: -1,
                        duration:500,
                        complete: function() {
                            window.addEventListener(`click`, () => {
                                anime({targets: item, translateX:0})
                            })
                        }
                    })

                }
            })
                
        });
        
        
    })
    
    
        
}) 





