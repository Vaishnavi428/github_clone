import React, { useEffect, useState } from 'react';
import { paginate } from './utils'

const url = 'https://api.github.com/users/fabpot/followers?per_page=100'

export const useFetch = () => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true)

const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };
  
useEffect(() => {
  getUsers()
}, [])


return { loading, data }
}
