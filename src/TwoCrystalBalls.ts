/*
*   Optimizing algorithm.
*
*   Optimize the process of determining the precise location at
*   which two crystal balls will break when dropped from a significant height.   
*
*   The breaks array return the infomration if the ball has expoloed [false, false, false, false, false, true, true...] 
*   we.
*   Basically, we want to find the first position of 1.   
*
*   What is the complexity your algorithm ?
*/

export default function twoCrystalBalls(breaks: boolean[]): number {
    return breaks.findIndex( test => test );
} 