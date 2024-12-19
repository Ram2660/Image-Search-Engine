const accessKey="tu1fV4x8dWIkuG0tsKciPr3TlJglk6LGPtnterAhUWc"
const text=document.getElementById("search")
const submit=document.getElementById("submit")
const result=document.getElementById("search-result")
const more=document.getElementById("show-more")

let input=""
let page=1
async function searchimages(){
    input=text.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accessKey}&per_page=12`
    const response=await fetch(url);
    const data=await response.json();
    console.log(data)
    if(page===1){
        result.innerHTML=""
    }
    const results=data.results
    results.map((resultItem)=>{
        const image=document.createElement("img")
        image.src=resultItem.urls.small;
        const imageLink=document.createElement("a")
        imageLink.href=resultItem.links.html
        imageLink.target="_blank";
        imageLink.appendChild(image);
        result.appendChild(imageLink)
    })
    more.style.display="block"
}

submit.addEventListener("click",(p)=>{
    p.preventDefault();
    page=1;
    searchimages();
})
more.addEventListener("click",()=>{
    
    page++;
    searchimages();
})