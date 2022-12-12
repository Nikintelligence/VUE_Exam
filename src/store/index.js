import { createStore } from 'vuex'

export default createStore({
  state: {
    order: [], 
    totalSum: 0,
    count: 0,
    numberRow:[],


    usersName: [
      {name: "example@gmail.com", password: "123456"},
      {name: "example1@gmail.com", password: "0987"},
      {name: "example2@gmail.com", password: "4565276"}
    ],
    devices: [
      {
          id: 1,
          title: "iBanana 12",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/3c0/1160_880_17f5c944b3b71591cc9304fac25365de2/3c0dab87cdae4ff14e5aa603b49e817e.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c1783e5197cd9069ee415ac973611a14.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/a17/1160_880_17f5c944b3b71591cc9304fac25365de2/a170fb0d2bccb75bfe53c2115f308dec.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/dac/1160_880_17f5c944b3b71591cc9304fac25365de2/dac51ea71a0037a49129e974a7b4c1ba.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 84990,
          category: 'phone'
      },
      {
          id: 2,
          title: "iBanana 12 Pro",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/5af/1160_880_17f5c944b3b71591cc9304fac25365de2/5af3aef1d430e62b1858c1aa9a0485de.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/8dd/1160_880_17f5c944b3b71591cc9304fac25365de2/8dd43ecbc42a8707956ff6aa6c452112.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/fa1/1160_880_17f5c944b3b71591cc9304fac25365de2/fa15c942267d84b7c5519540e2b7fe05.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/a2f/1160_880_17f5c944b3b71591cc9304fac25365de2/a2fbcd5a1f67dd6ad17bd9f9b9187a97.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 124990,
          category: 'phone'
      },
      {
          id: 3,
          title: "iBanana 12 Pro Max",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/0c2/1160_880_17f5c944b3b71591cc9304fac25365de2/0c219262e091ed68a8dcc38712fa6640.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/dc8/1160_880_17f5c944b3b71591cc9304fac25365de2/dc89ba2aa6bb8cd59e1ca0bbb667e9f7.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/a8d/1160_880_17f5c944b3b71591cc9304fac25365de2/a8d128abbe85ca47e97e5add0f7d615d.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/ea3/1160_880_17f5c944b3b71591cc9304fac25365de2/ea3e421d4d46f767794a5acf0c213904.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 114990,
          category: 'phone'
      },
      {
          id: 4,
          title: "iBanana 11",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/687/1160_880_17f5c944b3b71591cc9304fac25365de2/6872410aaaf453c143810a7c10f55209.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/98d/1160_880_17f5c944b3b71591cc9304fac25365de2/98d012b10f2cdf21c59980b5fa61b934.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/85d/1160_880_17f5c944b3b71591cc9304fac25365de2/85d526d3104f90bfec9467f70b89667d.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/149/1160_880_17f5c944b3b71591cc9304fac25365de2/149904dc00e8708b6f398d7f940b34e0.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 64990,
          category: 'phone'
      },
      {
          id: 5,
          title: "BookMac Pro 13 M1",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/846/1160_880_17f5c944b3b71591cc9304fac25365de2/8468fe0e909e0aa9fa75c2a1683d6e63.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/458/1160_880_17f5c944b3b71591cc9304fac25365de2/45806bd56b90cbb29e282fb5e4eebbb4.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/16e/1160_880_17f5c944b3b71591cc9304fac25365de2/16eeba10f4a34c2e9179c5c46203c8e6.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/5f5/1160_880_17f5c944b3b71591cc9304fac25365de2/5f5956c13d7056ecf50f8234ec34d4bd.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 132990,
          category: 'mac'      
      },
      {
          id: 6,
          title: "BookMac Air",
          img: "https://cdn.svyaznoy.ru/upload/iblock/5b2/ruru_macbook-air_gold_q220_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/4c6/ruru_macbook-air_gold_q220_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/27d/ruru_macbook-air_gold_q220_pdp-image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/609/ruru_macbook-air_gold_q220_pdp-image-4.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 105990,
          category: 'mac'
      },
      {
          id: 7,
          title: "BookMac Pro Core i9",
          img: "https://cdn.svyaznoy.ru/upload/iblock/264/macbook-pro-13_4ports_silver_pdp_1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/265/macbook-pro-13_4ports_silver_pdp_2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/ef6/macbook-pro-13_4ports_silver_pdp_3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/77f/macbook-pro-13_4ports_silver_pdp_5.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 239990,
          category: 'mac'
      },
      {
          id: 8,
          title: "iMac Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/bd7/ruru_imac-pro_q320_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/661/ruru_imac-pro_q320_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/4ab/ruru_imac-pro_q320_pdp-image-3.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/94b/ruru_imac-pro_q320_pdp-image-4.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 369990,
          category: 'mac'
      },
      {
          id: 9,
          title: "iPad Pro 12,9",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/cf8/787_862_17f5c944b3b71591cc9304fac25365de2/cf8a15710719f68373b2b8be75bb5806.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/37c/444_862_17f5c944b3b71591cc9304fac25365de2/37cfcb56a23c877067025719592d333e.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/528/1160_880_17f5c944b3b71591cc9304fac25365de2/528874aa90e7fd72cb15bd3171d5c447.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/cd2/862_862_17f5c944b3b71591cc9304fac25365de2/cd2c9f01ee225f40e5703f505fd49192.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "iLorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 183990,
          category: 'pad'
      },
      {
          id: 10,
          title: "iPad Pro 11",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/436/760_861_17f5c944b3b71591cc9304fac25365de2/4360818806ffb4a7cdd6b27e13707687.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/e37/436_860_17f5c944b3b71591cc9304fac25365de2/e37e5f1b146d9abbe5dcdf51c033418c.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/81c/1160_880_17f5c944b3b71591cc9304fac25365de2/81c9dac9140d34cc8dd47d7c0835bf65.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/cd2/862_862_17f5c944b3b71591cc9304fac25365de2/cd2c9f01ee225f40e5703f505fd49192.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 190990,
          category: 'pad'
      },
      {
          id: 11,
          title: "iPad Air",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/642/1160_880_17f5c944b3b71591cc9304fac25365de2/642c6530d29f10cd6c93be76b4c14587.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/cff/1160_880_17f5c944b3b71591cc9304fac25365de2/cff78842a8ec789a5655f2193a8c0e2f.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/d76/1160_880_17f5c944b3b71591cc9304fac25365de2/d76825d0725b50035c8a63d967a60a7e.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/86f/1160_880_17f5c944b3b71591cc9304fac25365de2/86f16877c8d1f3a0ea5ba85c519e26fa.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 69990,
          category: 'pad'
      },
      {
          id: 12,
          title: "iPad mini",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/4e9/1160_880_17f5c944b3b71591cc9304fac25365de2/4e9c94e63a00a9f97513ef26945f7b76.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/025/1160_880_17f5c944b3b71591cc9304fac25365de2/025f9b38db03064c45be9da9c6dafa40.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/e8c/1160_880_17f5c944b3b71591cc9304fac25365de2/e8c9e94fac4a24a51d908529864d4dfb.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/e8c/1160_880_17f5c944b3b71591cc9304fac25365de2/e8c9e94fac4a24a51d908529864d4dfb.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 58990,
          category: 'pad'
      },
      {
          id: 13,
          title: "Banana TV 4K",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/a2e/1160_880_17f5c944b3b71591cc9304fac25365de2/a2e959d991c86be7698117412f7e6456.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/975/1160_880_17f5c944b3b71591cc9304fac25365de2/975ef2dd6632aac67f10e9295d51d8a7.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/899/1160_800_17f5c944b3b71591cc9304fac25365de2/8999599d5387d566ac2a82880d75312b.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/371/1160_800_17f5c944b3b71591cc9304fac25365de2/3714e6c74ee6089af77ddec0b5acf5c4.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 16990,
          category: 'accses'
      },
      {
          id: 14,
          title: "AirPods Pro",
          img: "https://cdn.svyaznoy.ru/upload/iblock/4951d12052c4c8829ac746c59d1032b1/11.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/627/12.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/9b1/13.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/668/14.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 19499,
          category: 'accses'
      },
      {
          id: 15,
          title: "Apple Watch Series 3",
          img: "https://cdn.svyaznoy.ru/upload/iblock/280/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-1.jpg",
          img1: "https://cdn.svyaznoy.ru/upload/iblock/5fa/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-2.jpg",
          img2: "https://cdn.svyaznoy.ru/upload/iblock/7df/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-4.jpg",
          img3: "https://cdn.svyaznoy.ru/upload/iblock/51a/ruru_apple-watch-series3-gps-aluminum-white_sport_band_38mm_pdp-image-6.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 16990,
          category: 'accses'
      },
      {
          id: 16,
          title: "MagSafe",
          img: "https://static.re-store.ru/upload/resize_cache/iblock/b5b/1160_880_17f5c944b3b71591cc9304fac25365de2/b5b1ba71f35a25a60ae53ee6fbf862fe.jpg",
          img1: "https://static.re-store.ru/upload/resize_cache/iblock/271/1160_880_17f5c944b3b71591cc9304fac25365de2/271b9cc494ad5c13d5c4aade80d29a62.jpg",
          img2: "https://static.re-store.ru/upload/resize_cache/iblock/e52/1160_880_17f5c944b3b71591cc9304fac25365de2/e5285f2acff39222ce6629bc2717aaef.jpg",
          img3: "https://static.re-store.ru/upload/resize_cache/iblock/e52/1160_880_17f5c944b3b71591cc9304fac25365de2/e5285f2acff39222ce6629bc2717aaef.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          fullDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error voluptates, consequatur ex amet expedita officiis nulla quasi ducimus maiores, neque ipsam, tenetur officia asperiores dolor obcaecati exercitationem debitis. Placeat, illo.",
          price: 3490,
          category: 'accses'
      }
  ]},

  getters: {
    allPhone(state){
      return state.devices.filter(device => device.category == 'phone')
    },
    allMac(state){
      return state.devices.filter(device => device.category == 'mac')
    },
    allPad(state){
      return state.devices.filter(device => device.category == 'pad')
    },
    allAccses(state){
      return state.devices.filter(device => device.category == 'accses')
    },
    getDeviceById: state => (id) => {
      return state.devices.filter(device => device.id == id)[0];
    },
    getUsers(state){
      return state.usersName;
    }
  },

  mutations: {

    addToOrder(state, {device}){
      if(state.order.find(item => item.id === device.id)){
        device.quantity ++;
        device.totalprice = device.price * device.quantity;
      }else{
        state.order.push(device);
        device.quantity = 1;
        device.totalprice = device.price;
      }
      state.count ++;
      state.totalSum = state.totalSum + device.price;
  },

  getLess(state, {device}){
    let index = state.order.indexOf(device);
    if(index>-1){
        if(state.order[index].quantity == 0){
          state.order.splice(index, 1);
          state.count -= 1;
        } else{
          state.order[index].quantity -= 1;
          state.order[index].totalprice = state.order[index].price * state.order[index].quantity;
          state.totalSum -= state.order[index].price;
          state.count -= 1;
        }
    }
  },

  getMore(state, {device}){
    let index = state.order.indexOf(device);
    if(index>-1){
        state.order[index].quantity += 1;
        state.totalSum -= state.order[index].totalprice;
        state.order[index].totalprice = state.order[index].price * state.order[index].quantity;
        state.totalSum += state.order[index].totalprice;
        state.count += 1;
    }
  },

  removeFromOrder(state, {device}) {
    let index = state.order.indexOf(device);
    if (index > -1) {
        state.count -= state.order[index].quantity;
        state.totalSum -= state.order[index].totalprice;
        state.order.splice(index, 1);
    }
},

clearOrder(state){

  state.count = 0;
  state.totalSum = 0;
  while(state.order.length){
    state.order.pop();
  }
},

getTotalSum(state){
  for(let item of state.order){
    state.totalSum += item.totalprie;
  }
  return state.totalSum;
},
}
})
