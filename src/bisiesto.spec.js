
import Bisiesto from "./bisiesto.js";

describe('Verefica si es año bisiesto', () => {
    it("Generar el mimo numero si" , () => {
        expect(Bisiesto(2000)).toEqual(true);
    });
});

