let container = document.getElementById(`taskcont`)
export class taskslib {
    
    constructor(){
        this.tasks = JSON.parse(localStorage.getItem(`tasks`)) || []
    }
    newtask(task){
        if (this.tasks.some(taske => taske.title === task.title)){
            alert(`alreadyexists`)
        }
        else{
            this.tasks.push(task.details())
            this.savetostorage()
        }
        
    }
    addhtml(){
        let num = 0
        this.tasks.forEach((task) => {
            const delbut = document.createElement(`button`)
            const taskdiv = document.createElement(`div`)
            const title = document.createElement(`p`)
            const timeCont = document.createElement(`div`)
            const precontainer = document.createElement(`div`)
            const dateComp = document.createElement(`p`)
            const timeComp = document.createElement(`p`)
            const completeTask = document.createElement(`input`)
            delbut.innerText = `Delete`
            delbut.setAttribute(`id`, `delete${num}`)
            delbut.classList.add(`delete-but`)
            precontainer.classList.add(`precont`)
            taskdiv.classList.add(`task`)
            taskdiv.classList.add(`looper`)
            taskdiv.setAttribute(`id`, `anima${num}`)
            title.classList.add(`title`)
            timeCont.classList.add(`time-cont`)
            completeTask.setAttribute(`id`, `complete${num}`)
            completeTask.classList.add(`loop`)
            completeTask.setAttribute(`type`, `checkbox`)
            timeCont.append(dateComp, timeComp, completeTask)
            taskdiv.append(title, timeCont, delbut)
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
    removetask(title){
       this.tasks = this.tasks.filter(task => task.title !== title)
       this.savetostorage()
    }
    savetostorage(){
        localStorage.setItem(`tasks`, JSON.stringify(this.tasks))
    }
}
export class task{
    constructor(title,date,time, priority){
        this.title = title
        // this.info = info
        this.date = date
        this.time = time
        this.priority = priority
    }

    set title(newtitle){
        if (newtitle.length > 1 && newtitle.length < 30){
            console.log(`hello`)
            this._title = newtitle
        }
        else{

            throw new Error(`not a valid label`)
        }
    }
    get title(){
        return this._title
    }


    details(){
        return {title: this.title,
            // this.info = info
            date :this.date,
            time : this.time,
            priority :this.priority}
    }

}
