import axios from 'axios';

let element = document.querySelector("#hello") as HTMLElement;
if (element) {
  element.innerHTML = "hello world";
}

(document.querySelector("#button") as HTMLElement).addEventListener(
  "click",
  () => {
    let base64 = (document.querySelector('#base64') as HTMLElement).innerText;
    console.log(base64);
    let postJson = {
      data: {
        image: base64,
        text: "testFRONT",
      },
      headers: { "Content-Type": "application/json" },
    };
    
    axios
      .post("http://localhost:8080/api/embed", postJson)
      .then(function (response: any) {
        console.log(response.data);
      });
  }
);
