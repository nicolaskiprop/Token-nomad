import axios from "axios";

export const fetchHotLiquidityPools = async() => {
    try {
        const { data } = await axios({
            method:'get',
            url:'https://eigenphi.io/api/v2/arbitrage/stat/lp/hotLp/?chain=ethereum&pageSize=1000&period=7&sortBy=volume'
        })
        const hotPools = data.result
        console.log(hotPools);
         
    } catch (error) {
        console.log(`error :${error}`);
        
    }
}