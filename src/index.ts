import { range, kernelize } from "./utils";
import { Apriori } from "./apriori"

/** Returns all tokens from the provided files
 * @param {Iterable<string>} files the files to train on
 * @param {(text:string)=>Iterable<string>} parser a function which parsers a file to tokens
 * @param {number} size the size of each kernel
 */
type Parser = (text:string)=>Iterable<string>
function kernelizeFiles(files:Iterable<string>, parser:Parser, size:number){
    /** @type {string[][]} */
    const allTokens = []
    for(const file of files){
        allTokens.push(...kernelize(parser(file),size))
    }
    return allTokens;
}

/** Yields all tokens from the provided 
 * @param {string[][]} itemsets the itemsets to train on
 */
function associations(itemsets:string[][]){
    const alg = new Apriori.Algorithm(0, 0,true);
    const result = alg.analyze(itemsets)
    return result.associationRules.sort((a,b)=>b.confidence-a.confidence)
}

const pronouns = new Set([
    "i",
    "me",
    "you",
    "he",
    "she",
    "they"
])
const negations = new Set([
    "not",
    "can't"
])
const toBe = new Set([
    "is",
    "are",
    "am"
])
console.log(associations(
    kernelizeFiles(
        [
            "You are Bob",
            "Jane is not me",
            "You not is Nathan",
            "Jane not is Bob"
        ],
        x=>x.split(" ").map(t=>{
            const lowerT = t.toLowerCase()
            if(toBe.has(lowerT)){
                return "ToBe"
            }
            if(pronouns.has(lowerT)){
                return "Pronoun"
            }
            if(negations.has(lowerT)){
                return "Negation"
            }
            if(t[0]?.toUpperCase()==t[0]){
                return "ProperNoun"
            }
            return "ERR"
        }),
        4
    )
))