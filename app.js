const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

const readFile = () => {
    fs.readFile("data.txt", (err, data) => {
        if (err) throw err;
        content = data.toString();
        console.log(content);
    });
}
readFile();
const writeFile = () => {
    fs.writeFile("text.txt", "A new file has been created", (err) => {
        if (err) throw err;
        console.log("done");
    });
}

writeFile();
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
//getPost(50);

const getPostAsync = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log("111", response.data)
};
//getPostAsync(1);
//getPostAsync(50);


const appendToFile = (data) => {
    fs.appendFile('data.txt', data, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
};
// appendToFile("append done  ");

const copyFile = (fileName) => {
    fs.copyFile('data.txt', 'copy_of_data.txt', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
    });
};

//copyFile();

const post = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    
    userId: 1,
});

const createPost = (user) => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, user)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            throw err;
        });
};
//createPost(post);


const newPost = JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
});

const updatePost = (id, data) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
        .then((response) => {
            console.log(response.data);
        })
        // in `.catch()` we add the code to handel the error
        .catch((err) => {
            throw err;
        });
};

//updatePost(1, newPost);

console.log('________________________________________________')

const getUsers = () => {
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
      console.log (response.data);
})
  };
//getUsers();

