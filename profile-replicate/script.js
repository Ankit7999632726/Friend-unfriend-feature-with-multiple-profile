var arr = [
  {
    Name: "Missina Mesquita", catg : "Stangers",
    Image:
      "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    Name: "Ramu kaka", catg : "Stangers",
    Image:
      " https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    Name: "Aditya", catg : "Stangers",
    Image:
      "https://images.unsplash.com/photo-1614079575815-1c129b51426b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    Name: "Sofia", catg : "Stangers",
    Image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  }
];
function show(){
  var clutter = ``;

  for(var i=0;i<4;i++)
  {
   clutter = clutter + `<div class="new">
    <img src=${arr[i].Image} alt="">
    <div id="para">
        <h1>${arr[i].Name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur </p>
        <h3 id ='${arr[i].catg}'>${arr[i].catg}</h3>
    </div>
    <button id = '${i}'><i class="ri-user-add-line"></i></button>
</div>`;
  }
  document.querySelector("#new").innerHTML = clutter;
  
} 
show();
var btn=document.querySelector("button");
var h3=document.querySelector("h3");
var flag = 0;
var main = document.querySelector("#new");
main.addEventListener("click",function(dets){
  if(flag === 0)
  {
    h3.style.color="green";
    arr[dets.target.id].catg="sending request";
    main.innerHTML=`<i class="ri-close-fill"></i>`
    s=setTimeout(function(){
      arr[dets.target.id].catg="friends";
      show();
    },1000)
    flag=1;
    show();
  }
  else{
    clearTimeout(s);
    arr[dets.target.id].catg="strangers";
    main.innerHTML=`<i class="ri-user-add-line"></i>`
    flag=0;
  }
  show();
}
)