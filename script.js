function confirmAndRedirect() {
    var result = confirm("Bạn có muốn mua sản phẩm này không? \n Sẽ chuyển đến Messenger");
    if (result) {
      // Thay thế "your_facebook_page_url_here" bằng đường dẫn đến trang Facebook của bạn
      window.location.href = "https://m.me/thecuong0602";
    }
  }
// ====== typing ===========================//
async function init() {
    const node = document.querySelector("#type-text")
 
    await sleep(2000)
    node.innerText = "> "
    await node.type('Hello, I am ')
 
    while (true) {
        await node.type('LEMIN!')
        await sleep(3000)
        await node.delete('hhieu02!')
        await node.type('a Hair Stylist')
        await sleep(3000)
        await node.delete('a Graphic Designer')
        await node.type('a ... ')
        await sleep(3000)
        await node.delete('a UX/UI Designer')
        await node.type('a Video Editor')
        await sleep(3000)
        await node.delete('a Video Editor')
        await node.type('Cường đẹp trai')
        await sleep(3000)
        await node.delete('Cường đẹp trai')
    }
}
 
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
 
class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
        const randomMs = 200 * Math.random() /*tốc độ typing*/
        return randomMs < 50 ? 10 : randomMs
    }
 
    async type(text) {
        for (let character of text) {
            this.innerText += character
            await sleep(this.typeInterval)
        }
    }
 
    async delete(text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, this.innerText.length - 1)
            await sleep(this.typeInterval)
        }
    }
}
 
customElements.define('type-async', TypeAsync, {
    extends: 'span'
})
 
 
init()


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
