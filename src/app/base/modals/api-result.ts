import { Hit } from './hit'

export interface ApiResult {
    hits: Hit[],
    nbHits:number,
    page:number,
    nbPages:number,
    hitsPerPage:number,
    exhaustiveNbHits:boolean,
    query:string,
    params:string,
    processingTimeMS:number
}
