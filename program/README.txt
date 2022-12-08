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

5. Docker Desktop
    source: https://www.docker.com/products/docker-desktop/

6. Browser Extensions  
    Redux DevTools Chrome Extension (only available on chrome)
    JSON Peep for Safari

		Contents
---------------------------------------------------------
Included in this project file are the following:

README.txt			This file

docker-compose.yaml			The docker File that creates containers of mongodb database & mongoexpress UI.

program Directory		The VSCode Project folder containing the frontend & backend folders (under src).
            frontend is called frontend, backend is called main (cannot name change due to Spring Boot/Maven source directory).


AuthenticationServer.java
ChangeEmail.java
ChangePassword.java
GameAttributes.java
GameIcon.java
GameInfo.java
GamePanel.java
GameServer.java
HelpSoundFrame.java
HelpSoundPanel.java
LobbyPanel.java
LoginPanel.java
Mission.java
PrimaryServer.java
ProfilePanel.java
RegisterPanel.java
ResetPassPanel.java
StartFrame.java
TitlePanel.java
User.java

		Running the game
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
