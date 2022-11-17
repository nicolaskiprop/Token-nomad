import { fetchHotLiquidityPools } from "./Tokens/tokens";

const main = async() =>{
console.log('***********Starting the arbitrage bot******************');
try {
    const poolData =  await fetchHotLiquidityPools()
    console.log(poolData);
    
    // const tokenData = poolData?.tokenData
    // const poolToSave = poolData?.dbPools
    // let pools = poolData?.pools
    // console.log('pools fetched', pools.length);
} catch (error) {
    console.log(`error : ${error}`);  
    

}
}
main()