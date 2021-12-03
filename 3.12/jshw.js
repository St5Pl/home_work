function MyTime(){
    this.date = new Date('2021-12-03 10:11:55');
  
    this.show = function(){
      console.log(this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds())
    }
  
    this.addSec = function(sec: number){
      this.date.setSeconds(this.date.getSeconds() + sec);
    }
  
    this.addMin = function(min: number){
      this.date.setMinutes(this.date.getMinutes() + min);
    }
  
    this.addHour = function(hour: number){
      this.date.setHours(this.date.getHours() + hour);
    }
  }
  

  let t = new MyTime()
  
  t.show()
  t.addSec(30)
  t.show()
  t.addMin(20)
  t.show()
  t.addHour(10)
  t.show()