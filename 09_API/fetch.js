const url = "https://cat-fact.herokuapp.com/facts"

// async function apii(){
//     try {
//         const response = await fetch(url)
//         // console.log(response)
//         console.log(response.status)
//         const data = await response.json()
//         console.log(data)
//         console.log(data)

//         document.querySelector('.click').addEventListener('click', () => {

//                 const p = document.createElement('p')
//                 p.innerHTML = data[1].text
//                 document.body.appendChild(p)
            
//         })
        
//     } 
//     catch (error) {
//         console.log(error)
//     }
// }


//---------using chaining------------

fetch(url)
.then(function(response){
    console.log(response)
    if(response.status===200)console.log("successful")
    return response.json()
})
.then(function(data){
    const p = document.createElement('p')
        document.querySelector('.click').addEventListener('click',function(){
        p.innerHTML = data[3].text
        document.body.appendChild(p)
    })
    console.log(data)
    
})
.catch(function(error){
    console.log(error)
})
.finally(()=> console.log("either resovled or rejected "))

// apii()