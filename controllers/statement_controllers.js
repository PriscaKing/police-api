import { StatementModel } from "../models/statement_model.js";


// function to store data in the database
export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body); //'request' to make failed executions traceable
        const addData = await StatementModel.create(req.body)
        res.status(200).send(addData); //addData makes the data available in the terminal.

    } catch (error) {
        console.log(error)
    }
};


export const getStatements = async (req, res, next) => {
    try {
        const allStatements = await StatementModel.find()
        res.json(allStatements);
    } catch (error) {
        console.log(error)
    }
};



export const getStatementByID = async (req, res) => {
    try {
        const statementbyID = await StatementModel.findById(req.params.id)
        {
            res.status(200).json(statementbyID);
        }
    } catch (error) {
        console.log(error)
    }
};


export const updateStatus = async(req, res)=>{
    try {
        const status= req.params.caseStatus
        console.log("request", status);
        const addData = await StatementModel.findByIdAndUpdate(req.params.id,{caseStatus: status});
        res.status(200).send(addData)

    } catch (error) {
        console.log(error);    
    }
}


export const deleteStatement =async(req, res, next) =>{
    try {
        const statement = req.params.statement
        console.log("request", statement);
        const deleteData = await StatementModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Statement deleted")
    } catch (error) {
        console.log(error);
    }
}