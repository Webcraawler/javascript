const url = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

// async function covert(){
//     const response = await fetch(url)

// }


const button = document.querySelector('button')


const dropdown = document.querySelectorAll(".dropdown select")

dropdown.forEach((select)=>{
    for(currCode in countryList){
        let opt = document.createElement("option")
        opt.innerHTML = currCode
        opt.value = currCode
        if(select.name==="From" && currCode==="EUR")
            {
                opt.selected = "selected"
            }
        if(select.name==="To" && currCode === "INR")
            {
                opt.selected = "selected"
            }
        select.append(opt)
    }
    select.addEventListener('click',(e)=>{
        updateFlag(e.target)
    })
})
    
function updateFlag(element){
    let currCode = element.value;
    // console.log(currCode)
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    
    // const imgg = document.createElement('img')
    // imgg.src = newSrc
    // oldimg.replaceWith(imgg)
    let oldimg = element.parentElement.querySelector('img')
    oldimg.src = newSrc
}


button.addEventListener('click',async function(e){
    e.preventDefault()
    let inpVal = document.querySelector('input')
    const currVal = parseInt(inpVal.value)
    if(currVal ==="" || currVal <1)
        {
            alert("please enter value greater than 1")
            inpVal.value = 0
            document.querySelector('.msg').innerHTML = "1EUR = 90INR"
        }
        
    // console.log(inpVal)

    // const from = dropdown[0].value
    // console.log(from)
  
        else{
            const to = dropdown[1].value.toLowerCase()
        console.log(to)

        let response = await fetch(url)
        let data = await response.json()
        // console.log(data.eur[to])
        let convertedVal = (currVal*data.eur[to]).toFixed(2)
        console.log(convertedVal)
        const msgbox = document.querySelector('.msg')
        msgbox.innerHTML = `${currVal}EUR = ${convertedVal}${to.toUpperCase()}`

        }


})

