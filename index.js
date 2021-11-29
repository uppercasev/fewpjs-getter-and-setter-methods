// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set diameter(number) {
        if (number > 0) {
            this.radius = number / 2;
        } else {
            throw new Error('Diameter cannot be less than 0.');
        }
    }
    set circumference(number) {
        if (number > 0) {
            this.radius = number / (Math.PI * 2);
        } else {
            throw new Error('Circumference cannot be less than 0.');
        }
    }
    set area(number) {
        if (number > 0) {
            this.radius = Math.sqrt(number / Math.PI);
        } else {
            throw new Error('Area cannot be less than 0.');
        }
    }
}