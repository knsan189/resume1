$(function () {

    const about = document.getElementById('about').getBoundingClientRect().top + window.pageYOffset - 200
    const project = document.getElementById('works').getBoundingClientRect().top + window.pageYOffset - 200
    const contact = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset - 200
    const depth1Li = document.querySelectorAll('.depth1 > li')

    let sct;

    $(window).on('scroll', function () {
        sct = $(this).scrollTop()

        var header = $('#header')
        if (sct < about) {
            depth1Li.forEach(li => {
                const temp = li.textContent
                temp === 'HOME' ? li.classList.add('active') : li.classList.remove('active')
            })
            
        } 
        else if(sct >= about && sct < project){
            header.addClass('active')
            depth1Li.forEach(li => {
                const temp = li.textContent
                temp === 'ABOUT' ? li.classList.add('active') : li.classList.remove('active')
            })
        }
        else if(sct >= project && sct < contact){
            depth1Li.forEach(li => {
                const temp = li.textContent
                temp === 'PROJECTS' ? li.classList.add('active') : li.classList.remove('active')
            })
        }
        else if(sct >= contact){
            depth1Li.forEach(li => {
                const temp = li.textContent
                temp === 'CONTACT' ? li.classList.add('active') : li.classList.remove('active')
            })
        }
        

    })

    var liTag
    $('.depth1 > li').on('click', function (e) {
        e.preventDefault()
        $(this).addClass('active').siblings().removeClass('active')

        liTag = $(this).find('a').attr('href');
        moveTo(liTag);
    })


    function moveTo(data) {
        var article = $(data).offset().top
        $('html').stop().animate({
            scrollTop: article
        }, 500)
    }

})