function isTriangle(a, b, c) {
    if (a * b * c == 0) return false;
    if (a >= b + c || b >= a + c || c >= a + b) return false;
    return true;
}