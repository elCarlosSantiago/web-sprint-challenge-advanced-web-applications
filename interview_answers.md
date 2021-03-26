# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
   A token is used as a means of Authentication. Usually, once the user logs in with valid credentials (ones that match the database) the server will return a unique token that the user will now attach when it makes future requests to the server which would require a certain level of authorization.

2. What steps can you take in your web apps to keep your data secure?
   We can make sure our app uses https as its transfer protocol. Furthermore, implementing multi-factor authentication would greatly increase data security. Avoiding attributes like innerHTML which allow for cross-site scripting attacks is also important. Protecting sensitive variables by placing them environmental is also important. There are many factors to consider when thinking about application security. Following best practices and updating dependencies while maintaining a secure mentality is paramount.

3. Describe how web servers work.
   Web servers work by handling requests from the client and providing back the adequate response. This may me exactly what the client was requesting or an error code describing what was wrong with the clients request (auth, missing resource, etc.). At the end of the day, web servers (as a program) are just code handling requests and serving back files (which may have been rendered on the server). Some files may be more barebones which allow for client-side rendering.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   CRUD or Create, Read, Update, Delete. The corresponding methods are POST, GET, PUT, & DELETE respectively.
