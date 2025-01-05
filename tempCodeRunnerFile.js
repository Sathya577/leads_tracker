let myLeads=[]
const button= document.getElementById("input-btn")
const inputEl= document.getElementById("input-el")
const ulEl= document.getElementById("ul-el")

//localStorage.setItem("lead","www.google.com")//localstorage(does jot go even after refresh)
//let name=localStorage.getItem("lead")
//console.log(name)




button.addEventListener("click",function(){
   
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
 inputEl.value=""
   renderLeads();
 console.log(localStorage.getItem("myLeads"))

})
function renderLeads(){
    let listItems=""

for(let i=0;i<myLeads.length;i++){
   //listItems += "<li>"+"<a target='_blank'  href='"+ myLeads[i] +"' >" + myLeads[i] +"</a>"+"</li>"
   //we can make the above code simple by using template string that is start with ` and to include js expression use${}
   listItems+=`
   <li>
   <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a> 
   </li>`
   }
   ulEl.innerHTML=listItems
  
}
  



