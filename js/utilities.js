function env(path) {
    if (location.href.includes('http://127.0.0.1:5500/')) {
        // this is in dev mode
        return path;
    } else {
        if (location.href.includes('fadi-eljurdi.github.io')) {
            // in production mode
            // add /app/ directory to all links
            return '/igc' + path
        }
        return path
    }
}
function getPage(path) {
    var origin = new URL(location.href).origin
    if (origin.includes('fadi-eljurdi.github.io')) origin += '/igc'
    return new Promise((resolve, reject) => {
        // console.log(origin);
        fetch(`${origin}/${path}`).then(res => res.text()).then(res => {
            resolve(res)
        })
            .catch(err => {
                console.log(err);
                reject(err)
            })
    })
}
function getDistinctValues(array) {
    // Use a Set to store unique values
    const distinctSet = new Set(array);

    // Convert Set back to an array
    const distinctArray = Array.from(distinctSet);

    return distinctArray;
}

function addCommas(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}


function timo(date) {
    dayjs.extend(window.dayjs_plugin_relativeTime);
    dayjs();
    const futureDate = dayjs(date);
    // console.log(futureDate.fromNow());
    return futureDate.fromNow()
}

function fixClosingTags(htmlString) {
    const regex = /<\/\s*(\w+)\s*>/g;
    return htmlString.replace(regex, "</$1>");
}

function shareBlog(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        console.log('Web Share API not supported');
    }
}


function getYouTubeId(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/\?v=)|youtu\.be\/)([^\s&]+)/;
    const match = url.match(regex);    
    return match ? match[1] : null;
}

export default {
    getPage,
    getDistinctValues,
    addCommas,
    env,
    timo,
    fixClosingTags,
    shareBlog,
    getYouTubeId
}