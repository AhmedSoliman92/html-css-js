const btns = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.parentNode.classList.contains('active')) {
            update()
            btn.parentNode.classList.add('active')
        } else {
            btn.parentNode.classList.remove('active')
        }


    })
})

function update() {
    faqs.forEach(faq => {
        faq.classList.remove('active')
    })
}
