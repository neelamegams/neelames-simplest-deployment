module.exports = function (){
    this.on('ping', () => "pong")
    this.on('hello', (req) => `Hello ${req.data.to}!`)
    this.on('sum', ({data:{a,b}}) => a+b)
}