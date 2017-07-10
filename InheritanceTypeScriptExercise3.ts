class baseObject
{
    width:number= 0;
    length:number =  0;
    };

class rectangle extends baseObject{
    constructor(width:number, length:number) {
        super();
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
    }
var rec = new rectangle(5,2);
console.log(rec.calcSize());