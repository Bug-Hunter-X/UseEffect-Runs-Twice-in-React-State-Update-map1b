# React useEffect Runs Twice Bug

This repository demonstrates a common React bug where the `useEffect` hook runs twice unexpectedly when the state update function is called multiple times within a single render cycle.

## Bug Description

The `useEffect` hook is designed to run after every render. However, calling the `setCount` function twice within the `handleClick` function leads to two consecutive state updates. This causes the `useEffect` hook to run twice even though the component only renders once.

## Solution

The solution involves ensuring that `setCount` is called only once per render cycle. This can be achieved by updating the state using a functional approach for updating state, or batching state updates.