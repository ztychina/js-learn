let obj1 = {
    _year: 2023,
    edition: 0,
}
Object.defineProperty(obj1, 'year', {
    get:function(){
        return this._year;
    },
    set:function(val){
        if(val>2023){
            this._year = val;
            this.edition = this._year - 2023;
        }
    }
})
obj1.year = 2025;
console.log(obj1.year, obj1.edition);