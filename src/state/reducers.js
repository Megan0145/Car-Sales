import * as types from "./actionTypes";
const initialAdditionalPrice = 0;
const initialCar = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};

const initialStore = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

export function carReducer(state = initialCar, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      return {
        ...state,
        features: [...state.features, action.payload.feature]
      };
    case types.REMOVE_ITEM: 
       return {
           ...state,
           features: state.features.filter(feature => feature.id !== action.payload.id)
       }
    default:
      return state;
  }
}

export function storeReducer(state = initialStore, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export function additionalPriceReducer(state = initialAdditionalPrice, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      return (state += action.payload.feature.price);
    case types.REMOVE_ITEM:
        return (state -= action.payload.price)
    default:
      return state;
  }
}
