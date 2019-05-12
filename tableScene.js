class TableScene extends Phaser.Scene {
    constructor() {
        super({key:"TableScene"});
    }

    preload() {
        this.preload.image('Table','assets/table.jpg');
    }

    create() {
        this.table = this.add.image(400,400,'Table');
        this.table.create();
    }
}