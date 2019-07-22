export class Developer {
    constructor(name, skillLevel, position) {
        this.name = name;
        this.skillLevel = skillLevel;
        this.position = position;
    }
    getFullName() {
        return `${this.skillLevel} ${this.position} ${this.name}`
    }
}

