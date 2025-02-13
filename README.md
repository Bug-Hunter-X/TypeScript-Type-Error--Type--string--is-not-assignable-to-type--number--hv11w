# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution.  The error arises from attempting to pass a string value to a function parameter expecting a number.  The solution involves stricter type checking and input validation.

## Bug

The `add` function is designed to accept two numbers and return their sum. However, in the example, a string ('2') is passed as an argument, leading to a type error.

## Solution

The solution involves explicitly type-checking the input parameters before performing the addition operation.  Alternative solutions such as using `parseInt` or a more sophisticated type guard could also be implemented depending on the desired level of error handling.
