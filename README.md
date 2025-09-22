---
# Episode 5
Two type of export and import:
1. default export/import:
  ex: export default Component;
    import Component from "path"

2. Named export/import:
  Ex: export const Component
    import {Component} from "path"
---

# Episode 6

Note: whenever we update the local state variable in react, react rerendering the component.

Q. can i use local state variable into another component, if yes how?

---

# Episode 7

Deep dive into useEffect() and useState():

1. useEffect() is called using two arguements:
   I. Callback function
   II. Dependency array: Syntax- useEffect(() => { // code... }, []);

Q. when the useEffect() called?
-> It is called after every render of the component. Let say every time when my 'header' component will render then useEffect() will called.

Note: if no dependency array => useEffect is called with every render.
If dependency array is empty = [] => useEffect is called on initial render(just once).
The default behavior/nature of useEffect is to be called after each render, but due to dependency array it just called one time.
Q.What if we put someting inside the dependency array.
->Everytime your given code(i.e. btnNameReact) will be changes then useEffect will be called. For example: useEffect(() => { // code...}, [btnNameReact]);

Q. How we route some component means /aboutUs, /contactUs page?
-> We need router provider, which is 'react-router-dom' and have to install it in our folder, using 'npm i react-router-dom'. This provide all the dependencies/configuration for the routing.  
'import {createBrowserRouter, RouterProvider} from 'react-router-dom'
In this, 'RouterProvider' component provide the routing configuration to app.

## 2 types of routing in web apps

    - Client Side Routing : Basically all the required componenet are already present in the  client's folder. It's just call/render it on webpage. Means doesn't call any kind of API. For Ex: when we click on 'contactUs' button, it just rerender the component, which is already written.

    - Server Side Routing: In server-side routing, every time a user navigates to a new URL:
        The browser sends a request to the server.
        The server processes the request and returns a new HTML page.
        The entire page reloads with new content.
        Ex: If you visit example.com/about, the server receives that request and sends back the about.html page.

    
