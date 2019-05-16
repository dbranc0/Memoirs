let male = {
    name: "Paulo",
    dob: "01/01/80",
    pics: [
        {pic:"./assets/decks/M/king_of_clubs2.png", id:1, age:"5 months"}, 
        {pic:"./assets/decks/M/king_of_diamonds2.png", id:2, age:"5 months"}, 
        {pic:"./assets/decks/M/king_of_hearts2.png", id:3, age:"5 months"}, 
        {pic:"./assets/decks/M/king_of_spades2.png", id:4, age:"5 months"}
    ]     
};

let female = {
    name: "Joana",
    dob: "01/01/80",
    pics: [
            {pic:"./assets/decks/F/queen_of_clubs2.png", id:1, age:"5 months"}, 
            {pic:"./assets/decks/F/queen_of_diamonds2.png", id:2, age:"5 months"}, 
            {pic:"./assets/decks/F/queen_of_hearts2.png", id:3, age:"5 months"}, 
            {pic:"./assets/decks/F/queen_of_spades2.png", id:4, age:"5 months"} 
        ]
    };

this.config = {
    type:Phaser.AUTO,
    width:1900,
    height:950,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y:200}
        }
    },
    //scene: [ TableScene ],
    //decks: [male, female]
    };
    this.game = new Phaser.Game(this.config);
    this.game.scene.add('TableScene', TableScene, true, [male, female]);
    console.log(this.game);