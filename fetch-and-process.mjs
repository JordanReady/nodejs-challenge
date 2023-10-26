import get from "axios";

get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    const posts = response.data;

    posts.forEach((post) => {
      console.log(`Post ID: ${post.id}, Post Title: ${post.title}`);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
