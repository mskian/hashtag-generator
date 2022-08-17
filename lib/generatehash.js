import '../styles/app.css';
import Alpine from 'alpinejs';
//import sanitizeHtml from 'sanitize-html';
window.Alpine = Alpine;
Alpine.start();

const link = document.querySelector('link[rel="canonical"]')
    ? document.querySelector('link[rel="canonical"]')
    : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

var el = document.querySelector('#postData');
if (el) {
    el.addEventListener('submit', postData);
}
function postData(event) {
    event.preventDefault();
    let getKeywords = document.querySelector('#getkeywords').value;
    const getInput = getKeywords || '#Helloworld';
    const word = getInput;
    const cleanTags = word.replace(/[^\w ]/g, '');
    const tagged = cleanTags.replace(/(\w+)/gi, '#' + '$1');
    window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
    );
    if (tagged === undefined || tagged === null) {
        if (document.getElementById('result') != null) {
            document.getElementById('result').innerHTML =
                '<br><div class="flex items-center justify-center"><div class="px-4 py-3 leading-normal hashtags rounded-lg shadow-2xl" role="alert"><p class="text-amber-300 font-semibold">Hashtag not Found</p></div></div>';
        }
    } else {
        if (document.getElementById('result') != null) {
            document.getElementById('result').innerHTML =
                '<br><div class="flex items-center justify-center"><div class="px-4 py-3 leading-normal hashtags rounded-lg shadow-2xl" role="alert"><p class="text-amber-300 font-semibold">Generating Hashtag...</p></div></div>';
            setTimeout(() => {
                document.getElementById(
                    'result'
                ).innerHTML = `<br><div class="flex items-center justify-center"><div class="h-fit w-fit p-12 py-12 hashtags space-y-4 rounded-lg shadow-2xl" id="copy-wish"><p class="text-amber-300 font-semibold">${tagged}</p></div></div>`;
                document.getElementById('copytags').innerHTML = `
        <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
        <button onclick="copyHashtags()" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
        👉 Copy
        </button>
        </div>`;
            }, 1000);
        }
    }
}
