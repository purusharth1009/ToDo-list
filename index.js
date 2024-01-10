let myform=document.querySelector('form')
let int1=document.getElementById('task')
let int2=document.getElementById('priority')
let tbody=document.querySelector('tbody')
let AllTask=[]
myform.addEventListener('submit',function(e)
{
 e.preventDefault();
 let Data={};
 Data.task= int1.value
 Data.priority=int2.value

 AllTask.push(Data)
 console.log(AllTask)
 tbody.innerHTML= null;
 AllTask.map((ele)=>
 {
let row=document.createElement('tr')
let td1=document.createElement('td')
let td2=document.createElement('td')
 
td1.innerText=ele.task;
td2.innerText=ele.priority;

if (ele.priority.toLowerCase() === 'high') {
    row.style.backgroundColor = 'red';
  } else if (ele.priority.toLowerCase() === 'low') {
    row.style.backgroundColor = 'green';
  }

row.append(td1,td2)
tbody.append(row)
 })
})