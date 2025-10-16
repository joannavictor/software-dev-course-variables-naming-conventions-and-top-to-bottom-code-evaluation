/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
    It helps to  read and maintain the code easily.
  - What are the common pitfalls to avoid when naming variables?
    Avoid using single letters or ambiguous names that do not convey the purpose of the variable.
  - How do clear variable names benefit team collaboration?
    Code can be reused, understood, and maintained by different team members. Facilitates in building more functionality by different team members. team members
    can easily understand the purpose of each variable.
  
*/

let personName = "Alice";
let itemCount = 5;
let totalCost = 20;
let shopName = "FoodMart";

let costPerItem = totalCost / itemCount;

let tranSummary = personName + " bought " + itemCount + " items for $" + totalCost + " from " + shopName + ". Each item cost $" + costPerItem.toFixed(2) + ".";

console.log(tranSummary);
