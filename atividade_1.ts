const nome: string = "Maria"
const idade: number = 30
const altura: number = 1.75
const estudante: boolean = true

const verificaParImpar = function(numero: number): string {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
};

const somatorio = function(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};

const fibonacci = function(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

class Retangulo {
    constructor(private largura: number, private altura: number) {}

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
};

export { altura, estudante, fibonacci, idade, nome, Retangulo, somatorio, verificaParImpar };

