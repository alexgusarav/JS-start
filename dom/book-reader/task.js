const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

fontSizeButtons.forEach((btn) => {
    btn.addEventListener('click', switchSize);
});

function switchSize(event) {
    event.preventDefault();
    fontSizeButtons.forEach((btn) => {
        if (btn.classList.contains("font-size_active")) {
            btn.classList.remove("font-size_active");
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
          }
        });

        if (this.classList.contains("font-size_small")) {
            this.classList.add("font-size_active");
            book.classList.add("book_fs-small");
        } else if (this.classList.contains("font-size_big")) {
            this.classList.add("font-size_active");
            book.classList.add("book_fs-big");
        } else if (book.classList != "book_fs-big" && book.classList != "book_fs-small") {
            this.classList.add("font-size_active");
        }
}
