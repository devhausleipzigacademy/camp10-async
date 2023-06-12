interface BlogPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const button = document.querySelector("button");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error("no data found 404");
    }
    return res.json();
  })
  .then((data: BlogPost[]) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const post = {
  title: "First Post",
  body: "some text",
  userId: 1,
};

button?.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
  });
  const data = await response.json();

  console.log(data);
});
