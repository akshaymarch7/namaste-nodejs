![](https://miro.medium.com/v2/resize:fit:875/1*AjqYUQHi2RkP7cFacapiDw.jpeg)

**NodeJs - 03 : Let’s Write Code**

1.  **Installing Node.js**  
    First, let’s start by installing Node.js on your system. You can download the latest version of Node.js from the official website ([https://nodejs.org/en](https://nodejs.org/en)).

Node.js includes \`**npm**\` (Node Package Manager), which allows you to manage and install packages for your JavaScript projects.

**2\. Verifying the Installation**

After installation, verify that Node.js and npm are installed correctly by running the following commands in your terminal:  
**node -v  
npm -v**

The \`**node -v**\` command checks the version of Node.js installed, and \`**npm -v**\` checks the version of npm. If both commands return version numbers, the installation was successful.

**3\. Writing Code**

Using the Node **REPL (Read, Evaluate, Print, Loop)**  
Node REPL is an interactive environment where you can write and execute JavaScript code directly in the terminal. It allows you to quickly test and experiment with JavaScript without needing to write code in a file first.

To start the Node REPL, open your terminal and type:  
**node**

![](https://miro.medium.com/v2/resize:fit:875/1*Q43g1eclPJdgeNbkxNoadg.jpeg)

Once in the REPL, you can start typing JavaScript code. The REPL will immediately evaluate your code and print the result.

**This is all running in a Node.JS runtime environment.**  
When you use the Node REPL, you are interacting with the Node.js runtime environment, which is responsible for executing your JavaScript code outside of a web browser.

**Node.js is a JavaScript runtime environment, and behind the scenes, it uses the V8 engine.**  
The V8 engine, developed by Google, is the same engine that powers the Chrome browser. It takes your JavaScript code and compiles it into machine code, which your computer can execute. Node.js leverages this powerful engine to run JavaScript on the server side.

**It’s similar to a browser console.**  
Just like the console in your web browser, the Node REPL allows you to write and test JavaScript code interactively. However, instead of running in the browser, it runs on your system’s terminal, allowing you to interact with the underlying operating system and perform tasks like file handling, server management, and more.

**However, writing code like this for a long time can be frustrating.**  
While the REPL is great for quick experiments, it’s not ideal for larger projects or more complex code. The lack of features like syntax highlighting, debugging tools, and project organization makes it cumbersome for extended use.

**4\. Let’s write code in VS Code or any editor of your choice.**

-   **First, create a new folder**

On your system where you will store your project files. You can name the folder anything you like

-   **Next, open this folder in Visual Studio Code (VS Code)**

You can do this by right-clicking on the folder and selecting “Open with Code” (if you have VS Code integrated into your context menu)

-   **Now, create a new file inside the folder** and name it`app.js`

To create a new file, right-click inside the folder in the VS Code Explorer pane, select “New File,” and name the file `app.js`

**4\. Now, let’s write some basic JavaScript code inside the** `app.js` **file**

```js
let name = "Node JS 03";
let a = 5;
let b = 10;
let c = a + b;
console.log(name);
console.log(c);

```

**5\. Open the terminal using the shortcut Ctrl +**

**6\. Now write command node app.js to run the code.**

![](https://miro.medium.com/v2/resize:fit:875/1*ONwyz9lwITAetgi6gbmLfQ.jpeg)

**7\. Global Objects in Node.js**

**What Are Global Objects?**  
\- **Global objects** are objects that are available in all scopes. In Node.js, these objects provide core functionalities without needing to require them explicitly in your code.

**Differences Between Browser and Node.js Global Objects**  
\- **In a web browser**, the global object is called \`window\`. The \`window\` object is automatically created by the browser environment and provides access to various browser-specific features, like the Document Object Model (DOM), as well as methods like **\`alert()\`**, **\`setTimeout()\`**, and **\`setInterval()\`**.  
— It’s important to note that the **\`window\`** object is not part of the **V8** engine itself but is provided by the browser environment.

![](https://miro.medium.com/v2/resize:fit:875/1*80If3Bj1WEuguhZsrRdSig.jpeg)

**Global Object in Node.js**  
\- In Node.js, the global object is called \`global\`.  
— Similar to the \`window\` object in browsers, the \`global\` object in Node.js provides access to globally available functionalities, such as:  
**— \`setTimeout()\`  
— \`setInterval()\`  
— \`console\`  
— \`process\`**

**Important Note:**  
\- Global objects are not part of the V8 engine itself; they are provided by **Node.js**, which is built on top of V8. Node.js extends the capabilities of the V8 engine by adding these global objects, allowing it to perform tasks like file handling, interacting with the operating system, and handling asynchronous events.

**Example:**  
\- When you execute \`console.log(this);\` in the Node.js REPL or a Node.js script, it will output an empty object (\`{}\`).

**8\. Global this:**

is always the global object, regardless of where it is accessed. It was introduced in ECMAScript 2020 to provide a standardized way to refer to the global object in any environment (browsers, Node.js, etc.).

-   In browsers, `globalThis` is equivalent to `window`.
-   In Node.js, `globalThis` is equivalent to `global`.
-   It provides a consistent way to access the global object without worrying about the environment.