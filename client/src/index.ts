import {  fetchTokens, generatePaths } from "./Tokens/tokens";
import { opts } from "./utils/common";

const main = async() =>{
console.log('***********Starting the arbitrage bot******************');
   const data =  await fetchTokens()
   const combined = await generatePaths(opts)
   console.log(combined);
   
}
main()