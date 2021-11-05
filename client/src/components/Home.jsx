import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllCountries} from '../redux/actions.js';
import Country from './Country.jsx';
import Paginado from './Paginado.jsx';
import FilterContinent from './FilterContinent.jsx';
import Order from './Order.jsx';
import OrderPopulation from './OrderPopulation.jsx'
import Search from './Search.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const {countriesModifed, page} = useSelector(state => state);

  const countriesPerPage = 9;
  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countriesModifed.slice(indexOfFirstCountry,indexOfLastCountry);

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])

  return (
    <div className='Home'>
      <Search/>
      <FilterContinent/>
      <Order/>
      <OrderPopulation/>

      <div className='Countries'>
      {
        currentCountries?.map((country,i) => {
          return <Country
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
            key={i}
          />
        })
      }
      </div>
        <Paginado/>
    </div>
  )
}
