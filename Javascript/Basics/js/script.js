document.addEventListener("DOMContentLoaded",
  function(event){
    function sayHello(){
      this.textContent = "you";
      var name = (document.getElementById("name").value);
      var hi = "<h2>Hello " + name + "!<h2>";
      document.getElementById("content").innerHTML = hi ;
      if (name === "people"){
        document.querySelector("#title").textContent;
        title = "I made this for you ";
        document.querySelector("h1").textContent = title;
      }
      
      
      };
      document.querySelector("button").addEventListener("click",sayHello);
      document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );
      
  });

