// let jsonRes = '{"name":"John","age":30,"city":"New York"}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.name); // Output: John 

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
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


// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     } catch (error) {
//         console.log("err-", error);
//     }
//     console.log("Bye");
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (error) {
//         console.log("err-", error);
//         return "No fact found";
//     }
// }

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    } catch (error) {
        console.log("err-", error);
        return "No Image found";
    }
}