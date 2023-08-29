const newsloader = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  const categories = data.data.news_category;

  //   add navber
  const navber = document.getElementById("tab-conatainer");

  categories.forEach((addcategories) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <a onclick="handleNews('${addcategories.category_id}')" class="tab font-semibold ">${addcategories.category_name}</a> 
    `;
    navber.appendChild(div);
    // handleNews(addcategories)
  });
};

const handleNews = async (id) => {
  console.log(id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const newsdata = await res.json();

  const post = document.getElementById("news-container");
  post.innerHTML = "";

  newsdata.data?.forEach((newspost) => {
    console.log(newspost);
    const postfirst = document.createElement("div");
    postfirst.classList = `card card-side bg-base-100 shadow-xl`;
    postfirst.innerHTML = `
      <figure><img src="${newspost.image_url}" alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">${newspost.title}</h2>
    <p>${newspost.details.slice(0,143)}</p>
  
      <img class="w-28 rounded-full" src="${newspost.author.img}" />
    <h2 class="font-semibold">Name: ${newspost.author.name}</h2>
    <h2 ><span class="font-semibold" >Published-date:</span> ${newspost.author.published_date}</h2>
    <h2 class="font-semibold">Views: ${newspost.rating.number}M</h2>
    <div class="card-actions justify-center">
   
  </div>
      <button class="btn btn-primary text-white">Reed More</button>
    </div>
  </div>
    `;
    post.appendChild(postfirst);
  });
};

handleNews("05");
newsloader();
