class Profile {
    constructor(name, decks, index) {
        this.name = name
        this.decks = decks
        this.index = index
    }

    get name() {
        return this.name;
    }

    set name(newName) {
        this.name = newName;
    }

    get decks() {
        return this.decks;
    }

    set decks(newDecks) {
        this.decks = newDecks;
    }

    get index() {
        return this.index;
    }

    set index(newIndex) {
        this.index = newIndex;
    }
}