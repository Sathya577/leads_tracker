let myLeads = [];
const button = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteEl= document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn")
// Retrieve leads from local storage, if available
let LeadsFromLocal = JSON.parse(localStorage.getItem("myLeads"));
console.log("Leads from local storage:", LeadsFromLocal);

if (LeadsFromLocal) {  // Check if there's data in local storage
    myLeads = LeadsFromLocal;
    renderLeads(myLeads);  // Render leads if available
}
/* const tabs = [ thios is hard coded
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
] */

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);})
    

})
button.addEventListener("click", function () {
    
        myLeads.push(inputEl.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        inputEl.value = "";
        renderLeads(myLeads);
        console.log("Updated myLeads in local storage:", JSON.parse(localStorage.getItem("myLeads")));
    
});

function renderLeads(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">${leads[i]}</a>
            </li>`;
    }
    ulEl.innerHTML = listItems;
    console.log("Rendered list:", listItems);  // Log the rendered HTML


}
deleteEl.addEventListener("dblclick",function (){
   localStorage.clear();
   myLeads=[];
   renderLeads(myLeads);
})
