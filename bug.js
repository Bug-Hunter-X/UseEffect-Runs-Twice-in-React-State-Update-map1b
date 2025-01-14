```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
  }, [count]); // <-- Only re-run the effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This will cause the effect to run twice in quick succession
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```