import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_PAGE,
  FILTER_CONTINENT,
  FILTER_NAME_ACTIVITY,
  ORDER_POPULATION,
  ORDER
} from './actions.js'


const initialState = {
  countries: [],
  countriesModifed: [],
  country:{},
  nameActivity:'',
  page:1,
}

function reducer (state = initialState, { type, payload }){
  switch (type) {

    case GET_ALL_COUNTRIES:
      return {
        ...state, countries: payload, countriesModifed: payload
      }

    case GET_COUNTRY_BY_ID:
      return {
        ...state, country: payload
      }

    case SET_PAGE:
      return {
        ...state, page: payload
      }

    case FILTER_CONTINENT:
      if(payload === 'All') return state
      const countriesForContinent = state.countries.filter(country => country.continent === payload)
      return {
        ...state, countriesModifed: countriesForContinent
      }

    case FILTER_NAME_ACTIVITY:
      const countriesForActivity = state.countries.filter(country => country.activity.name === payload);
      return {
        ...state, countriesModifed: countriesForActivity
      }

    case ORDER_POPULATION:
      let resultPopulation = state.countriesModifed;
      if(payload === 'none'){
        return state
      }else if(payload === 'min'){
        resultPopulation = resultPopulation.sort((a, b) => a.population - b.population)
      }else {
        resultPopulation = resultPopulation.sort((a, b) => b.population - a.population)
      }
      return {
        ...state, countriesModifed: resultPopulation
      }

    case ORDER:
      let resultOrder = state.countriesModifed;
      if(payload === 'none'){
        return state
      }else if(payload === 'asc'){
        resultOrder = resultOrder.sort((a,b) =>{
          return a.name.localeCompare(b.name)
        })
      }else {
        resultOrder = resultOrder.sort((a,b) =>{
          return b.name.localeCompare(a.name)
        })
      }
      return {
        ...state, countriesModifed: resultOrder
      }

    default:
      return state;
  }
}

export default reducer;
