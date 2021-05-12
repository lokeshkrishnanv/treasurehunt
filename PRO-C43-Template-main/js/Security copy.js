class SecurityCopy {

    constructor(){

        this.access4 = createInput("A4")
        this.access4.position(110,90);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(110,120);
        this.button4.style('background', 'lightgrey');    

        this.access5 = createInput("A5")
        this.access5.position(710,190);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(710,220);
        this.button5.style('background', 'lightgrey');

        this.access6 = createInput("A6")
        this.access6.position(110,310);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(110,340);
        this.button6.style('background', 'lightgrey');
        
    }

    display(){

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        });
    }
}