const handleCatagory = async () => {
    
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
   

const data = await response.json();

// tab container
const tabContainer = document.getElementById("tab-container");
data.data.news_category.slice(0,3).forEach((category)=>{
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>`
    tabContainer.appendChild(div);
});
console.log(data.data.news_category);
};

//  search according to catagory Id and get result

const handleLoadNews=async (categoryId) =>{
const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
const data = await response.json();


// added cards auto without inner information
const cardContainer=document.getElementById("card-container");
cardContainer.innerHTML=""; //this function for cattagory change without old cads
data.data.forEach((news)=>{
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="card w-auto bg-base-100 shadow-xl">
                    <figure> <img src=${news?.image_url}/>  </figure>
                    <div class="card-body">
                      <h2 class="card-title">${news?.title.slice(0,50)}</h2>
                      <h2 class="bg-amber-100 w-20">${news?.rating?.badge}</h2>
                      <p>${news?.details.slice(0,100)}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>`;
    cardContainer.appendChild(div);
})
}





handleCatagory();
handleLoadNews("01")

