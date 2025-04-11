/****************************************************************************************** 
 * CHARACTER INPUT PROCESSING FUNCTIONS
 * Functions to read and tokenize input stream of G Code. 
 ****************************************************************************************** 
*/

export {InputStream, createInputStream}

/**
 * @brief Process input character stream.
 * @param input G Code character input 
 * @returns InputStream object 
 */
type InputStream = {
    next: () => string;
    peek: () => string;
    eof: () => boolean;
    cantParse: (msg: string) => never;
};

/**
 * todo 
 * @param input 
 * @returns 
 */
function createInputStream(input: string): InputStream {
    let position: number = 0;
    let line: number = 1;
    let column: number = 0;

    /**
     *  todo 
     * @returns 
     */
    function next(): string {
        const character = input.charAt(position++);
        if (character === "\n") {
            line++;
            column = 0;
        } else {
            column++;
        }
        return character;
    }

    /**
     * todo 
     * @returns 
     */
    function peek(): string {
        return input.charAt(position);
    }

    /**
     * todo 
     * @returns 
     */
    function eof(): boolean {
        return peek() === "";
    }

    /**
     * todo 
     * @returns 
     */
    function cantParse(msg: string): never {
        throw new Error(`${msg} at line: ${line} (${line}:${column})`);
    }

    return {
        next,
        peek,
        eof,
        cantParse,
    };
}
