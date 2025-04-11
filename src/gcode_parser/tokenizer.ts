/****************************************************************************************** 
 * TODO
 ****************************************************************************************** 
*/

export { Token, TokenStream, createTokenStream }

/**
 * Token todo
 */
type Token = 
    | { type: "feed_rate", code: string, value: number }
    | { type: "g_code", code: string, value: number }
    | { type: "m_code", code: string, value: number }
    | { type: "spindle_speed", code: string, value: number }
    | { type: "register", code: string, value: number }
    | { type: "coordinate", code: string, value: number }
    | { type: "radius", code: string, value: number }
    | { type: "eol", code: string, value: string }

type TokenStream = {
    next: () => Token | null;
    peek: () => Token | null;
    eof: () => boolean;
    cantParse: (msg: string) => never;
};

function createTokenStream(input: any): TokenStream {
    let current: Token | null = null;

    /**
     * Check whether the current character is the start of a machine control code
     * (G code or M code).
     * @param character Input character being processed.
     * @returns True if the character starts a G code or M code, false otherwise.
     */
    function isControlCode(character: string): boolean {
        return /[GM]/.test(character);
    }
 
    /**
     * Read code into Token corresponding to the type of machine control code (G code or M code).
     * @returns Token with type corresponding to code type. 
     */
    function readControlCode(): Token | null {
        let controlCode = readWhile(isAcceptedCharacter);

        switch (controlCode.slice(0, 1)) {
            case "G":
                return { type: "g_code", code: "G", value: parseInt(controlCode.slice(1)) };
            case "M": 
                return { type: "m_code", code: "M", value: parseInt(controlCode.slice(1)) };
        }
        return null;
    }
    

    /**
     * Check whether input character starts a register code.
     * @param character Input character being processed.
     * @returns True if character starts a register code, false otherwise.
     */
    function isRegister(character: string): boolean {
        return /[DHT]/.test(character);
    }

    /**
     * todo
     * @returns 
     */
    function readRegister(): Token | null {
        let registerCode = readWhile(isAcceptedCharacter);

        switch (registerCode.slice(0, 1)) {
            case "D":
                return { type: "register", code: "D", value: parseInt(registerCode.slice(1)) };
            case "H":
                return { type: "register", code: "H", value: parseInt(registerCode.slice(1)) };
            case "T": 
                return { type: "register", code: "T", value: parseInt(registerCode.slice(1)) };
        }
        return null;
    }

    /**
     * Check whether input character starts a feed rate code. 
     * @param character Input character being processed.
     * @returns True if character starts a feed rate code, false otherwise.
     */
    function isFeedRate(character: string): boolean {
        return /[F]/.test(character);
    }

    /**
     * todo 
     * @returns 
     */
    function readFeedRate(): Token | null {
        let feedRateCode = readWhile(isAcceptedCharacter);
        return { type: "feed_rate", code: "F", value: parseFloat(feedRateCode.slice(1)) };
    }

    /**
     * Check whether input character starts a spindle speed code.
     * @param character Input character being processed.
     * @returns True if character starts a spindle speed code, false otherwise.
     */
    function isSpindleSpeed(character: string): boolean {
        return /[S]/.test(character);
    }

    /**
     * 
     * @returns 
     */
    function readSpindleSpeed(): Token | null {
        let spindleSpeedCode = readWhile(isAcceptedCharacter);
        return { type: "spindle_speed", code: "S", value: parseInt(spindleSpeedCode.slice(1)) };
    }

    /**
     * Check whether the current character starts a coordinate move instruction.
     * @param character Input character being processed.
     * @returns True if the character starts a coordinate move, false otherwise.
     */
    function isCoordinate(character: string): boolean {
        return /[XYZ]/.test(character);
    }

    /**
     * 
     * @returns 
     */
    function readCoordinate(): Token {
        let coordinateCode = readWhile(isAcceptedCharacter);
        return { type: "coordinate", code: coordinateCode.slice(0, 1), value: parseFloat(coordinateCode.slice(1))};
    }

    /**
     * Check whether the current character starts a radius/circular move instruction.
     * @param character Input character being processed.
     * @returns True if the character starts a radius/circular move, false otherwise.
     */
    function isRadius(character: string): boolean {
        return /[IJR]/.test(character);
    }
    
    /**
     * todo 
     * @returns Token of radius type, with address of 
     */
    function readRadius(): Token {
        let radiusCode = readWhile(isAcceptedCharacter);
        return { type: "radius", code: radiusCode.slice(0, 1),  value: parseFloat(radiusCode.slice(1)) };
    }

    /**
     * Check whether the current character is an end-of-line character.
     * A semicolon (";") ends a line of G Code.
     * @param character Input character being processed.
     * @returns True if the character is an end-of-line (;), false otherwise.
     */
    function isEol(character: string): boolean {
        return ";".indexOf(character) >= 0;
    }

    /**
     * Check whether the current character is whitespace.
     * @param character Input character being processed.
     * @returns True if the input character is whitespace, false otherwise.
     */
    function isWhitespace(character: string): boolean {
        return " \t\n".indexOf(character) >= 0;
    }

    /**
     * Helper function to check whether the current character is an acceptable G Code
     * language character (restricted alphabetical characters, digits, .-). 
     * @param character Input character being processed. 
     * @returns True if the input character is an acceptable G Code character, false otherwise.
     */
    function isAcceptedCharacter(character: string): boolean {
        return /[DFGHIJMNORSTXYZ]/i.test(character) || "-.0123456789".indexOf(character) >= 0;
    }

    /**
     * Helper function to skip comments and program numbers.
     */
    function skipLine(): void {
        readWhile((ch) => ch !== "\n");
        input.next();
    }

    function readWhile(predicate: (ch: string) => boolean): string {
        let str = "";
        while (!input.eof() && predicate(input.peek()))
            str += input.next();
        return str;
    }

    function readNext(): Token | null {
        readWhile(isWhitespace);

        if (input.eof()) return null;

        const character = input.peek();

        // Skip comments and program numbers
        // G Code comments are encased in ( )
        // G Code program numbers start with O
        if (character === "(" || character === "O") {
            skipLine();
            return readNext();
        }

        // G Code programs start and end with "%"
        if (character === "%") {
            return null; 
        }

        if (isControlCode(character)) return readControlCode();
        if (isRegister(character)) return readRegister();
        if (isFeedRate(character)) return readFeedRate();
        if (isSpindleSpeed(character)) return readSpindleSpeed();
        if (isCoordinate(character)) return readCoordinate();
        if (isRadius(character)) return readRadius();
        if (isEol(character)) return { type: "eol", code: "eol", value: input.next() };
        input.cantParse("Invalid character: " + character);
        return null;
    }

    function peek(): Token | null {
        return current || (current = readNext());
    }

    function next(): Token | null {
        const token = current;
        current = null;
        return token || readNext();
    }

    /**
     * Check for End of File.
     * @returns true if reached end of file, false otherwise.
     */
    function eof(): boolean {
        return peek() === null;
    }

    return {
        next,
        peek,
        eof,
        cantParse: input.cantParse
    };
}
