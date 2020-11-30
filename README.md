# USER Excercise - NODE

## How to submit your code assignment

1. Fork the project from GitHub.
2. Make your forked project to **private** 
3. Add member of **ibmq2c** in **Manage Access**,  from Current Setting tab -> Manager access -> Invite a Collaborator -> lookup for **ibmq2c** -> add  **ibmq2c** to thi repository.
4. Complete your code and documentation in the forked project.
5. Create a new plain text file in the root folder of the forked project. And make the file name in the format of "your full name", e.g. **Mark Leon**.
6. Notify the code assignment is done or you can contact your **Interviewer/Talent Liaison Officer** to notify the same along with github url (we would be regularly checking the repo for any checkins).

## Code assignment details

Imagine you are the software engineer who is going to design and develop a small application. The application is to provide 3 Restful APIs for User Related Operation.

Here is technical requirement for the application.

- Use **Express framework**, with all basic libraries required to achive the result in package.json file.
- The building tool is Maven 3 or preferably Gradle 4.
- 1 API with HTTP method POST to handle the new entry of User (you can use the file to do the storage operation). The HTTP request and response should be in JSON format. Payload should be JSON type {"user":"Bob"}
- 1 API with HTTP method PUT to update the user information. The local file which earlier had **Bob**, should be now updated to **Mike**. Payload should be JSON {"olduser": "bob", "newuser":"mike"}
- 1 API with HTTP method GET to get the user infomration. Should follow querry param to fetch the user information. Eg. http://localhost:3000/getUser?user=mike. Output should be **Welcome Mike**
- Your code shall not be broke in a very simple test.
- It is no need to have complex code structure of the application, but the code shall be clear and able to be understood. The code also shall follow the Java coding standard.
- Consider having appropriate documentation in README.md and Javadoc.
- In the README.md, you need to complete the steps and commands section to show how to run your application, please keep it short and get to the point.
- In the README.md, you need to complete the test commands section by using `curl` to simulate the request for your 2 APIs. You need to provide the payload of the response.
- You need to provide the unit test (if you write gulp file to execute multiple script writting, will be added advantage).

Please keep your implementation simple. It is no need to over design and over development. But the code shall be able to show your basic understanding of the design and development knowledge.

You can assume your implementation can be completed in 5 hours. Normally, it could be completed in 2 to 3 hours.

## Steps and commands to run the application

1. Run `npm i` to install dependencies
2. Run `node server.js` to start the server

## API testing commands

Append your test endpoint details

1. `curl http://localhost:8080/api/messages`
    Payload: 
    StatusCode        : 200
    StatusDescription : OK
                        2020"},{"_id":"5fc4778cd58d657c9812ae5b","name":"bbbb","message":"cccc","date":"1/10/2020"}]
    RawContent        : HTTP/1.1 200 OK
                        Access-Control-Allow-Origin: *
                        Vary: Origin
                        Connection: keep-alive
                        Content-Length: 191
                        Content-Type: application/json; charset=utf-8
                        Date: Mon, 30 Nov 2020 04:57:16 GMT
                        ETag: W/...
    Forms             : {}
    Headers           : {[Access-Control-Allow-Origin, *], [Vary, Origin], [Connection, keep-alive], [Content-Length,
                        191]...}
    Images            : {}
    InputFields       : {}
    Links             : {}
    ParsedHtml        : mshtml.HTMLDocumentClass
    RawContentLength  : 191

2. `curl http://localhost:8080/api/add-message`

3. `curl http://localhost:8080/api/update-message`