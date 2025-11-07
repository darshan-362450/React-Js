import React from 'react'

const App = () => {

// localStorage.clear()         
// --->      browser pe application pr local storage khali krna he to ye command
 
// sessionStorage.clear()       
// --->     browser pe application pr session  storage khali krna he to ye command


//Agar local storage me store krna rhega too
localStorage.setItem('user' , 'DARshan')
localStorage.setItem('age' , '23')
localStorage.setItem('Company' , 'Wipro')

// local storage ko used krna rhega to
const user = localStorage.getItem('user')
const age = localStorage.getItem('age')
const Company = localStorage.getItem('Company')

console.log(user , age , Company);

// local storage me se itam remove krna rhega t0

localStorage.removeItem('Company')



//Agar MUjhe Array ke form me Storage karna rhega too
// const Student = {
//   name : 'DArshan',
//   age : 24 ,
//   city : 'Mumbai'
// }

// localStorage.setItem('Student' , JSON.stringify(Student))


// const StudentData = {
//   name :'Arjun',
//   age : 25 ,
//   city : 'Chenni'
// }

// localStorage.setItem('StudentData' , JSON.stringify(StudentData))



//Agar mujhe sab htane ke baad sab dekhna he too 
// const Student = localStorage.getItem('Student')

// console.log(Student);


// upar vala too string ke form me milega to uusko normal form me dekhna rhega too

const Student = JSON.parse(localStorage.getItem('Student'))

console.log(Student);





  return (
    <div>
      <h1>Local Storage</h1>
    </div>
  )
}

export default App