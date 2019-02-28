# CDTM MPD Prostate Frontend

Welcome to the CDTM MDP PROSTATE - Prostate / Procare Frontend code repository.

This Code was written in the context of the Managing Product Development Course at the Center for Digital Technology and Management. 

## Disclaimer
This is a prototype. Do not use it in a production setting!
This project gives an outlook what you could do. It was not meant to run anywhere in production.

## Abstract 
Cancer is a widespread disease in modern world. 
Prostate cancer is a cancer type which affects only men and the onset happens around the age of 65 in majority of the cases. 
This disease accompanies a wide array of symptoms which are often not reported routinely due to multitude of reasons. 
Studies have found that routine reporting of symptoms leads to several clinical benefits in terms of combating the disease progression. 
Procare is a solution aimed at connecting the patient with the doctor digitally in order to enable the doctor to more easily keep track of the disease progression in the patient and take preventive measures to prolong the patients life expectancy. 
It is a digital ecosystem which offers facilities of symptom reporting, medication tracking, a knowledge network, and a chat feature for the patient to talk with the doctor. 
A patient can interact with the ecosystem easily using the web/mobile interface or smart devices such as Amazon Alexa or Amazon IoT Button.


# Team

* Saad
* Ibrar
* Afrida
* Sebastian

# Project Description

The Frontend is the user interface, which will allow the user to interact with the application via his or her browser. It should be the single point of interaction. The user must be connected to the internet or a local network, where he or she can access the backend via the frontend to use the software properly. The frontend is not able to display a consistent perspective of the data, without a connection to the backend.
  
We decided to create a single page web application. A now current practise in the web development scene. It can be described as a thick client which knows basically all the functionality and all processes, but on the other hand has not data. The data comes from the backend and the database. 

At the moment there are two major frameworks available. React - which was developed by Facebook and Angular which was developed by the other tech giant Google. 

We decided to go with Angular, because there was some prior knowledge and the learning curve was therefore smaller. Angular was build 
An overview of the framework, the documentation and tutorials can be found on the Angular Website (https://angular.io). 

To speed up the process of implementing the views that we created in the initial mock up and testet with the focus group - we decided to extend the UI/UX framework Clarity. This ecosystem is developed and actively maintained by VM-Ware and works perfectly with Angular. It allows the user to create reliable HTML / CSS components and views based on proven patterns and principles, because it is based on very clear and intuitive guidelines.   

More information can be found under the website https://clarity.design. 

To visualize the data we decided to use Chart.Js - an open source chart library. 

To allow the user and the external devices to interact in real time, we did not come around to use a bi-directional way of communication. We therefore decided to use Websockets in form of the Socket.io framework. 

For authorisation and authentication we use the Sessionless JSON Web Token standard. Luckily Auth0, a company which offers universal authentication & authorization, is providing a very good module for Angular which works seamlessly with our technology stack.  

To use a extension to CSS we went with SASS, the most mature, stable, and powerful professional grade CSS extension language at the moment. 

For scaffolding, building and for development we used the angular generator, which comes with the latest angular version by default.
Frameworks
The following frameworks / libraries and components were used in the process and the final frontend

* Angular (https://github.com/angular/angular) 
* TypeScript (https://www.typescriptlang.org/)
* SCSS (https://sass-lang.com/)  
* UI/UX (https://clarity.design/)
* NG2 Charts (https://valor-software.com/ng2-charts/) 
* Socket.IO (https://socket.io/) 
* Auth0 Angular JWT (https://github.com/auth0/angular2-jwt) 

# Set-Up

Frontend
To interact with the frontend there are some prerequisite:

You have to install NodeJS on your system.
Go to the node website (https://nodejs.org/en/) and download the latest version and install it.
By default it should also install the Node Package Manager (NPM)


Angular, and the Angular CLI has to be installed on the system
Please use the quickstart guide of Angular which can be found here (https://angular.io/guide/quickstart)


Clone the Git Repository (https://github.com/SbstnErhrdt/cdtm-mpd-prostate-frontend). You can do that by executing the following command on your system in the Terminal / Command Line Interface
`$ git clone https://github.com/SbstnErhrdt/cdtm-mpd-prostate-frontend`
  
Install the necessary dependencies of the application. Go to the root folder of the app and execute the following command.
`$ npm install`


You can fire up the application in development mode by executing the following command.
`$ ng serve`

There are additional parameters which you can use. Please have a look at the angular documentation (https://angular.io/cli/serve)


For building the application please use the next command
`$ ng build`


For a production build, just add the following parameter --prod

`$ ng build --prod`


To deploy a docker container please build the app with 
 $ ng build --prod
If you want to run the backend on a different server, please adapt the environment file so that the endpoint matches the backend. (/src/environments/environment.prod.ts)
After that please execute the command to build a docker container. We have abstracted the command in a bash file. So just execute that file.
`$ sh build_docker.sh`

Start the docker with the command 
`$ docker run -p 0.0.0.0:80:80 prostate-frontend`


# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

## Installtion

```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Photos

* Photo from Pexels
