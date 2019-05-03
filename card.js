class Card {
    constructor(data, isMale) {
        this.front = data.data;
        this.id = data.id;
        this.back = "./assets/decks/card_backs/" + (data, isMale ? "M" : "F") + ".png";
        this.visible = false;
        this.from = (data, isMale ? "M" : "F");
    }

    flip() {
        this.visible = !this.visible;
    }

    getContent() {
        return ( this.visible ? this.front : this.back );
    }
}