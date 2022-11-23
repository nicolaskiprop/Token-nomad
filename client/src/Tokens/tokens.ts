import axios from "axios";
import { opts } from "../utils/common";

export const fetchTokens = async () => {
    try {
        const { data } = await axios({
            url: "https://eigenphi.io/api/v1/arbitrage/stat/token/hotToken/",
            params: {
                chain: "ethereum",
                pageSize: 10,
                period: 7,
                sortBy: "tv",
            },
        })

        // console.log(data)
        return data.result
    } catch (error) {
        console.log(error);
        return []
    }
}

// permutations
const permutations = (_list: any, _maxLength: number) => {
    // empty list has one permutation
    if (_maxLength == 0) {
        return [[]]
    }
    let result: any = [];

    for (let i = 0; i < _list.length; i++) {
        let copy = Object.create(_list);
        // cut one element from list
        let head = copy.splice(i, 1);

        let rest = permutations(copy, _maxLength - 1);

        // add head to each permutation of rest of list
        for (let j = 0; j < rest.length; j++) {
            let next: any = head.concat(rest[j])
            result.push(next);
        }
    }
    return result;
}

export const generatePaths = async (opts: {
    maxLength: number;
    buildEigenphiUrl: string
}) => {
    try {
        // get record form eigrnphi token api
        const { data } = await axios.get(opts.buildEigenphiUrl)
        const tokens = data.result;
        const paths = permutations(tokens, opts.maxLength)
        console.log('paths', paths);

        return paths.map((_paths: any) => {
            let newPath = _paths.map((_pa: any) => {
                return { 
                    address: _pa.address,
                    symbol: _pa.symbol
                }
            })
            let p = [...newPath, newPath[0]];
            return p
        })
        
    } catch (error : any) {
       return {
        error: `generatePaths : Error = > ${error}`
       }
    }
}


