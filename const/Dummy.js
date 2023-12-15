export const portfolio = {
  balance :'1 Embarcação',
  // changes :'+20%',
  type:'I'
}


export const coins = [
{
  id:1,
  currency:'Embarcação X',
  symbol:'BTC',
  image: require("../assets/icons/barco.png"),
  tanque1:'60',   //Volume do Tanque 1
  tanque2:'55',   //Volume do Tanque 2
  tanque3:'50',   //Volume do Tanque 3
  consumption1: '80km/L', //Consumo médio por hora
  consumption2: '20km/L', //Consumo médio por hora
  consumption3: '56km/L', //Consumo médio por hora
  changes :'40 ºC',   //Temperatura
  densi:'0.876',
  type :'I', //I = Crescente , D = Decrescente
  eixo:{
      vel1:'55', //Velocidade RPM
      vel2:'75' //Velocidade RPM
  }
},
// {
//   id:2,
//   currency:'Embarcação Y',
//   symbol:'ETH',
//   image: require("../assets/icons/barco.png"),
//   tanque1:'60',   //Volume do Tanque 1
//   tanque2:'55',   //Volume do Tanque 2
//   tanque3:'50',   //Volume do Tanque 3
//   consumption1: '50km/L', //Consumo médio por hora
//   consumption2: '60km/L', //Consumo médio por hora
//   consumption3: '70km/L', //Consumo médio por hora
//   changes :'12 ºC', //Temperatura
//   type :'D', //I = Crescente , D = Decrescente
//   densi:'0.876',
//   eixo:{
//       vel1:'12', //Velocidade
//       vel2:'54' //Velocidade RPM
//   }
// },
// {
//   id:3,
//   currency:'Embarcação W',
//   symbol:'BNB',
//   image: require("../assets/icons/barco.png"),
//   amount :'501L',  //Volume do Tanque
//   consumption: '22km/h', //Consumo médio por hora
//   changes :'30 ºC',  //Temperatura
//   type :'I', //I = Crescente , D = Decrescente
//   eixo:{
//       vel:'32',  //Velocidade
//       consumo:'6.3'  //Consumo
//   }
// },
// {
//   id:4,
//   currency:'Embarcação Z',
//   symbol:'Doge',
//   image: require("../assets/icons/barco.png"),
//   amount :'242L',  //Volume do Tanque
//   consumption: '22km/h', //Consumo médio por hora
//   changes :'23 ºC',  //Temperatura
//   type :'I', //I = Crescente , D = Decrescente
//   eixo:{
//       vel:'42',  //Velocidade
//       consumo:'12'  //Consumo
//   }
// },
// {
//   id:5,
//   currency:'Embarcação K',
//   symbol:'XRP',
//   image: require("../assets/icons/barco.png"),
//   amount :'500L',  //Volume do Tanque
//   consumption: '22km/h', //Consumo médio por hora
//   changes :'55 ºC',  //Temperatura
//   type :'D', //I = Crescente , D = Decrescente
//   eixo:{
//       vel:'95',  //Velocidade
//       consumo:'3'  //Consumo
//   }
// },

]

const bnb_price = '450'
const dummyData = { portfolio, coins, bnb_price}

export default dummyData