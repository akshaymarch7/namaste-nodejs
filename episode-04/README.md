![](https://miro.medium.com/v2/resize:fit:875/1*6xRj31sjjT6Xlb8wTxfvYQ.jpeg)

When building a large-scale project in Node.js, it’s important to avoid putting all our code into a single file. Instead, we should organize our code across multiple files to keep it clear and manageable. In this chapter, we’ll explore how we can create and structure these files, as well as delve into key concepts like modules and how to import and export functionalities between them. Let’s get started!

## **— Let’s understand Module Pattern**

1.`commonjs` (CJS) **Module Pattern**

![](https://miro.medium.com/v2/resize:fit:875/1*_i9fr8cCVPz5Np4CQ2Ihuw.png)

These two files, **app.js** and **sum.js,** have different code that is not related to each other, so **in NodeJS we call them separate modules.**

**Q: How do you make two modules work together?**

— using a **require function**

**How** `**require**` **Works ?**

When you use `require`, Node.js performs the following steps:

-   **Resolving**: Node.js first resolves the path to the module you’re trying to import. This can be a core Node.js module, a local file, or a module from the `node_modules` directory.
-   **Loading**: After resolving the path, Node.js loads the module. If the module has already been loaded (i.e., it’s cached), Node.js will reuse the existing module to improve performance.
-   **Wrapping**: Node.js wraps the module code in a function to provide it with its own scope, preventing variables and functions from polluting the global scope.
-   **Execution**: Node.js executes the module’s code within its own scope.
-   **Caching**: Once executed, Node.js caches the module, so future `require` calls load the cached version instead of executing the module code again.

In Node.js, the **require()** function is a **built-in function** that allows you to **include** or **require** other modules into our **main modules.**

Now, let’s write our code using the `require` function.

**Task:** Our objective is to execute the code written in the `sum.js` module by running the `app.js` module.

![](https://miro.medium.com/v2/resize:fit:875/1*67MCuIpL159cjAwQ0ctKGQ.png)

![](https://miro.medium.com/v2/resize:fit:875/1*rcLPR7mjQGMhIbp7w5jRVg.png)

![](https://miro.medium.com/v2/resize:fit:875/1*9yz_uAjEwq7779dyYZZgpw.png)

![](https://miro.medium.com/v2/resize:fit:875/1*BvRHMpXlmWf_1tMV6hrQVg.png)

Here’s a **brief explanation** of how the provided **CommonJS** code works:

1.**Importing the Module**:

```
<span id="2926" data-selectable-paragraph=""><span>const</span> { calSumFromSum, x } = <span>require</span>(<span>'./sum.js'</span>);</span>
```

-   This line imports two items (`calSumFromSum` function and `x` variable) from the `sum.js` module using the `require` function.
-   `require` resolves the path to `./sum.js`, executes the file, and returns the exported content.

2\. **Variables in the Main File**:

```
<span id="6534" data-selectable-paragraph=""><span>var</span> name = <span>"Deepak Maurya"</span>;<br><span>var</span> a = <span>10</span>;<br><span>var</span> b = <span>15</span>;</span>
```

-   These lines define variables `name`, `a`, and `b` within the main file.

**3\. Using the Imported Function**:

```
<span id="5028" data-selectable-paragraph="">calSumFromSum(<span>a</span>, <span>b</span>);</span>
```

-   The `calSumFromSum` function, imported from `sum.js`, is called with arguments `a` and `b`. This function calculates and **logs** the sum of `a` and `b`.

**4\. Logging the Imported Variable**:

```
<span id="c1ed" data-selectable-paragraph="">console.<span>log</span>(x);</span>
```

-   The value of `x`, imported from `sum.js`, is logged to the console.

**5\. Exporting from** `**sum.js**`:

```
<span id="032c" data-selectable-paragraph=""><span>module</span>.<span>exports</span> = {<br>    calSumFromSum,<br>    x,<br>};</span>
```

In `sum.js`, the `calSumFromSum` function and `x` variable are exported using `module.exports`, making them accessible in other files via `require`.

**6\. Execution of** `**sum.js**`:

When `require('./sum.js')` is called, Node.js executes `sum.js`. The console logs `"Sum module executed"`, assigns a value to `x`, defines `calSumFromSum`, and then exports these for use in other files.

CommonJS is a module system used in Node.js that defines how modules should be structured, loaded, and managed. It provides a standard way to organize and reuse code by encapsulating it in modules, making it easier to build large, maintainable applications.

## Key Features of CommonJS:

**CommonJS Module System**: CommonJS allows developers to break down their code into smaller, reusable modules. Each module is a separate file that can export its functionality and import other modules.

`**require**` **Function**: This function is used to import a module into another file. When you `require` a module, Node.js loads the file, executes its code, and returns the exported object.

`**module.exports**`: This object is used to define what a module exports, making specific functions, objects, or variables available to other modules that require it.

How it works?

-   **Synchronous Loading**: Modules are loaded synchronously, meaning the code execution waits for the module to load before moving on to the next line.
-   **Scope Isolation**: Each CommonJS module has its own scope, preventing variables and functions from leaking into the global scope, which helps avoid conflicts and keeps code clean.
-   **Caching**: Once a module is loaded, it’s cached. Subsequent `require` calls return the cached version, improving performance by avoiding redundant loading and execution.
-   **Backward Compatibility**: CommonJS was designed to be compatible with older JavaScript environments, making it widely adopted in many Node.js applications and libraries.

2.`ES Module` **(MJS) Module Pattern**

![](https://miro.medium.com/v2/resize:fit:875/1*zLBpxEoYrf9cyz5afX5hJQ.png)

![](https://miro.medium.com/v2/resize:fit:875/1*Qj8Mm26D-6ZGi2g3m9pH-Q.png)

![](https://miro.medium.com/v2/resize:fit:875/1*cbpqajcuZpgsDTM1X6ScfQ.png)

![](https://miro.medium.com/v2/resize:fit:875/1*VWBbUWY-fRNsN4gHa1ibNg.png)

**ES Modules** (also known as **MJS**) is a modern module system used in JavaScript and supported by Node.js. Unlike **CommonJS**, ES Modules use `import` and `export` statements, aligning with the way modules work in browsers.

Here’s how **ES Modules** work using above provided code -

**Key Features of ES Modules (MJS):**

1.  `**import**` **Statement**: ES Modules use the `import` statement to bring in functionalities from other modules. This is a more modern and flexible approach compared to the `require` function in CommonJS.

```
<span id="825b" data-selectable-paragraph=""><span>import</span> { calSumFromXyz, x } <span>from</span> <span>"./xyz.js"</span>;</span>
```

-   This line imports the `calSumFromXyz` function and the `x` variable from the `xyz.js` module.

**2**. `**export**` **Statement**: The `export` statement is used to make functions, objects, or variables available for import in other modules.

```
<span id="5ffa" data-selectable-paragraph=""><span>export</span> <span>var</span> x = <span>"var x from xyz module"</span>;<br><span>export</span> <span>function</span> <span>calSumFromXyz</span>(<span>x, y</span>) {<br>    <span>console</span>.<span>log</span>(x + y);<br>}</span>
```

-   In this code, the `x` variable and the `calSumFromXyz` function are exported, making them accessible in other files.

**3**. **Module Type Configuration**: To use ES Modules in Node.js, you must specify `"type": "module"` in your `package.json` file. This tells Node.js to treat `.js` files as ES Modules.

**4**. **Asynchronous Loading**: Unlike CommonJS, ES Modules support asynchronous loading, which can be more efficient in certain scenarios, especially in a web environment.

**5**. **Strict Mode**: ES Modules are always in strict mode by default. This means you must declare variables with `let`, `const`, or `var`, and certain features like `with` statements are not allowed.

## Example in Action:

Let’s break down the provided code-

1.  **Importing the Module**:

```
<span id="501f" data-selectable-paragraph=""><span>import</span> { calSumFromXyz, x } <span>from</span> <span>"./xyz.js"</span>;</span>
```

-   Here, we import the `calSumFromXyz` function and `x` variable from the `xyz.js` module using the `import` statement.

**2\. Using Imported Functions and Variables**:

```
<span id="ed1f" data-selectable-paragraph=""><span>var</span> name = <span>"Deepak Maurya"</span>;<br><span>var</span> a = <span>10</span>;<br><span>var</span> b = <span>15</span>;<br><br><span>calSumFromXyz</span>(a, b);<br><span>console</span>.<span>log</span>(x);</span>
```

-   The `calSumFromXyz` function is called with `a` and `b` as arguments, and the result (sum) is logged. The value of `x` is also logged.

**3\. Exporting from the** `**xyz.js**` **Module**:

```
<span id="2238" data-selectable-paragraph=""><span>export</span> <span>var</span> x = <span>"var x from xyz module"</span>;<br><span>export</span> <span>function</span> <span>calSumFromXyz</span>(<span>x, y</span>) {<br>    <span>console</span>.<span>log</span>(x + y);<br>}</span>
```

-   The `xyz.js` module exports the `x` variable and the `calSumFromXyz` function. This makes them accessible to other modules that import them.

**5\. Execution in the Module**:

```
<span id="2a38" data-selectable-paragraph="">console.<span>log</span>(<span>"xyz module executed"</span>);</span>
```

-   When the `xyz.js` module is imported, this line is executed, logging `"xyz module executed"` to the console.

## Conclusion

Both `CommonJs` and `ES Modules`have their strengths and are essential tools for organizing and managing your code in **Node.js**. Understanding when and how to use each module system can significantly improve your code’s structure, performance, and maintainability. As the JavaScript ecosystem evolves, **ES Modules** are becoming more prevalent, offering modern features and better alignment with JavaScript’s standard practices.