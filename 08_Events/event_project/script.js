//generating random color

const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
  
    for(let i=0;i<6;i++)
    {
      color += hex[Math.floor(Math.random()*16)]
    }
    return color
  };
  
  // const newColors = setInterval(randomColor(),1000)
  let interval;
  const changeColor = function(){
  
    if(!interval)interval = setInterval(bcg,1000)
    function bcg(){
      document.body.style.backgroundColor = randomColor()
    }
  }
  
  const stopChanges = function(e){
    clearInterval(interval)
    interval = null
  }
  
  document.querySelector('#start').addEventListener('click',changeColor,false)
  
  document.querySelector('#stop').addEventListener('click',stopChanges,false)