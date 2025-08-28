## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Here is the basic differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll -

* getElementById : Selects a single element bases on its unique id attribute. It returns a single Element object. If no element with the specified ID exits it returns null.
* getElementsByClassName : Selects all elements that have a specific class name. Multiple elements can share the same class name. It returns live HTMLCollection of elements. Meaning "live" is its automatically updates 
