import get from "axios";

async function fetchData() {
  try {
    const [data1, data2] = await Promise.all([
      get("https://jsonplaceholder.typicode.com/posts/1"),
      get("https://jsonplaceholder.typicode.com/posts/2"),
    ]);

    console.log("Data 1:", data1.data);
    console.log("Data 2:", data2.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
