# Todo-Backend

This project is about creating express api for a to do application. The git repository contains all the files that are used for setting up the express server. The user can start the execution by 'npm run start'. The application provides end points for the following CRUD operation:

# Create a task:

For creating a task, the url is: http://localhost:3000/todolist/tasks. Here, the base url is http://localhost:3000/todolist and the end point for creating a task is '/tasks'. The user can enter the name of the task using postman's POST request. The user has to enter the name of the task in the form of: "'taskName': 'any task'". The user is only allowed to enter the taskName. The status of the task is by default set to 'Not started'.
http://localhost:3000/todolist/tasks

# Read all tasks:

For reading all the tasks that has been already entered by the user, the url is: http://localhost:3000/todolist/tasks. Here the end point is '/tasks'. This endpoint is used to make GET request using postman.

# Read a single task based on a taskId sent in a route parameter:

If the user wants only a particular task, it can be fetched by making a GET request in postman. Here with the base url, the user will have to pass a route parameter. This route parameter is the id of the task that the user wants to fetch. The url for reading a task by based on its id is : http://localhost:3000/todolist/tasks/:id. Here '/tasks/:id' is the end point. The user will have to enter the id as : '/tasks/1234'.  

# Update the status of task from pending to complete:

The status of any particular task can be changed from pending to completed by making a PATCH request in postman. Here, the user will have to pass a route parameter. This route parameter will be the id which is unique for each task. Once the task with that particular Id is found, the user can update the status of the task. The url for the same is : http://localhost:3000/todolist/tasks/:id. Here, the endpoint is '/tasks/id'.

# Delete a task: 

A task can be deleted by using the url http://localhost:3000/todolist/tasks/:id. Here, the end point is '/tasks/:id'. The task with id passes as a route parameter gets deleted from the todolist.

# Storage: 

The storage system used in this project is Mongodb Atlas.

# Hosted link:

The project is hosted on Heroku and the live link for the same is given below: 

https://todo2backend.herokuapp.com/todolist/tasks
