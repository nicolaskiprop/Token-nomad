import { fetchHotLiquidityPools} from "./Tokens/tokens";

const main = async() =>{
console.log('***********Starting the arbitrage bot******************');
const hotPools = await fetchHotLiquidityPools()
// await permuteData(hotPools)
}
main()