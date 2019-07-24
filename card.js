class Card {
    constructor(data, isMale) {
        this.front = data.data;
        this.id = data.id;
        this.back = "./assets/decks/card_backs/" + (data, isMale ? "M" : "F") + ".png";
        this.flipped = false;
        this.from = (data, isMale ? "M" : "F");
    }

    flip() {
        this.flipped = !this.flipped;
    }

    getContent() {
        return ( this.flipped ? this.front : this.back );
    }
}