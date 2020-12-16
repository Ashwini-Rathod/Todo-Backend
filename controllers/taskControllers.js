//crud operations on todo...
const Task = require("../models/taskSchema");
const sendError = require("../helper/sendError");
const AppError = require("../helper/appErrorClass");
const sendResponse = require("../helper/sendResponse");

const getAllTasks = async (req, res, next)=>{
    try{
        if(req.query){
            let keys = ["taskName", "taskId", "status"];
            let queryParameters = Object.keys(req.query).every((key)=>{
                return keys.includes(key);
            })
            if(queryParameters){
                let query = Object.keys(req.query);
                query.forEach((key)=>{
                    req.query[key] = 1;
                })
                req.query._id = 0;
                req.query.taskId = 1;
                let tasks = await Task
                .find()
                .select(query);
                sendResponse(200, "Successful", [tasks], req, res);
            }
            else{
                sendError(new AppError(401, "Unsuccessful", "Invalid query"), req, res);
            }    
        }
        else{
            let tasks = await Task.find();
            sendResponse(200, "Successful", [tasks], req, res);
        }
    }catch(err){
        return sendError(new AppError(401, "Unsuccessful", "Invalid request"), req, res);
    }
}
const createTask = async (req, res, next)=>{
    let newTask = new Task({taskName: req.body.taskName});
    try{
        const task = await newTask.save();
        sendResponse(200, "Successful", [task], req, res);
    }catch(err){
        return sendError(new AppError(401, "Unsuccessful", "Invalid request"), req, res);
    }
}
const getTaskById = async (req, res, next)=>{
    try{
        let task = await Task.findOne({taskId: req.params.taskId});
        sendResponse(200, "Successful", [task], req, res)
    }catch(err){
        return sendError(new AppError(401, "Unsuccessful", "Invalid request"), req, res);
    }
}
const updateTask = async(req, res, next)=>{
    try{
        let task = await Task.updateOne({taskId: req.params.taskId}, {status: req.body.status});
        sendResponse(200, "Successful", [task], req, res)
    }
    catch(err){
        return sendError(new AppError(401, "Unsuccessful", "Invalid request"), req, res);
    }
}
const deleteTask = async (req, res, next)=>{
    try{
        let task = await Task.deleteOne({taskId: req.params.taskId});
        sendResponse(200, "Successful", [task], req, res)
    }
    catch(err){
        return sendError(new AppError(401, "Unsuccessful", "Invalid request"), req, res);
    }
}
module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.getTaskById = getTaskById;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;

