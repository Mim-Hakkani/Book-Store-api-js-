//catch the id of input text && submit button
const input = document.getElementById('input-id'); 
const submit = document.getElementById('search-id'); 

const bookinput =() =>{
 const inputValue = input.value
 input.value =''

//for books
 fetch('https://openlibrary.org/search.json?q=javascript')
 .then(res=>res.json())
 .then(data =>BooksData(data.docs))

}


const BooksData =(books)=>{

    console.log(books); //array wise
    const booklist =document.getElementById('books-list')
    count =1
/*       books cover image show  */


    books.forEach(book =>{

        
        const div = document.createElement('div')
        div.classList.add('col-md-3')
        div.innerHTML =`
                <div class="card mb-2">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..." height="350">
                    <div class="card-body">
                            <h5 class="card-title">Book Name : ${book.title}</h5>
                            <h2>${count++}</h2>
                            <p class="card-text">
                                <span class="h5">Author Name:</span> ${book.author_name}<br/>
                                <span class="h5">Publisher Name:</span> ${book.publisher}<br/>
                                <span class="h6">First Published: </span> ${book.first_publish_year}
                               
                            </p>
                        <button class="btn btn-info text-white" onclick="bookmore('${book.text}')">More information</button>
                    </div>
                  
                </div>
            
        `
        booklist.appendChild(div)

    })
}

const bookmore =(moredetails)=>{
   
    const moreinfo = document.getElementById('more')
    moreinfo.textContent =''
    const p =document.createElement('p')
    p.classList.add('border')
    p.classList.add('p-4')
    p.classList.add('text-muted')
    p.innerText =moredetails

    moreinfo.appendChild(p)
   
   

}