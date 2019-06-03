class Card {
    constructor(data, isMale, name) {
        this.id = data.id;
        //this.front = data.pic;
        //this.back = "./assets/decks/card_backs/" + (data, isMale ? "M" : "F") + ".png";
        this.front = name + "_" + data.id;
        this.back = (isMale ? "m" : "f") + "Back";
        this.visible = false;
        this.name = name;
        this.dob = data.dob;
        this.age = data.age;
        this.from = (data, isMale ? "M" : "F");
    }

    flip() {
        this.visible = !this.visible;
    }

    getContent() {
        return ( this.visible ? this.front : this.back );
    }
}