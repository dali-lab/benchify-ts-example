// mathHelpers.ts

export function factorial(n: number): number {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

export function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

export function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

export function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

export function fibonacci(n: number): number[] {
    if (n < 0) {
        throw new Error('Fibonacci sequence is not defined for negative numbers');
    }
    const fib: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

export function squareRoot(x: number): number {
    if (x < 0) {
        throw new Error('Cannot compute the square root of a negative number');
    }
    return Math.sqrt(x);
}

export function sin(degrees: number): number {
    const radians = degrees * (Math.PI / 180);
    return Math.sin(radians);
}

export function cos(degrees: number): number {
    const radians = degrees * (Math.PI / 180);
    return Math.cos(radians);
}

export function tan(degrees: number): number {
    const radians = degrees * (Math.PI / 180);
    return Math.tan(radians);
}

export function log(base: number, x: number): number {
    return Math.log(x) / Math.log(base);
}

export function mean(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum / arr.length;
}

export function median(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function standardDeviation(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    const m = mean(arr);
    const variance = mean(arr.map(x => (x - m) ** 2));
    return Math.sqrt(variance);
}
