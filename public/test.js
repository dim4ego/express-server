let buttonTest = document.querySelector("#test")
let infa = document.querySelector('p>infa')
let h2 = document.querySelector('h2')



function buttonTestHandler(params) {
    h2.textContent = "чётапоменялося"
    
   
    infa.textContent = "dfsdfs"

} 


buttonTest.addEventListener('click', buttonTestHandler)
