// is javascript an interpreted or compiled language?

/*

The first javascript engines were mere interpreters as javascript was 
primarily designed for the web - browsers would read and run each line of code.

However modern javascript engines such as v8 now use the just-in-time compilation
for improved performance.

Just-in-time compilation (JIT) also called dynamic translation or run-time 
compilations involves compilation during execution of a program (at run time)
rather than before execution. 

JIT compilation is a combination of the two traditional approaches to 
translation - compilation and interpretation. 
JIT compilation combines the speed of compiled code with the flexibility 
of interpretation, with the overhead of an interpreter 
and the additional overhead of compiling and linking (not just interpreting). 

The phases of code compilation in javascript is:

1. Tokenizing: converting the source code to tokens
2. Parsing: converting the tokens to an abstract syntax tree
3. Code generation: converting the tree to a byte code

In this sense, javascript behaves more like a compiled code than an interpreted one
*/

/*
Good read
1. https://www.quora.com/Why-is-JavaScript-called-as-interpreted-language
2. https://almogad.medium.com/javascript-is-it-compiled-or-interpreted-9779278468fc
3. https://en.wikipedia.org/wiki/JavaScript_engine
4. https://blog.greenroots.info/javascript-interpreted-or-compiled-the-debate-is-over#comments-list
5. https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#whats-in-an-interpretation
6. https://softwareengineering.stackexchange.com/questions/138521/is-javascript-interpreted-by-design
*/