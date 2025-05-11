**BlackMart** - Your Futuristic Online Store


System/Software Requirements ->
1. Windows 10/11 (MacOS not tested)
2. Intellij Idea Community Edition (for running the spring boot application)
3. VS Code or any other code editor
4. npm install vite (for running the vite project(React.js))
5. MySQL workbench or command line (database)

I have included the database file [ecomdb.sql] 
You need to import it into your MySQL for the website to properly run on your device.

Steps to import database (ecomdb) into your MySQL workbench ->
1. install MySQL and open the workbench
2. create a database (ex. blackmart)
3. from the top menu select 'Server'
4. then select 'Data Import'
5. then select 'Import from Self-Contained File' and select the ecomdb.sql file that you downloaded from here
6. then select the default target schema (in this case 'blackmart')
7. click on 'Start Import'
8. you will see a green progress bar and your import will be completed. right click on your database (blackmart) and select 'Refresh All'. now you will be able to see all the imported tables.

Changes in the backend after importing the database ->
1. open the ecom folder in Intellij Idea Community Edition
2. open the 'application.properties' file
3. in spring.datasource.url replace ecomdb with your database name (in this case 'blackmart')
4. dont change the spring.datasource.username (if not 'root', change it to whatever your username is)
5. in spring.datasource.password replace 1234 with your password

And that's it! You are all set to experience BlackMart. Have fun!
