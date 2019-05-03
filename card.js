class Card {
    constructor(data, isMale) {
        this.front = data.data;
        this.id = data.id;
        this.back = (data, isMale ? "M" : "F");
        this.visible = false;
    }

    flip() {
        this.visible = !this.visible;
    }

    getContent() {
        return ( this.visible ? this.front : this.back );
    }
}