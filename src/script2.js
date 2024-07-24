let container = document.getElementById(`taskcont`)
export class taskslib {
    
    constructor(){
        this.tasks = []
    }
    newtask(task){
        this.tasks.push(task.details())
    }
    addhtml(){
        let num = 0
        this.tasks.forEach((task) => {
            
            const taskdiv = document.createElement(`div`)
            const title = document.createElement(`p`)
            const timeCont = document.createElement(`div`)
            const dateComp = document.createElement(`p`)
            const timeComp = document.createElement(`p`)
            const completeTask = document.createElement(`input`)

            taskdiv.classList.add(`task`)
            taskdiv.classList.add(`looper`)
            taskdiv.setAttribute(`id`, `anima${num}`)
            title.classList.add(`title`)
            timeCont.classList.add(`time-cont`)
            completeTask.setAttribute(`id`, `complete${num}`)
            completeTask.classList.add(`loop`)
            completeTask.setAttribute(`type`, `checkbox`)
            timeCont.append(dateComp, timeComp, completeTask)
            taskdiv.append(title, timeCont)
            container.appendChild(taskdiv)
            title.innerText = task.title
            taskdiv.style.borderLeft = `10px solid ${task.priority}`
            dateComp.innerText = task.date
            timeComp.innerText = task.time
            num++
        })
       
    
    }
    clearhtml(){
        container.innerHTML = ``
    }
    listtasks(){
        return this.tasks
    }
}
export class task{
    constructor(titl,date,time, priority){
        this.titl = titl
        // this.info = info
        this.date = date
        this.time = time
        this.priority = priority
    }
    details(){
        return {title: this.titl,
            // this.info = info
            date :this.date,
            time : this.time,
            priority :this.priority}
    }
}