const url = "https://cat-fact.herokuapp.com/facts"

async function apii(){
    try {
        const response = await fetch(url)
        // console.log(response)
        const data = await response.json()
        console.log(data)
        // console.log(data[0].text)
        // document.querySelector('.click').addEventListener('click',()=>{
        //             data.forEach(element => {
        //                 setTimeout(()=>{
        //                     const p = document.createElement('p')
        //                     p.innerHTML = element.text
        //                     document.body.appendChild(p)
        //                 },3000)
        //             });
        // })


        document.querySelector('.click').addEventListener('click', async () => {
            for (let i = 0; i < data.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const p = document.createElement('p')
                p.innerHTML = data[i].text
                document.body.appendChild(p)
            }
        })
        
    } 
    catch (error) {
        console.log(error)
    }
}

apii()