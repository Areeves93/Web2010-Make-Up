const searchTerm = document.querySelector('#searchTerm')
const searchbutton = document.querySelector('#searchbutton')
const randomButton = document.querySelector('#randomButton')
const output = document.querySelector('.output')



const news_link = 'https://www.cbsnews.com'
const randomEndpoint = ''


let ajaxSearch = function(){

  output.innerHTML = ""

  const API_URL = `https://newsapi.org/v2/everything?sources=cbs-news&apiKey=872727b838284188a7e140e718fbcdc7`

  $.ajax({
    type: 'GET',
    url: API_URL,
    async: false,
    dataType: 'json',
    success: function (data) {
    console.log(data);

      for (let i in data[1]){
        output.innerHTML += `
          <li class="listItem">
            <a href="${data[3][i]}" target="_blank"> ${data[1][i]} </a>
            <p> ${data[2][i]} </p>
          </li>
        `
      }
    },
    error: function (err) {
      console.log('There was an error');
    }
  })
}

let randomSearch = () => {
  window.open(`${news_link}${randomEndpoint}`)
}

searchButton.addEventListener('click', ajaxSearch)
randomButton.addEventListener('click', randomSearch)