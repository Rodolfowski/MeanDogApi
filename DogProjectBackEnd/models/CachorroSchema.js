const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cachorro = new Schema({
 nome:{type:String},
 raca:{type:String},
 cor:{type:String},
 fonte:{type:String},
 descricao:{type:String},
 photo:{type:String},
 date:{type:Date}
},{
    collection:'Canil'
});

module.exports = mongoose.model('Cachorro',Cachorro);

