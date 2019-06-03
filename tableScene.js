class TableScene extends Phaser.Scene {
    constructor() {
        super({key: 'TableScene'});
    }

    init(data) {
        this.decks = [];
        data.forEach(deck => {
            this.decks.push(deck);
        });
        this.table = new Table(data[0], data[1]);
    }

    preload() {
        this.load.image('Table','assets/table.jpg');
        this.load.image('mBack','assets/decks/card_backs/M.png');
        this.load.image('fBack','assets/decks/card_backs/F.png');
        this.preloadCards();
    }

    create() {
        this.add.image(950,475,'Table');
        var x = 0;
        var y = 0;
        this.table.cardDealer.deal().forEach(card => {
            this.add.image(x,y,card.getContent());
            x += 100;
            y += 100;
        });
    }

    preloadCards() {
        this.decks.forEach(deck => {
            deck.pics.forEach(card => {
                this.load.image(deck.name + "_" + card.id, card.pic);
            });
        });
    }
}