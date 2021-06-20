const listDigimons = document.querySelector('#list-digimon')
const digimonAPI = 'https://digimon-api.vercel.app/api/digimon'

const digimons = fetch(digimonAPI).then(response => response.json())

digimons.then(digimons => {
  const digimonQuery = digimons.reduce((accumulator, digimon) => {
    accumulator += `
      <li class="card">
      <img src="${digimon.img}"> 
      <h2><strong>${digimon.name}strong: ${digimon.level}</h2>
      <h2>Biggest bet: 123123</h2>
      <form action="#action">
      <h2>make your bet</h2>
      <input type="text"></input>
      </form>
      <p>fuck that shit</p>
      </li>
      `  
    return accumulator
  }, '')
  console.log(listDigimons)
  listDigimons.innerHTML = digimonQuery
})

