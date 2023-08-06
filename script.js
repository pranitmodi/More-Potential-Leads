const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const del = document.getElementById('del-btn')
const tab = document.getElementById('tab-btn')

myLeads = []

const theList = () =>
{
    let listItems = ""
    for(let i=0; i<myLeads.length; i++)
    {
        listItems += `
        <li>
            <a href="${myLeads[i]}" target="_blank">${myLeads[i]}<a>
        </li>`
        // const li = document.createElement("li")
        // li.textContent = myLeads[myLeads.length-1]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromStorage)
{
    myLeads = leadsFromStorage
    theList()
}

tab.addEventListener("click",function()
{
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads",JSON.stringify(myLeads)) //Storing the array in local storage

    // to get the URL of the current tab opened with the extension
    // chrome.tabs works as an API
    // url is stored in this form => const tabs = [{url : "www.google.com"}]
    // need to add this as permission in manifest file as well
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        theList()
    })

    console.log(localStorage.getItem("myLeads"))
})

del.addEventListener("click",function()
{
    localStorage.clear()
    myLeads = []
    theList()
    console.log('deleted')
})

inputBtn.addEventListener("click",function()
{
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads",JSON.stringify(myLeads)) //Storing the array in local storage
    theList()
    console.log(localStorage.getItem("myLeads"))
})