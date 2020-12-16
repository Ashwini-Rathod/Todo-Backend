//mongoose schema
const uniqid = require("uniqid");
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    // },
    taskId: {
        type: String,
        default: uniqid(),
    },
    taskName: {
        type: String,
        // required: [true,"Please enter task details"],
        validate:{
            validator : function (taskName){
                console.log("this is task validator", this);
                return this.taskName.trim().length;
                // return true;
            },
        },
        message: "Task name cannot be an empty string",     
    },
    status: {
        type: String,
        default: "Not started",
        enum: ["Not started" , "In progress", "Completed"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    startedAt: {
        type: Date,
        default: undefined,
    },
    completedAt: {
        type: Date,
        default: undefined,
    },
})

taskSchema.virtual('timeTaken', function(){
    return (completedAt - startedAt);
})

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;


