// let jsonRes = '{"name":"John","age":30,"city":"New York"}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.name); // Output: John 

let url = "https://catfact.ninja/fact";

// fetch(url) // returns a promise
// .then((response)=>{
//     console.log(response);
//     response.json() // returns a promise
//     .then((data)=>{
//         console.log(data);
//     });
// })
// .catch((err)=>{
//     console.log("err-",err);
// });


async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (error) {
        console.log("err-", error);
    }
    console.log("Bye");
}
