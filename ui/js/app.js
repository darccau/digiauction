// const contractAddress = "";

const listDigimons = document.querySelector('.digimon-cards')
const digimonAPI = 'https://digimon-api.vercel.app/api/digimon'

const DApp = {
  web3: null,
  contracts: {},
  account: null,

  init: function () {
    return DApp.initWeb3();
  },

  initWeb3: async function () {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ // Requisita primeiro acesso ao Metamask
          method: "eth_requestAccounts",
        });
        DApp.account = accounts[0];
        window.ethereum.on('accountsChanged', DApp.updateAccount); // Atualiza se o usuário trcar de conta no Metamaslk
      } catch (error) {
        console.error("Usuário negou acesso ao web3!");
        return;
      }
      DApp.web3 = new Web3(window.ethereum);
    } else {
      console.error("Instalar MetaMask!");
      return;
    }
    return DApp.initContract();
  },

  // Atualiza 'DApp.account' para a conta ativa no Metamask
  updateAccount: async function() {
    DApp.account = (await DApp.web3.eth.getAccounts())[0];
    atualizaInterface();
  },

  // Associa ao endereço do seu contrato
  initContract: async function () {
    DApp.contracts.Contrato = new DApp.web3.eth.Contract(abi, contractAddress);
    return DApp.render();
  },

  // Inicializa a interface HTML com os dados obtidos
  render: async function () {
    inicializaInterface();
  },
}

const digimons = fetch(digimonAPI).then(response => response.json())

digimons.then(digimons => {
  const digimonQuery = digimons.reduce((accumulator, digimon) => {
    accumulator += `
      <li class="card">
      <img class="card-image" src="${digimon.img}"> 
      <h2 class="card-title">${digimon.name}</h2>
      <h4>Level: ${digimon.level}</h4>
      <h4>Biggest bet: 123123</h4>
      <form action="#action">
      <h4>make your bet</h4>
      <input placeholder="fuc"class="card-subtitle" type="text"></input>
      </form>
      </li>
      `  
    return accumulator
  }, '')

  listDigimons.innerHTML = digimonQuery
})

