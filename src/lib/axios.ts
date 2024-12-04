import axios from "axios";

export const api = axios.create({ 
  baseURL: 'http://localhost:3000',
 })




//  const url = new URL('/transactions');

//       if (query) { 
//         url.searchParams.append('q', query);
//       }

//       const response = await fetch(url)
//       const data = await response.json();