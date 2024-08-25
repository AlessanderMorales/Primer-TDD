import Bisiesto from "./bisiesto.js";

describe('Verifica si un año es bisiesto', () => {
    it("Debe retornar true para el año 2000", () => {
        expect(Bisiesto(2000)).toBe(true);
    });

    it("Debe retornar false para un año divisible por 100 pero no por 400 ej. 1700", () => {
        expect(Bisiesto(1700)).toBe(false);
    });

    it("Todos los años divisible 4 son divisible", () =>{
        expect(Bisiesto(2008)).toBe(true);
    })
});

