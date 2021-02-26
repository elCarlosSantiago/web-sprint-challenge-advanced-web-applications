# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
A token is usually a string which identifies the user in authentication. It is created by the server when the clients initial auth request. Afterwards, the client will provide the token in every interaction with the server as a continued factor of authentication. Tokens are sometimes created with an expiration date.

2. What steps can you take in your web apps to keep your data secure?
Multifactor authentication seems to be one of the most popular ways of maintaining application data secure. A combination of knowledge authentication, tokens (which can be cryptographically) & physical authentication (text messages) would be the ideal way of maintaining application security. 

3. Describe how web servers work.
Web servers are typically computer programs which serve specific web files to a client after it has made a request.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers
The 4(5) methods used are GET, POST, PUT (or PATCH), & DELETE. PUT & PATCH are similar with some nuanced differences, PUT is more widely used.