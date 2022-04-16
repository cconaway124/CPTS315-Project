import { range } from "./utils";

/** Returns a kernel (a sliding window) of some iterable
 * @template T the type of items in the iterable
 * @param {Iterable<T>} items the iterable to kernelize
 * @param {number} size the size of each kernel
 */
function* kernelize(items, size){
    const tokenArray = Array.from(items);
    for(let i = 0, end=tokenArray.length-size; i < end;i++){
        yield tokenArray.slice(i,i+size)
    }
}

console.log(...kernelize([0,1,2,3,4],2))