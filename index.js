window.onload = function () {
    async function getBook() {
        try {
            let res = await fetch("https://the-dune-api.herokuapp.com/books");
            if (res.ok) {
                let data = await res.json();
                document.getElementById("text-message-heading").innerText = data[0].title;
                document.getElementById("text-message").innerText = data[0].year;
                document.getElementById("author-name").innerHTML = "";
                if (typeof(data[0].author) === typeof("string")) {
                    document.getElementById("author-name").innerHTML = `<p class="mb-0">${data[0].author}</p>`;
                }
                else {
                    for (let i in data[0].author){
                        document.getElementById("author-name").innerHTML += `<p class="mb-0">${data[0].author[i]}</p>`;
                    }
                }
                document.getElementById("book-url").href = data[0].wiki_url;
                document.getElementById("book-url").innerText = data[0].wiki_url;
            }
        }
        catch (error) {
            document.getElementById("text-message").className = "text-danger";
            document.getElementById("text-message").innerText = "Error! Something went wrong";
        }
    }

    document.getElementById("btn-fetch").addEventListener('click', function () {
        getBook();
    })
}