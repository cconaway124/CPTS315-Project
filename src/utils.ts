/** Yields all values from start(inclusive) to end(exclusive), incrementing by step each time
 * @param {number} start the start of the range (inclusive)
 * @param {number} end the end of the range (exclusive)
 * @param {number} step the size of the incrememnt from step to step
 */
export function* range(start:number,end:number,step:number=1){
    if(Math.sign(end-start)==Math.sign(step)){
        for(let i = start;i<end;i+=step){
            yield i;
        }
    }
}

/** Returns a list of kernels (sliding windows) of some iterable
 * @template T the type of items in the iterable
 * @param {Iterable<T>} items the iterable to kernelize
 * @param {number} size the size of each kernel
 */
 export function* kernelize<T>(items:Iterable<T>, size:number){
    const itemsArray = Array.from(items);
    if(itemsArray.length<size){
        yield itemsArray
    }
    for(let i = 0, end=itemsArray.length-size+1; i < end;i++){
        yield itemsArray.slice(i,i+size)
    }
}
