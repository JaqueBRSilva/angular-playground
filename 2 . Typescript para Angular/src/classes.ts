// CLASSES

/** DATA MODIFIERS
 * 
 * public
 * private
 * protected
 */

class Character {
  protected name?: string;
  readonly strength: number;
  skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }
}

// Character: SUPERCLASS
// Magician: SUBCLASS

class Magician extends Character {
  magicPoints: number;
  
  constructor(
    name: string,
    strength: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, strength, skill);
    this.magicPoints = magicPoints;
  }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 09, 30, 100);
p1.skill = 12;
