const menuTogle = document.querySelector('.menuTogle');
const navigation = document.querySelector('.navigation');
const postsContainer = document.querySelector('#posts-conteiner');
const loader = document.querySelector('.loader');
const filterInput = document.querySelector('.filterInput');

let page = 1;

const getPost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  return response.json();
};

const generatePostTemplate = (posts) =>  posts.map( ({ id, title }) => `
  <div class="post">
    <div class="img-profile">
        <img src="../../imagens/69Malvadão.jpg">
        <div class="img-body">
            <h2 class="img-name">@69MALVADÃO</h2>
            <p class="img-title">Post</p>
        </div>
    </div>
    <div class="number">${id}</div>
    <div class="post-info">
      <h2 class="post-title">${title}</h2>
    </div>
    <div class="img-center"></div>
    <div class="options-right">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="bookmark-outline"></ion-icon>
        <ion-icon name="chatbubbles-outline"></ion-icon>
        <ion-icon name="share-social-outline"></ion-icon>
        <ion-icon name="flash-outline"></ion-icon>
    </div>
  </div>
`
).join('');

const addPostIntoDOM = async () => {
  const posts = await getPost();
  const postsTemplate = generatePostTemplate(posts);
  postsContainer.innerHTML += postsTemplate;
};

const getNextPosts = () => {
  setTimeout(() => {
    page++;
    addPostIntoDOM();
  }, 300);
};

const removeLoader = () => {
  setTimeout(() => {
    loader.classList.remove('show');
    getNextPosts();
  }, 1000);
};

const showLoader = () => {
  loader.classList.add('show');
  removeLoader();
};

const handleScrollToPageBottom = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const isPageBottomAulmostReached =
    scrollTop + clientHeight >= scrollHeight - 10;

  if (isPageBottomAulmostReached) {
    showLoader();
  }
};

const showPostIfMatchInputValue = (inputValue) => (post) => {
  const postTitle = post
  .querySelector('.post-title')
  .textContent.toLowerCase();

  const postContainsInputValue =
    postTitle.includes(inputValue);

  if (postContainsInputValue) {
    post.style.display = 'flex';
    return;
  };
  post.style.display = 'none';
};

const handleInputValue = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(showPostIfMatchInputValue(inputValue));
};

const clicked = () => {
  navigation.classList.toggle('active');
};

addPostIntoDOM();

menuTogle.addEventListener('click', () => clicked());
filterInput.addEventListener('input', handleInputValue);
window.addEventListener('scroll', handleScrollToPageBottom);