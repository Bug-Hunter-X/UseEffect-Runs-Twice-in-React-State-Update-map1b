```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 2); // Functional update
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```