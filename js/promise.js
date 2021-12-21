function GetPhoto(title, thumb, url) {
    const file = document.createElement('img');
    file.src = thumb;
    file.alt = url;

    document.querySelector('.list').appendChild(file);
}

function Page(cPage) {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=8&_page=' + cPage)
        .then(response => response.json())
        .then(data => {
                for (let item of data) {
                    GetPhoto(item['title'], item['thumbnailUrl'], item['url'])
                }
                document.querySelector('.load').setAttribute('style', 'display: none;');
                document.querySelector('.fail').setAttribute('style', 'display: none;');
            }
        ).catch((err) => {
        console.log(err);
        document.querySelector('.fail').setAttribute('style', 'display: inline;')
    });
}

let currentPage = 1;
Page(currentPage);

document.querySelector('.more').addEventListener("click", function () {
    currentPage++;

    Page(currentPage);
})