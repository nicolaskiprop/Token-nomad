import axios from "axios";


interface tokenSymbol {
    lpAddress:string
}
type tokenData = tokenSymbol[]

export const fetchHotLiquidityPools = async() => {
    try {
        const { data } = await axios({
            method:'get',
            url:'https://eigenphi.io/api/v2/arbitrage/stat/lp/hotLp/?chain=ethereum&pageSize=5&period=7&sortBy=volume'
        })
        const hotPools = data.result
    
        console.log(hotPools);
        const dataObtained = []

        for (let i = 0; i< hotPools.data.length; i++){
            for (let j = i + 1; j < hotPools.data.length; j++ ){
            const pool = hotPools.data[i]
            const {tradingVolume, changeRate, percentage, lpAddress} = pool
            // console.log({
            //     tradingVolume,
            //     changeRate,
            //     percentage,
            //     lpAddress
            // });
            dataObtained.push({lpAddress})
        }
           continue 
        }
        // console.log(dataObtained);
        
        return dataObtained
         
    } catch (error) {
        console.log(`error :${error}`);
        
    }
}

// export const permuteData = async(hotPools : tokenData) => {

//     let counter = 0
//     const length = Object.entries(hotPools[2]).length
//     console.log("len", length);
    
    
    // const symbolCombination:tokenData[] =[]

    // while(counter < length) {
        
    //     for (let i = 0; i < length; i++){
    //         for (let j = i + 1; j < length; j++) {
    //             const token: tokenData | undefined = symbolCombination[i];
    //             // if not token symbol, add new token to token combination 
    //             if (!token) {
    //                 symbolCombination.push([hotPools[i], hotPools[j]])
    //             }
    //             // if token, update token combination and append first token at the end
    //             if (token && token.length < 4){
    //                 symbolCombination[i].push(hotPools[j], hotPools[i])
    //             }
    //             continue
                
    //         }
    //         // swap array values
    //         if (i > 0 && i < length) {
    //             const nextToken = hotPools[i]
    //             const firstToken = hotPools[0]
    //             hotPools[0] = nextToken
    //             hotPools[i] = firstToken
    //         }
         
            
    //     }
    //     counter ++
    // }
    
    // console.log(symbolCombination) 
    // return symbolCombination




// }


