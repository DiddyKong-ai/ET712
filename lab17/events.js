const events =require('events')
const util = require('util')

const teams = function(name){
    this.name = name
}
// eventEmitter will inherent any teams construct
util.inherits(teams, events.EventEmitter)

const Mario = new teams('Mario')
const Sonic = new teams('Sonic')

// save each constructor in an array
const teamsArray = [Mario, Sonic]

// print each team using forEach loop
teamsArray.forEach((t)=>{
    t.on('nation', function(n){
        console.log(`${t.name} is ${n} football club!`)
    })
})

Sonic.emit('nation', 'Italian')

/*
const eventEmitter = new events.EventEmitter

eventEmitter.on('test', function(a){
    console.log(a)
})

eventEmitter.emit('test','EVENTS IN NODEJS')
*/