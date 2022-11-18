import { fetchHotLiquidityPools } from "./Tokens/tokens";

const main = async() =>{
console.log('***********Starting the arbitrage bot******************');
await fetchHotLiquidityPools()
}
main()