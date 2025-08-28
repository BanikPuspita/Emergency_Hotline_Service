# 📘 JavaScript Q&A
## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?
- **`getElementById("id")`** → Selects a single element by its unique ID. Returns only **one element**.  
- **`getElementsByClassName("class")`** → Selects all elements with a given class. Returns a **live HTMLCollection** (updates if DOM changes).  
- **`querySelector("selector")`** → Returns the **first matching element** (CSS-style selector).  
- **`querySelectorAll("selector")`** → Returns **all matching elements** as a static **NodeList** (doesn’t update automatically).  

---
