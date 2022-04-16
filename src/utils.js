/** Yields all values from start(inclusive) to end(exclusive), incrementing by step each time
 * @param {number} start the start of the range (inclusive)
 * @param {number} end the end of the range (exclusive)
 * @param {number} step the size of the incrememnt from step to step
 */
export function range(start,end,step=1){
    if(Math.sign(end-start)==Math.sign(step)){
        for(let i = start;i<end;i+=step){
            yield i;
        }
    }
}