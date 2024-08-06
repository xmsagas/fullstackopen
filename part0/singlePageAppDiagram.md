sequenceDiagram
    participant browser
    participant server

    browser->>server: GET spa page
    activate server
    server-->>browser: HTML document of spa
    deactivate server

    browser->>server: GET main.css
    activate server
    server-->>browser: the css file of the page
    deactivate server

    browser->>server: GET spa.js
    activate server
    server-->>browser: the javascript file for the spa page
    deactivate server

    browser->>server: GET data.json 
    activate server
    server-->>browser: all the data of the notes
    deactivate server