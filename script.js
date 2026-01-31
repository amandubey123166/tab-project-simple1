// const tabs = document.querySelectorAll(".navbar div");
// const contents = document.querySelectorAll(".tab-content");

// tabs.forEach(tab => {
//   tab.addEventListener("click", () => {

//     // remove active from all tabs
//     tabs.forEach(t => t.classList.remove("active"));

//     // hide all contents
//     contents.forEach(c => c.classList.remove("active"));

//     // add active to clicked tab
//     tab.classList.add("active");

//     // show matching content
//     document.getElementById(tab.dataset.tab).classList.add("active");
//   });
// });

const tabs = document.querySelectorAll(".navbar div");
const contents =document.querySelectorAll(".tab-content")
console.log(tabs.typeof)

// console.log(contents)

for(let i=0;i<tabs.length;i++){

    tabs[i].addEventListener("click",() =>{
        for(let j=0;j<contents.length;j++){
            contents[j].classList.remove("active")
        }
        for(let k=0;k<tabs.length;k++){
            tabs[k].classList.remove("active");
        }
        tabs[i].classList.add("active");
         const contentId = tabs[i].dataset.tab
        document.getElementById(contentId).classList.add("active");
      document.getElementById(contentId).style.fontWeight="bold"
      document.getElementById(contentId).style.fontSize="30px";
   if(i===0){
          document.querySelector(".elements").style.backgroundColor="rgb(31, 49, 20)";
            document.getElementById(contentId).style.color="rgb(128, 199, 82)";
            

        }else if(i===1){
            document.querySelector(".elements").style.backgroundColor="rgb(47, 53, 22)";
              document.getElementById(contentId).style.color="rgb(142, 179, 58)";

        }else if(i==2){
            document.querySelector(".elements").style.backgroundColor="rgb(30, 55, 61)";
              document.getElementById(contentId).style.color="rgb(23, 131, 202)";
        }else if(i===3){
            document.querySelector(".elements").style.backgroundColor="rgb(141, 116, 105)";
              document.getElementById(contentId).style.color="rgb(128, 199, 82)";
        }
        

    })
    // tabs
}



