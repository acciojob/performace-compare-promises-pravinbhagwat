// Array of API URLs to fetch data from
const apiUrls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5",
    "https://jsonplaceholder.typicode.com/todos/6",
    "https://jsonplaceholder.typicode.com/todos/7",
    "https://jsonplaceholder.typicode.com/todos/8",
    "https://jsonplaceholder.typicode.com/todos/9",
    "https://jsonplaceholder.typicode.com/todos/10",
  ];
  
  // You can write your code here
  function fetchData(method) {
      let startTime = new Date().getTime();
      const promises = apiUrls.map((api) => fetch(api));
  
      let resultPromise;
      
      if(method === "all") {
          resultPromise = Promise.all(promises);
      }
      else {
        resultPromise = Promise.any(promises);
      }

      resultPromise.then(result => {
        const endTime = new Date().getTime();
        const timeTaken = endTime - startTime;
        
        document.getElementById(`output-${method}`).innerText = timeTaken;

    }).catch(error => {
        console.log(error);
    });
  }

  fetchData("all");
  fetchData("any");