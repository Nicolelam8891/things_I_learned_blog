## How the web works

1. Client browser uses http protocol to send a REST type request, including the the url field endpoint. (“google.com”)
2. Passes the request to the switch in your house, which might be built into your router
  - The switch passes the request to the router
  - Home router passes the request to your isp, internet service provider
  - Isp passes the request to the dns, domain name system (ex: Cloudflare 1.1.1.1 and Google Public DNS)
  - The dns converts the human words “google.com” to an ip address (Every internet connected device has an ip address)
  - The dns passes the ip address to the backbone
  - The backbone locates the application server (the google server in this case) in a physical data center.
3. Smaller sub-networks of different internet service providers converge at the backbones to enable global data exchange on the Internet. 
  - Data is usually transmitted via optical fiber, but satellite links are also used. 
  - The transition from one operator to another takes place at the service providers' PoPs, points of presence.
4. The application server sends the REST response that includes the html file for either a static or dynamic webpage to your isp, the one for your house
  - The response is issued from a port on the server (a port is for a specific process that is running on a server or machine)
  - The response that is sent has Content-Type: text/html in the response HEADER
  - Your isp passes the REST response to your router
  - Your router passes the REST response to your browser
  - Your browser parses the html to build the page

## Protocols:

1. TCP/IP - computer to computer, transfer control protocol, internet protocol
2. HTTP (Hyper Text Transfer Protocol) - protocol for browser, uses REST API which has format for the request and for the response
3. REST = Representational State Transfer - protocol to exchange any(XML, JSON etc ) messages that can use HTTP to transport those messages.
Devices:
4. Router - help different devices connect to the network(the internet) - moves data traffic efficiently in “packets”
5. Switch - helps several devices connect to the router
6. DNS Server - gets the IP address for the domain name