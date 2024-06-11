const form = document.querySelector('form')


form.addEventListener('submit', function(e){
  e.preventDefault();//prevent submitting to the server
  //if dont use it the value will only be shown for a split sec

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const res = document.querySelector('#results')
  if(height==='' || height<0 ||isNaN(height))
  {
    res.innerHTML = `give valid height ${height}`
  }
  else if(weight==='' || weight<0 ||isNaN(weight))
  {
    res.innerHTML=`give valid weight ${weight}`
  }
  else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.6)res.innerHTML = `<span>Under Weight: ${bmi}</span>` 
    else if(bmi<=24.9)res.innerHTML = `<span>Normal Weight: ${bmi}</span>`
    else if(bmi>24.9)res.innerHTML = `<span>Over Weight: ${bmi}</span>`
  }
})