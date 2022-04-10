# Image Processing Api Project  

## Table of Contents  

* [Description](#Description)  
* [Usage](#Usage)   
* [Dependencies](#Dependencies) 

## Description  

This is an **Image Processing Api** that uses sharp module to resize images and it was build for a Udacity course. The website allows users to enter enter title for an image in the attached images folder and also enters the required width and height as url parameters in the api call, then the api responds and loads the processed image as a response to the call.  

## Usage  

1. To build the project, user need to install the dependencies listed below   

2. To run the server, start server in terminal using command **node build/index.js** and to run using nodemon use **npm run start**    

3. To make a call to the API, open the browser and go to **localhost:3000/app** in the URL and then attach your image title and the required width and height as a paramters to the call like the this example **http://localhost:3000/app?title=santamonica.jpg&&width=600&&height=400** and then reload the page so that image will be displayed in supsequent calls and make sure that the **title used corresponds to an image in the images folder** or the api will throw an error      

4. To test project, use command **npm run test**    

## Dependencies  

1. express      
2. sharp   
3. tsconfig.json   
4. nodemon   
5. **devDependencies**  are listed in package.json file, they can be downloaded to test or develop  
