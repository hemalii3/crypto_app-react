import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {server} from "../index"
import { Container } from '@chakra-ui/react';

const Exchanges = () => {

  const [exchanges , setexchanges]=useState([]);

  useEffect(() => {
    const fetchexchanges = async ()=>{
      const {data} = await axios.get(`${server}/exchanges`)
      setexchanges(data);
    }
    fetchexchanges();
  
  },[]);
 
  return (
    <Container>
      <h1>4:54</h1>

    </Container>
  )
}

export default Exchanges
