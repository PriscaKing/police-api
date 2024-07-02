import {Schema, model } from "mongoose";

// const civilianSchema = new Schema({
//     civilianId:{type:string},
//     firstName:{type: String},
//     lastName:{type: String},
//     middleName:{type: String},
//     dateOfBirth:{type: Date},
//     email:{type: String},
//     phone: {type:String},
//     address:{type: String},
//     nationalId:{type: String},
//     sex:{type:Enumerator},
//     occupation:{type:String},
//     createdAt:{type:Date},
//     updatedAt:{type:Date}
// });


const statementSchema = new Schema({
    incidentType:{type: String, enum:['non-criminal', 'criminal']},
    civilianStatus:{type: String, enum:['suspect','complainant', 'witness']},
    statement:{type: String},
    caseStatus:{type: String, enum:['open', 'closed']},
    // civilianId:{type: String},
    date:{type:Date},
    createdAt:{type: Date, default:Date.now()},
    updatedAt:{type: Date, default:Date.now()}
});

export const StatementModel = model('statement', statementSchema)
