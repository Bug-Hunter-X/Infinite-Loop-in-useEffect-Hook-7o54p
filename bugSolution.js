```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This will run only once after mount
    let interval = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```