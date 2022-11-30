import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const searchForm = document.querySelector(".search-form");
const listEl = document.querySelector(".list");
const btnLoadMore = document.querySelector(".load-more")
let page = 1

btnLoadMore.setAttribute("hidden", true)

btnEl.addEventListener("click", onSearch);
btnLoadMore.addEventListener("click", loadMore)


function onSearch(e) {
  e.preventDefault()
  listEl.innerHTML = "";
  counterClik = 1;
  const searchValue = inputEl.value.trim()
  btnLoadMore.removeAttribute("hidden", true)
    
  pixabayAPI(searchValue, page).then(data => {
    listEl.insertAdjacentHTML("beforeend", createMarkup(data.hits));
    gallery.refresh();
    if (data.hits.length === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    } else {
       Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
    }
  }).catch(error => console.log(error))
  
}

async function pixabayAPI(value, page) {
  
    BASE_URL = "https://pixabay.com/api/"
    KEY_API = "31665473-d71629ddfe13db1f02d81492c"
    const resp = await fetch(`${BASE_URL}?key=${KEY_API}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    return await resp.json();
 
}

function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        `<div class="photo-card">
        <div class="wrap">
        
       <a class="link" href="${largeImageURL}">
  <img class="img-item" src="${webformatURL}" alt="${tags}" loading="lazy" />
  </a>
  </div>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}  
    </p>

    <p class="info-item">
      <b>Views</b>${views}
    
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}  
    </p>
  </div>
</div>`).join("")
        
}

 let gallery = new SimpleLightbox('.wrap a', {captionPosition: "bottom", captionDelay: 250});

 let counterClik = 1

function loadMore() {
  page += 1
  counterClik +=1
  const searchValue = inputEl.value.trim()
  
  pixabayAPI(searchValue, page).then(data => {
   
    listEl.insertAdjacentHTML("beforeend", createMarkup(data.hits))
     gallery.refresh()
    
    if (counterClik === 13) {
      btnLoadMore.setAttribute("hidden", true);
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
   } }).catch(error => console.log(error))
}
