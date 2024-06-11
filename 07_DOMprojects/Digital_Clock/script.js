const clock = document.getElementById('clock')

// const date = new Date()
// // console.log(date.toDateString())
// console.log(date.toLocaleTimeString())

setInterval(function(){
  const date = new Date()
  // clock.innerHTML = date.toLocaleTimeString()  //24-hour format

  //12hr format
  let options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  let formattedTime = date.toLocaleTimeString('en-US', options);
  clock.innerHTML = formattedTime
},1000)//in ms 1000ms = 1s
