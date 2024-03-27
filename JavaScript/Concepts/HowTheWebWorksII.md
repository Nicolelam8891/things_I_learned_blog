## How the web works, Turing lesson

> The internet is a bunch of computers talking to computers

- The internet is comprised of Servers
  - Servers: hold files & info on them 
  - Servers / Server  networks are connected by wires either underground or underwater
- What we will see: 
1. Server provides a service
2. Client will send a request to the server to utilize that service 
- In most cases, we will see a client will try to access the data that is provided by the server. 
-The server is usually a file or app stored on a physical server. 

Ex) Signing into Epic as a nurse. 
- browser is acting as the client and communicating to a physical server to get information on specific patients. It will use requests to get information and services from the server. 

> What is a request? 
1. everything starts with the URL (location of the website/server)
2. user hits "enter," client will send a request to the server the user would like to visit
3. the request is comprised of 2 parts
  a. header 
  b. body
4. these two parts make up the whole of a server request 

> The header
1. client will first send the request header
2. header contains important info pertaining to the user & how the client will process hte info given 

> The body
1. where the interaction between the server and client begins
2. within the body, the client will send over an http verb
3. verb that is sent over is important! It defines the interaction that will happen between the client and the server
4. verbs: GET, POST, PUT/PATCH, DELETE

> What is the response? 
1. There will be a response from the server
2. ONce a request is received the server, it will issue a response
3. Response is sent back to the client

>The response will hold 3 parts
1. Meta Data: Content Type and length (size in bytes)
2. Status Code: 200, 400, 404, 302, 500
3. Body: css, json, html, etc

> Response codes: 
1. 200(ok)
2. 400 (bad request)
3. 404 (not found)
4. 302 (found)
5. 500 (Internal server error)

> What is DNS?
1. domain name system, which is used to map doman names to IP addresses
2. doman name is the same as the url you would type into you web browser
3. IP address means the protocol address, which is a unique string of numbers separated by periods
- DNS is like a phone book, each person's name is mapped to a phone number, such as a domain name is mapped to an IP address