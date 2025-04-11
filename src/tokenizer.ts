/****************************************************************************************** 
 * TODO
 ****************************************************************************************** 
*/

export {Token, TokenStream, createTokenStream}

type Token = 
    | { type: "f_code", value: string }
    | { type: "g_code", value: string }
    | { type: "m_code", value: string }
    | { type: "s_code", value: string }
    | { type: "d_register", value: string }
    | { type: "h_register", value: string }
    | { type: "t_register", value: string }
    | { type: "coordinate", value: string }
    | { type: "radius", value: string }
    | { type: "num", value: number }
    | { type: "kw" | "var", value: string }
    | { type: "eol", value: string };

type TokenStream = {
    next: () => Token | null;
    peek: () => Token | null;
    eof: () => boolean;
    cantParse: (msg: string) => never;
};

function createTokenStream(input: any): TokenStream {
    let current: Token | null = null;

    function isCode(character: string): boolean {
        return /[DFGHMST]/.test(character);
    }

    function isCoordinate(character: string): boolean {
        return /[XYZ]/.test(character);
    }

    function isRadius(character: string): boolean {
        return /[IJR]/.test(character);
    }

    function isEol(ch: string): boolean {
        return ";".indexOf(ch) >= 0;
    }

    function isWhitespace(ch: string): boolean {
        return " \t\n".indexOf(ch) >= 0;
    }

    function isAcceptedCharacter(ch: string): boolean {
        return /[DFGHIJMNORSTXYZ]/i.test(ch) || "-.0123456789".indexOf(ch) >= 0;
    }

    function readCode(character: string): Token {
        let codeId = readWhile(isAcceptedCharacter);

        switch (character) {
            case "D":
                return { type: "d_register", value: codeId };
            case "F": 
                return { type: "f_code", value: codeId };
            case "H":
                return { type: "h_register", value: codeId};
            case "G":
                return { type: "g_code", value: codeId };
            case "M": 
                return { type: "m_code", value: codeId };
            case "S": 
                return { type: "s_code", value: codeId };
            case "T": 
                return { type: "t_register", value: codeId }
        }
        return { type: "g_code", value: codeId};    // todo 
    }

    function readCoordinate(character: string): Token {
        let coordinate = readWhile(isAcceptedCharacter);
        return { type: "coordinate", value: coordinate};
    }

    function readRadius(): Token {
        let radius = readWhile(isAcceptedCharacter);
        return { type: "radius", value: radius };
    }

    function skipComment(): void {
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

        const ch = input.peek();

        // G Code comments are encased in ( )
        if (ch === "(") {
            skipComment();
            return readNext();
        }

        // G Code programs start and end with "%"
        if (ch === "%") {
            return null; 
        }

        if (isCode(ch)) return readCode(ch);
        if (isCoordinate(ch)) return readCoordinate(ch);
        if (isRadius(ch)) return readRadius();
        if (isEol(ch)) return { type: "eol", value: input.next() };
        input.cantParse("Can't handle character: " + ch);
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
