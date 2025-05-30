function gcd(a: number, b: number): number {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a: number, b: number): number {
    return Math.abs(a * b) / gcd(a, b);
}
