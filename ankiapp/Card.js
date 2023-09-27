class Card {
    constructor(front, back, tag) {
        this.front = front
        this.back = back
        this.tag = tag
    }

    get front() {
        return this.front;
    }

    set front(newFront) {
        this.front = newFront;
    }

    get back() {
        return this.back;
    }

    set back(newBack) {
        this.back = newBack;
    }

    get tag() {
        return this.tag;
    }

    set tag(newTag) {
        this.tag = newTag;
    }
}