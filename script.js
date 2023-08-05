const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

let myLeads = []
const theList = () =>
{
    for(let i=0; i<myLeads.length; i++)
    {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
}
inputBtn.addEventListener("click",function()
{
    myLeads.push(inputEl.value)
    theList()
})