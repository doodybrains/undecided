# undecided
undecided.js is a TOOL for making webpages. By just typing one word (undecided) and one number (the amount of links you want to show) you can create a single webpage containing any and every link you can think of! You can link to your favorite website, or a PDF or your aunts blog or an article worth reading...the internet is your oyster. In addition to receiving a url for your personal page all of your links will be posted to the <a href="https://desolate-scrubland-97851.herokuapp.com/" target="_blank">undecided homepage</a> where you can scroll through tons of other links posted by other undecided.js users.


These instructions are for Mac users - if you have questions you can email me at undecidedsites@gmail.com

1. Follow instructions <a href="https://nodejs.org/en/" target="_blank">here</a> for downloading and installing Node.js. This will allow you to use this package as well as thousands of other cool packages.



2. Once Node.JS is installed open the application called Terminal. You can find it easily by opening a spotlight search (CMD + SPACEBAR) and typing in "Terminal"




3. Directly after the $ write the following line

   ```npm install -g undecided```
   
   then click ENTER
   
   _NOTE: if you get some errors that say something like npm ERR! Error: EACCES you can type in the following line:
   
   ```sudo chown -R $USER /usr/local```
   
      then click ENTER and try `npm install -g undecided` again.
      
      
      **If you have installed undecided already you should make sure you have the latest version by typing:**
      
      
      ```npm update -g undecided```
    
      

4. When the package has finished installing type in the following line:

    ```undecided [number]```
    
                  NOTE: [number] represents the number of links you want to include on your website.
                  For example, if you wanted to include 3 links on your website you would type:

                  undecided 3
    
    then click ENTER






 5. From here you can simply follow the prompt to fill out the names and urls for each of your links (clicking enter after each one). When typing in the name and the url be sure to separate them by a comma.
    Example:
     ```my favorite website, http://google.com```
     
     
     

 6. After choosing the type of site you want and clicking enter you should receive a link in your terminal window. YAH0000! In addition to checking out your own url please go to the <a href="https://desolate-scrubland-97851.herokuapp.com/" target="_blank">undecided homepage</a> to see all links added by other undecided.js users.
