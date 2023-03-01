class dueDate{

  constructor(date){
    this.date=date;
  }
  get date(){
    return this.date;
  }

  set date(_date){
    alert (`Today's task is due at  \${this.date}`)
  }

}