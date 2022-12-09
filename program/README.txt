README
======

HYPE HEADS: SENIOR CAPSTONE PROJECT
----------------------------------------------------------
TEAM MEMBERS:
Calvin Teater, Je’Shon Edwards

	System Requirements: 
----------------------------------------------------------

Recommended Hardware Configuration: 

	-Microsoft Windows 8/Windows 8.1/ Windows 10
	-Processor - Intel Core i5 or equivalent
	-Memory - 14MB+ recommended
    
    -MacOS Ventura 13.0.1
    -Processor - 3.1 GHz Quad-Core Intel Core i7
    -Memory - 16 GB 2133 MHz LPDDR3

INSTALL
----------------------------------------------------------
Sources for steps 1 & 2: 
    Requires setting environment path/variables
    https://www.tutorialspoint.com/java/java_environment_setup.htm
    https://www.tutorialspoint.com/maven/maven_environment_setup.htm 
    https://stackoverflow.com/questions/45119595/how-to-add-maven-to-the-path-variable
    https://www.digitalocean.com/community/tutorials/install-maven-mac-os

1. Java JDK Kit
    Java(TM) SE Runtime Environment (build 18.0.2.1+1-1)
    Java SE Development Kit 18.0.02 (JDK 10.0.2)

2. Maven
    Apache Maven 3.8.6 (84538c9988a25aec085021c365c560670ad80f63)

3. Visual Studio Code 
    Extensions:
	GitHub Repositories
    Git Extension Pack
    Extension Pack for Java
	Docker Extension Pack
    Spring Boot Extension Pack
    Prettier - Code formatter
    vscode-icons
	Auto Rename Tag
	Better Comments
    Document This
    Javadoc Tools
    Language Support for Java(TM) by Red Hat
    ESLint
	MongoDB for VS Code
    XML
    YAML
    Dependency Analytics
    IntelliCode API Usage Examples
	Tailwind CSS Intellisense
    Tabnine AI Autocomplete for Javascript, Python, Typescript, PHP, Go, Java, Ruby & more
	ES7+ React/Redux/React-Native snippets

4. Git & Github
    source: https://www.jcchouinard.com/install-git-in-vscode/ 

5. Docker Desktop
    source: https://www.docker.com/products/docker-desktop/

6. Browser Extensions  
    Redux DevTools Chrome Extension (only available on chrome)
    JSON Peep for Safari

		Contents
---------------------------------------------------------
Included in this project file are the following:		

program Directory:		The VSCode Project folder containing the NextJs & Spring Boot folders (under src).
            NextJs frontend is called frontend, Spring Boot backend is called main (cannot change name to backend due to Spring Boot/Maven source directory).

program folder: 
    .mvn/wrapper folder ~ Used to bootstrap the download and invocation of Maven from the wrapper shell scripts.
    src folder
        frontend folder
        main folder 
        test folder ~ default Spring Boot test folder
    target folder ~ the maven default output folder
    .gitignore ~ specifies intentionally untracked files that Git should ignore
    docker-compose.yaml ~ The docker file that creates containers of mongodb database & mongoexpress UI.
    mvnw ~ an executable Unix shell script used in place of a fully installed Maven
    mvnw.cmd ~ Batch version of the above script
    pom.xml ~ contains information about the project and configuration details used by Maven to build the Spring Boot project
    README.txt ~ This file

frontend files/folders: 
    .next folder ~ containing all built content
    components folder ~ contains a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project.
    images folder ~ contains local images for the project
    layouts folder ~ contains layout component for pages
    node_modules folder ~ used to save all downloaded packages from npm in your computer for the JavaScript project that you have. 
        (will only show up with npm install cmd)
    pages folder ~ contains website pages & api files
    public folder ~  contains static files such as index.html, javascript library files, images, and other assets, etc.
    redux folder ~ contains redux state management files
    styles folder ~ contains global styling files
    utils folder ~ consists of some repeatedly used functions that are commonly used in the project. 
    validations folder ~ contains yup package validation
    .env ~ contains the individual user environment variables that override the variables set in the /etc/environment file.
    .eslintric ~ a configuration file for a tool named ESLINT
    .gitignore ~ specifies intentionally untracked files that Git should ignore
    next.config.js ~ nextjs config file
    package-lock.json ~ contains basic information about the project.
    package.json ~ frontend Dependency file (similar to pom.xml)
    postcss.config.js ~ a tool for transforming styles with JS plugins
    README.md
    tailwind.config.js ~ tailwind css config file

