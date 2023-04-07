const likeButton = document.getElementsByClassName('like-button')[0];
const searchBar = document.querySelectorAll('input[type=search]')[0];
const searchButton = document.querySelectorAll('button[type="submit"]')[0];
const Body = document.getElementsByTagName('body')[0];
let searchBarFocus = (document.activeElement === searchBar);
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
try
{
    var currentSlide = 1;
    showSlide(currentSlide)
    let slideShowInterval = setInterval(()=>{plusSlides(1)}, 3000)
    let pause = false;
    function plusSlides(index)
    {
        showSlide(currentSlide += index);
        // clearInterval(slideShowInterval);
        // slideShowInterval = setInterval(plusSlides(1), 3000);
    }
    function showSlide()
    {
        console.log(currentSlide);
        let slides = document.querySelectorAll('.slide')
        if(currentSlide < 1) 
        currentSlide = slides.length;
        if(currentSlide > slides.length) 
        currentSlide = 1;
        slides.forEach(slide => {
            slide.style.display = "none";        
        });
        slides[currentSlide-1].style.display = "block";
        console.log(currentSlide);
    }
    function Pause()
    {
        if(!pause)
        {
            clearInterval(slideShowInterval);
            pause = true;
        }
        else if(pause)
        {
            let slideShowInterval = setInterval(()=>{plusSlides(1)}, 3000);
            pause = false;
        }
    }
}
catch(err)
{
    console.log("there is no slideshow")
}
const searchString = {
    index: [
        "The 31st annual Rudgwick Steam & Country Show 2017 will be held over the three days of August Bank Holiday Weekend. This year’s show will bring together a wonderful array of the Great British past and present with stunning exhibits, animals and displays of all kind from all over the country.",
        "This country show has something for everyone to enjoy, the sights and sounds of the beautifully restored vehicles and exhibits of the past pondering around the site. Learn and see how things were done in the past with our numerous demonstrations and displays over the spectacular 44-acre site. See and stroke the heavy horses and take a look at our large pet and farm animal sections, ride on the old time traditional fair, Visit our 6,000 square feet quality Craft Marquee and new Food Hall with homemade cakes and lots more.",
        "You can sit down and take a break in our 140ft beer marquee with mini beer festival, while listening to live agricultural music from the New Forest Plonkers or relax in the Tea and Ploughman’s lunch marquee. Enjoy the always amusing animal parades from chickens to shires with an owl fly past. Learn about the magnificent and mighty traction engines at work in our agricultural working sections with tree trunk sawing, thrashing and baling demonstrations. See the chainsaw sculptors at work, the rural displays, ferret racing, all the vintage vehicles at work, acres of markets stalls, large autojumble section plus an action packed main arena events programme. An excellent family fun weekend with something for all ages to enjoy."
    ],
    Entertainment: "This country show has something for everyone to enjoy, the sights and sounds of the beautifully restored vehicles and exhibits of the past pondering around the site. We also have various displays of cute animals and sometimes if you’re lucky a stray owl will fly over your heads. We have people that come in fancy dress  let alone all our stalls; we have various food stalls, clothing stalls and little goodie stalls. We have a massive 140ft beer marquee with mini beer festival, while listening to live agricultural music from the New Forest Plonkers or relax in the Tea and Ploughman’s lunch marquee. Learn about the magnificent and mighty traction engines at work in our agricultural working sections with tree trunk sawing, thrashing and baling demonstrations. See the chainsaw sculptors at work, the rural displays, ferret racing, all the vintage vehicles at work, acres of markets stalls, large autojumble section plus an action packed main arena events.",
    Charity: "Last year we raised £198.31 for the British Heart Foundation which were so proud of and this year wed like to make even more for a charity thats not yet decided. Each year we give a portion of our profits towards a charity so please feel free to donate however you wish as it’ll go to a great cause. To helps those in need.",
    Animals: "If you have a goat, sheep,pig ,cow, horse or any animal you’d like to show or bring along feel free. You can always enjoy the amusing animal parades from chickens to shires with an owl fly past, we even have ferret racing and we’ve seen rabbits, guineas, chicks, ducks, hedgehog and even tortoises.",
    Address: [
        "We are located around the distances below from the selected areas. GUILDFORD…………………….12 MILES HORSHAM……………………..8 MILES BILLINGSHURST……………….5 MILES DORKING…………………….11 MILES GATWICK………………………….17 MILES LEATHERHEAD…………..17 MILES HEATHROW……………………..45 MILES BRIGHTON…………………..30 MILES SALISBURY………………………90 MILES PETWORTH…………………12 MILES CRANLEIGH……………………….4 MILES ALDERSHOT……………….17 MILES WOKING…………………………..18 MILES DARTFORD………………….50 MILES MIDHURST………………………..18 MILES BASINGSTOKE……………30 MILES", 
        "Rudgwick is a village and civil parish in the Horsham District of West Sussex England. The village is 6 miles west from Horsham on the north side of the A281 road.", 
        "Address: Windacres Barn/Church St Rudgwick Horsham West Sussex RH12 3EG. For SatVav look for: Hermonger Lane"],
    Reviews: [
        "We often get people write in to tell us just how much fun they, and their family, had while visiting our show; heres some just below.",
        "Hi Terry and Karen, Just a quick line to say thanks for a brilliant and well organized show. We raised £198-31 for the British Heart Foundation. We had loads of nice comments about our display; plus had a good time. Shame that I did not meet you both but I know that you were very busy. Once again many thanks for having us. Kind regards Pete Wheeler",
        "Dear Terry and Karen, I just wanted to say a big thank you for having the Mobile Ark to attend this years show. We had a fantastic weekend. It seemed to be another busy 3 days, as was last years! We brought our wallaby along this year and she proved to be a favourite for most people, along with the other animals – rabbits, guineas, chicks, ducks, hedgehog, tortoises,etc! The evening entertainment was great fun, and the whole show proved to be up to its usual standards of excellent organisation and great range of stalls and facilities. I would very much be interested in taking a stand at next years show, so please book us in for Rudgwick 2010!! Well done on another successful show this year and many thanks again. Regards, Imogen The Mobile Ark.",
        "Dear Show Organisers, We would like to send on our thanks for a great day out. We came on Sunday, what a pleasant supprise, could not believe the stuff that was there, so many different things for all the family. Excellent stuff, well done! Peter. Woking Surrey."
    ],
    contact: [
        "Feel free to get in contact with us and ask us any questions you may have!",
        "E-mail in at: chanaburi1@aol.com",
        "Call us on: 07803 581415 or : 01403 822378"
    ]
}
// console.log(searchString.Address);

function doSearch()
{
    for(let key in searchString)
    {
        // console.log((typeof(searchString[key])))
        if(typeof(searchString[key]) == "string")
        {
            if(searchString[key].match(searchBar.value) == searchBar.value)
            {
                window.location = key + ".html";
                return;
            }
        }
        else
        {
            for(let item in searchString[key])
            {
                if(item.match(searchBar.value) == searchBar.value)
                {
                    window.location = key + ".html";
                    return;
                }    
            }
        }
    }
    window.location = "NothingFound.html"
}

    