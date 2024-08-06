sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: writes text and clicks the save button
    activate browser

    browser->>server: sends user input via POST to new_note_spa
    activate server
    server-->>browser: responds with status code 201 created
    deactivate server

    Note left of server: the server doesn't ask for a redirect

    browser-->>user: uses the javascript code fetched to show the notes
    deactivate browser
