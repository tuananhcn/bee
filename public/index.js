const likeButton = document.getElementsByClassName('like-button')[0]
const searchBar = document.querySelectorAll('input[type=search]')[0]
const searchButton = document.querySelectorAll('button[type="submit"]')[0]
const Body = document.getElementsByTagName('body')[0]
let searchBarFocus = (document.activeElement === searchBar)
    // const focusEvent = new Event("focus")
    searchBar.addEventListener('focus', () => {
        // console.log(searchBarFocus)
        // if(searchBarFocus)
        if(window.innerWidth <= 753)
            searchButton.style.left = "75%"
        // else
        //     searchButton.style.left = "81%"
    })
    searchBar.addEventListener("focusout", () => {
        if(window.innerWidth <= 753)
            searchButton.style.left = "65%"
        // else
        //     searchButton.style.left = "81%"
    });
    window.addEventListener("resize", () => {
        if(window.innerWidth >= 753)
            searchButton.style.left = "81%"
        else
        {
            if(!(document.activeElement === searchBar))
                searchButton.style.left = "65%" 
            else 
                searchButton.style.left = "75%"
        }
    });
likeButton.addEventListener('click', ()=>
{
    if(likeButton.classList.contains('activated'))
        likeButton.classList.remove('activated')
    else
        likeButton.classList.add('activated')
})
