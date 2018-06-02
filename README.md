# Practical Test

Please fork this repository to one of your own

Install the server
```sh
npm i
```
Install artillery
```sh
npm i artillery -g
```

Read the server code and understand its function

Start the server
```sh
node index.js
```
Run the altillery testlow to see how the server behaves in low traffic
```sh
artillery run testlow.yml
```
Run the artillery testhigh to see how the server behaves in high traffic
```sh
artillery run testhigh.yml
```
As you can see in high traffic the server is not performing very well, not only do requests take a very long time to return a response some requests are not even being processed as the server returns errors

Edit the Answers.txt file with answeres to the following questions:

1. what is the main issue that is causing the server to return errors?
2. how will you refactor the server to make sure it will not return errors in these scnarios:
    - you have no additional resources other than the original server (assume the server is spec it the same as your laptop)
    - there is no time limit for the server response
    - you have any additional resources you want to make the system run as fast and handle as many requests as possible
3. choose one of the solutions you proposed and start refactoring (start with pseudo code and only then start to flesh it out)

Send the forked repository to eyal@colu.com

# Good luck!