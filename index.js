const likeButton = document.getElementsByClassName('like-button')[0]
likeButton.addEventListener('click', ()=>
{
    if(likeButton.classList.contains('activated'))
        likeButton.classList.remove('activated')
    else
    likeButton.classList.add('activated')
})
