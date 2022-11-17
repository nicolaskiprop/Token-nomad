import axios from "axios";

export const fetchHotLiquidityPools = async() => {
    try {
        const { data } = await axios({
            method:'get',
            url:'https://eigenphi.io/api/v2/arbitrage/stat/lp/hotLp/?chain=ethereum&pageSize=1000&period=7&sortBy=volume'
        })
        const hotPools = data.result
        console.log(hotPools);
        let tokenData: any ={}
        let pools: any =[]

        // Format data to caapture what is required
        // const dbPools = hotPools.map((pool: any) =>{
        //     const lpAddress = pool.lpAddress;
        //     const tokens = pool.tokens;

        //     const token0 = tokens[0].address
        //     const token1 = tokens[1].address

        //     tokenData[token0] = tokens[0]
        //     tokenData[token1] = tokens[1]

        //     pools.push([token0, token1])

        //     return {lpAddress, token0, token1}

        // })

        // return { pools, dbPools, tokenData }
        
    } catch (error) {
        console.log(`error :${error}`);
        
    }
}