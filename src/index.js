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
slidedivs()
    
    
        
}) 
lib.newtask(new task(`wild`, `24 july`, `12:00 PM`, `yellow`))
lib.addhtml()
slidedivs()
function slidedivs() {
    const complete = document.querySelectorAll(`.loop`)


    complete.forEach((item) => {
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
                        item.addEventListener(`touchmove`, (e)=> {
                            let ongoingX = e.changedTouches[0].screenX
                            let ongoingY = e.changedTouches[0].screenY
                            console.log(`silde = ` + e.changedTouches[0].screenX)
                             isslide = true
                             if (isslide && startingpointX > ongoingX && startingpointY - ongoingY < 10 && startingpointY - ongoingY > -10){
                                document.getElementById(`delete${item.id.slice(-1)}`).style.display = `block`
                                anime({
                                    targets: item,
                                    translateX: -10,
                                    zIndex: -1,
                                    duration:300,
                                    complete: function() {
                                        document.querySelector(`body`).addEventListener(`touchstart`, () => {
                                            anime({targets: item, translateX:10})
                                            anime({
                                                targets: `#delete${item.id.slice(-1)}`,
                                                scale: 0,

                                            })
                                            anime({targets: item, translateX:0})
                                            
                                            setTimeout(() => {
                                                document.getElementById(`delete${item.id.slice(-1)}`).style.display = `none`
                                                lib.clearhtml()
                                                lib.addhtml()
                                                slidedivs()
                                                
                                                
                                            }, 100);
                                            
    
                                        })
                                    }
                                })
                                
            
                            }
                        })
                            
                    });
                })        
            
            })
}