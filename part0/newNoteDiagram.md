sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: writes text and clicks the save button
    activate browser
    browser->>server: sends user input via POST to new_note address
    activate server
    server-->>browser: redirects the browser to the notes address (HTTP status code 302)
    deactivate server

    Note left of server: the server gets the user data and creates a new note object

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET main.js
    activate server
    server-->>browser: the javascript file
    deactivate server

    browser->>server: GET data.json 
    activate server
    server-->>browser: the data of the notes
    deactivate server

    browser-->>user: renders the notes
    deactivate browser
