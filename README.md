## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Here is the basic differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll -

* getElementById : Selects a single element bases on its unique id attribute. It returns a single Element object. If no element with the specified ID exits it returns null.
* getElementsByClassName : Selects all elements that have a specific class name. Multiple elements can share the same class name. It returns live HTMLCollection of elements. Meaning "live" is its automatically updates if elements matching the class are adds or removed from the DOM. If there are no elements then it returns an empty HTMLCollection.
* querySelector : Selects the first element that matches a specified CSS selector. Returns a single Element object or null if no element matches the selector.
* querySelectorAll : Selects all elements that match a specified CSS selector. Its returns static NodeList of elements.


## 2. How do you create and insert a new element into the DOM?

Creating and inserting a new element into the DOM in javascript involves a few steps:

Create the element - Use document.createElement(tagName) to create a new element node. Here tagName with replaced by HTML tag e.g "div", "p", "li".

Insert the new element - Appends the new element as the last child of the parent element using appendChild(childElement) .
parentElement.appendChild(newElement)


## 3. What is Event Bubbling and how does it work?

Event bubbling is a DOM event propagation mechanism where an event, like a click, first triggers on the innermost element or the target element and then bubbles up through its parent, grandparent and so on, all the way to the root of the document. This allows parent elements to also handle events that occur in their child elements and providing a powerful way for centralized event handling and management.
Here all steps of how event bubbling works-
* Event triggered - A user action or other event occurs on a specific element within the HTML structure such as click button inside a div.
* Target phase - The event is initially directed to the element that triggered it, which is the target element.
* Propagation upwards - After the target element handles the event, the event then bubbles up the DOM tree.
* Ancestor Handling - Each parent element along the way has the opportunity to handler the event if an event handler is attached to it.
* Reaches the root - This process continues until the event reaches the root the DOM tree.


## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where a single event listener is attached to a parent element to manage events that occur on its child elements. It s a pattern to handle events efficiently. Instead off adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property og the event object as a event.target
Event delegation is very useful -
* Efficiency
* Dynamic Elements
* Cleaner code
* Improved performance
* Simplified the code
  

## 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() - It stops the default browser behavior of an event. When an event is triggered on an HTML element, the browser often has a default behavior built in for that event. preventDefault() allows developers to override this default behavior.
Example :
* Prevent a from submitting
* Prevent a link from navigating

stopPropagation() - It stops the event from bubbling up the DOM tree. It is a method of the Event interface that prevents further propagation of the current event in the bubbling phases of the DOM event flow.
Example :
* Prevent parent elements event handlers from running.

