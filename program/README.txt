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

    (list how to open the project, how to run the project)

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

Running the Database Script
--------------------------------------

1. Creating the Database
	-If not already installed, download and set up SQL Server 2017 
		Management Studio
	-Open SQL Server Management Studio
	-Connect with Windows Authentication
	-Open the Capstone.sql file and execute.



Setting up the Database/Network: 
--------------------------------------

1. Configure SQL Server Express 
	-Open SQL Server Management Studio
	-In Object Explorer, right-click a server and select Properties.
	-Click the Connections node.
	-Under Remote server connections, select the Allow remote
	 connections to this server check box.
2. Configure SQL Server Configuration Manager
	-Open SQL Server Configuration Manager
	-In the Sql Server Network Configuration, right click on TCP/IP and enable it.
	-To open one port for this connection, Right click on TCP/IP and click Properties
	-Under the IP Addresses tab, Set the TCP Port to 49171 under the APAII tab.
	-Reset the SQL Server Manager.
3. Configure Windows Firewall For Port Connection
	-Open Windows Firewall, and go to Advance Settings
	-Under the Actions tab on the left side, Click New Rule...
	- Set the Rule Type to Port, TCP for Protocol and Ports and type in 49171 for the Specific local ports
	-Allow the Connection, then leave Domain, Private, and Public checked.
	-Then name the rule "SQL TCP Connection" or something similar and click Finish.
4. Connecting to the Database from a different Computer
	-Open SQL Server Management Studio
	-Click on Connect
	-Type in the IP Address and the Port Number in this format - xxx.xxx.xx.x, 49171
	-Then Connect

Running the Project on VSCode:
--------------------------------------
1. Download and Install
	-If you do not already have a copy, download and install Netbeans IDE 8.2.

2. Loading the file to the Projects tab
	-Click Open Project under the File tab and Load in TheCartel file.

3. Getting the Jars/Libraries Correct 
	-Right click on the Project and click Properties
	-Under Libraries, check if the sqldbc42, mail, and activation jar files exist among the 
		Compile-time Libraries then press OK.
	-If it doesn't exist, then click Add JAR/Folder and add the three jar files.
		You should find the jar files in the Program folder under the Jar 
		Files directory.
4. Altering IP Addresses
	-If running in localhost/same computer, the project should work fine and no changes
		are needed in the classes.
	-If the server is running in a separate computer from the client (highly recommended!),
		then change "localhost" to the IP Address of the server in the following lines:
		> LoginPanel.java 	at line 61
		> Register.java 	at line 127
		> ResetPassPanel.java 	at line 181
		
Running the game
--------------------------------------
1. Run the AuthorizationServer and PrimaryServer first.

2. Run the game by clicking on the green run arrow on the top of Netbeans
	or by right-clicking StartFrame and hitting Run File.

Warning!
--------------------------------------
1. Shutting down either backend server or docker containers while clients are using it/connected to it can cause 
	severe errors. Avoid doing so, if at all posible.
