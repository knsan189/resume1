window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_vsj7vag', 'template_q5jztpj', this)
            .then(
                function () {
                    console.log('SUCCESS!');
                    location.href = '/resume1'
                    alert('이메일이 전송되었습니다.')
                },
                function (error) {
                    console.log('FAILED...', error);
                });
    });
}