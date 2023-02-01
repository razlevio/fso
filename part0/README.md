# Exercise 0.1 - New Note Diagram
Create a system sequence diagram of the chain of events caused by opening the page https://studies.cs.helsinki.fi/exampleapp/notes
depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.
If necessary, show operations on the browser or on the server as comments on the diagram.

## Exercise 0.1 - Solution
```mermaid
  sequenceDiagram
    participant browser
    participant server
       
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Acknowledge the post now redirect to notes
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server  
```

# Exercise 0.2 - Single Page App Diagram
Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

## Exercise 0.2 - Solution
```mermaid
  sequenceDiagram
  participant browser
  participant server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server->>browser: status code 200 OK, HTML Document
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
  activate server
  server-->>browser: status code 304 Not Modified, the CSS file
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server-->>browser: status code 304 Not Modified, the JavaScript file
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: status code 304 Not Modified, JSON data
  deactivate server
```

# Exercise 0.3 - New Note in Single Page App Diagram
Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

## Exercise 0.3 - Solution
```mermaid
  sequenceDiagram
  participant browser
  participant server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server-->>browser: status code 304 Not Modified, the spa.js file
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server-->>browser: status code 200 OK, the HTML document
  deactivate server
  
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>browser: status code 201 Created, JSON file with the content
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css
  activate server
  server-->>browser: status code 304 Not Modified, the CSS file
  deactivate server
  
   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: status code 304 Not Modified, JSON data
  deactivate server
```
