// ... existing code ...
useEffect(() => {
  fetch(process.env.PUBLIC_URL + '/yourfile.json')
    .then(response => response.json())
    .then(data => {
      // use your data here
    });
}, []);
// ... existing code ...
import data from './yourfile.json';
// ... existing code ...