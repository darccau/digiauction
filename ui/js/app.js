const listDigimons = document.querySelector('.digimon-cards')

const digimonAPI = 'https://digimon-api.vercel.app/api/digimon'

const digimons = fetch(digimonAPI).then(response => response.json())

digimons.then(digimons => {
  const digimonQuery = digimons.reduce((accumulator, digimon) => {
    accumulator += `
      <li class="card">
      <img class="card-image" src="${digimon.img}"> 
      <h2 class="card-title"><strong>${digimon.name}</strong>: ${digimon.level}</h2>
      <h2>Biggest bet: 123123</h2>
      <form action="#action">
      <h2 class="card-title">make your bet</h2>
      <input class="card-subtitle" type="text"></input>
      </form>
      </li>
      `  
    return accumulator
  }, '')

  listDigimons.innerHTML = digimonQuery
})

