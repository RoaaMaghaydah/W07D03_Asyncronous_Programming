const fs = require("fs");
const axios = require("axios");

fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    content = data.toString();
    console.log(content);
  });

  
fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    console.log("done");
  });

  const getPost = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log('DATA:', response.data);
    
      })     
      .catch((error) => {
        console.log('ERR:', error);
      });
    };
  
  //getPost(1);
 // getPost(50);

  const getPostAsync =async (id) => {
    const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log("111",response.data)
  };
  getPostAsync(1);
  getPostAsync(50);
  
  