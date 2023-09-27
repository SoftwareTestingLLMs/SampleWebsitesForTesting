class Deck {
    constructor(name, cards, index) {
        this.name = name
        this.cards = cards
        this.index = index
    }

    get name() {
        return this.name;
    }

    get cards() {
        return this.cards;
    }

    set name(newName) {
        this.name = newName;
    }

    set cards(newCards) {
        this.cards = newCards;
    }

    get index() {
        return this.index;
    }

    set index(newIndex) {
        this.index = newIndex
    }
}