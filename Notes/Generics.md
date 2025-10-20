# Concepts
- Generics
```
// Function Declaration
function myGenericFunction<T>(param: T) : T {
    // some logic
    return param;
}

// Function call
const ans = myGenericFunction<string>("abc");
```  
- Inferred Generics
```
// Function Declaration
function myGenericFunction<T>(param: T) : T {
    // some logic
    return param;
}

// Function call
const ans = myGenericFunction("abc");
``` 
- Multiple Generics
```
// Function Declaration
function myGenericFunction<T, U>(param1: T, param2: U) {
    // some logic
    return {...param1, ...param2};
}

// Function call
const ans = myGenericFunction({num1: 1}, {num2: 2});
``` 
- Hack for Typescript
```
// Function Declaration
function myGenericFunction<T, >(param: T) : T {
    // some logic
    return param;
}

// Function call
const ans = myGenericFunction<string>("abc");
```  
- Adding Constraint for Generics
```
// Function Declaration
function myGenericFunction<T extends object>(param: T) : T {
    // some logic
    return param;
}

// Function call
const ans = myGenericFunction<string>({abc: "abc"});
```  
- Default Type
```
// Function Declaration
function myGenericFunction<T = string>(param: T) : T {
    // some logic
    return param;
}

// Function call
const ans = myGenericFunction<string>("abc");
```
- Generic Class
```
class Playlist<T> {
    public queue: T[] = []
    add(el: T) {
        this.queue.push(el)
    }
}
```