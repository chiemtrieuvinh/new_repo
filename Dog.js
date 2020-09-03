function Dog(){
    this.stomach = []
}
Dog.prototype.eat = function (cat){
    this.stomach.push(cat)
    console.log(this.stomach)
}
module.exports = Dog