backend (main) files/folders:
    java/git/cgteatejte91/hypeheads folder
        HypeHeadsApplication.java ~ backend server execution file
        ui folder ~ contains backend layer folders & files
    resources folder ~ configuration and data files related to the Spring Boot backend

		Running the website
----------------------------------------------------------

Running the Project on VSCode:
--------------------------------------
1. Download and Install
	-If you do not already have a copy, download and install latest version of VSCode.

2. Loading the project folder into VSCode
	-Click File, Open Folder and Load in the Hype-Heads folder.
    -Alternative Option
         Open VSCode
         Type "CMD + Shift + P" for Mac, "CTRL + Shift + P" for Windows
         Type Git: Clone
         Choose Clone from Github
         Enter Gitub Repository URL
         Choose local directory to save Github Repository
         Open Hype-Heads folder

3. Altering IP Addresses
	-If running in localhost/same computer, the project should work fine and no changes
		are needed in the classes except for removing the "# " in front of each line on the .env file.
	-If the server is running in a separate computer from the client (highly recommended!),
		then change "localhost" to the IP Address of the server in the following lines:
		> .env 	at lines 1 & 3
		> application.properites 	at lines 5 & 6 (still needs to be edited later on)

Running the Database
--------------------------------------

1. Creating Docker containers
	-If not already installed, download and set up Docker Desktop
	-Open Docker Desktop Dashboard
	-Open the VSCode Project
    -Double click on docker-compose.yaml file choose "compose up" option
    -Docker containers will be created
    -If docker containers already created or created from the above, either: 
        Open Docker Desktop Dashboard, find HypeHeads folder, choose "Start" on both containers. Choose "Stop" when not using containers. 
        Open VSCode Docker Container Explorer Window, double click on each HypeHeads container & choose "start". Choose "stop" when done using application.
    -Make sure docker containers are running before running anything else.
    -Once containers are running, mongoexpress UI can be accessed in browser with localhost:8081
    Warning!
        Your own product data will need to be created using Postman 
        You will have to register on the website before you ever log in
        Data Tables will not display until Backend is ran at least once

Creating Product data with Postman 
--------------------------------------

1. Download and Install 
    -If not already installed, download and set up Postman

2. Creating product API request
    -Open Postman 
    -Create a new collection called Hype Heads
    -Double Click on Hype Heads Collection, add new request
    -Change request to POST
    -Enter URL: http://localhost:8080/management/api/websiteuser/products (used for now, admin page will be implemented later)
    -Choose Body, raw, JSON on dropdown
    -Copy & paste code below into the Body box on Postman, fill out quotes to the right of variable name with desired data (thumbnail is image url)
        {
        "category": "Shoes",
 	    "productName": "Nike Air Force 1",
        "brand": "Nike",
        "styleId": "12356-A",
        "slug":"Nike Air Force 1",
        "colorway": "White",
        "retailPrice": "90.00",
        "thumbnail": "",
        "countInStock": 20,
        "releaseDate": "2022-12-9"
        }
    -Click Send, status code 200 OK should show
    -Repeat Copy & paste step with more data (can only add one product at a time)

Running the Backend
--------------------------------------
    -If not already installed, download and set up Maven, Spring Boot, and VSCode
	-Open VSCode Project
    -Go to program/src/main/java/git/cgteatejte91/hypheads folder
    -Run HypeHeadsApplication file, a new VSCode terminal should pop up
    -Make sure backend is running before frontend

Running the Frontend
--------------------------------------
    -If not already installed, download and set up VSCode
	-Open VSCode Project
    -Open VSCode terminal, type "cd program/src/frontend"
    -Type "npm install" to install node_modules folder inside Frontend
    -Type "npm run dev" to run the frontend in development mode
    -On your browser, go to localhost:3000 to access client UI
    -Make sure backend is running before frontend

Warning!
--------------------------------------
1. Shutting down either backend server or docker containers while clients are using it/connected to it can cause 
	severe errors. Avoid doing so, if at all posible.
