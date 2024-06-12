const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e)=>{

  insert.innerHTML = `
  <div class="color">
  <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <th>${e.key === ' ' ? 'Space':e.key}</th>
      <th>${e.keyCode}</th>
      <th>${e.Code}</th>
    </tr>
  </table>
</div>
  `

  
})