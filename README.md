# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug: an infinite loop caused by an incorrectly used `useEffect` hook.

## Bug Description
The `MyComponent` component uses `useEffect` to update the `count` state. However, the `count` state is included as a dependency, creating a loop where the effect is constantly triggered, leading to an infinite render cycle.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the rapidly increasing count in the browser console and the browser crashing or freezing.

## Solution
The solution is to omit `count` from the dependency array.  This prevents the effect from running every time the count changes, fixing the infinite loop. The `bugSolution.js` file demonstrates this fix.

## Technologies Used
* React
* JavaScript