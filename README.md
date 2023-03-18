# Petfeederdb

CRUD API for CleverFeeder's database, for more information please refer to the following endpoints.

#### Endpoints:

- /api/logs
  - **GET '/'** - Grabs all of the stored logs for the client
  - **GET '/:id'** - Grabs the log by specified id
  - **GET '/client/:name'** - Grabs all of the logs of a specific client name
  - **POST '/'** - Create's the client's history document for the first time
  - **POST '/client/:name'** - Adds a log to a specified client name (creates a client history document if it doesn't exist)
  - **PUT '/:id'** - Updates a specific log depending on the passed id
  - **DELETE '/:id'** - Deletes the log depending on the passed id


- /api/schedule
  - **GET '/'** - Grabs all of the stored schedules for the client
  - **GET '/:id'** - Grabs the schedule by specified id
  - **GET '/client/:name'** - Grabs all of the schedules of a specific client name
  - **POST '/'** - Create's the client's schedule document for the first time
  - **POST '/client/:name'** - Adds a schedule to a specified client name (creates a client schedule document if it doesn't exist)
  - **PUT '/:id'** - Updates a specific schedule depending on the passed id
  - **DELETE '/:id'** - Deletes the log depending on the passed id


- /api/storage
  - **GET '/'** - Grabs all of the stored files in the server (returns json, location is *'audio/'* for all files)
  - **POST '/upload/:name?'** - Uploads a file to the server (passed parameter is optional for filename)
  - **DELETE '/delete/:name'** - Deletes a file stored in the server (required to pass filename)
