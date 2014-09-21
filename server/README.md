Server
--------

The server will manage the http requests and responses for the client, this will also connects to the mongo db database.


Before start the server you need to install the required dependencies with:

```
  npm install
```

Once the dependecies are installed execute:

```
  npm start
```

The server will start in the port 3000:

```
  http://localhost:3000
```


To run the test execute:
```
  ./node_modules/jasmine-node/bin/jasmine-node spec/<specFile>
```
