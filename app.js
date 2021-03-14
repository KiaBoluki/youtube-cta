var container = document.getElementById('container')

tglClass(0,3)
async function tglClass (min=0,seconds=1) {
    console.log(container);
    container.classList.add('active')
    await sleep(5000)
    container.classList.remove('active')
    console.log(container);
    await sleep(min*60*1000 + seconds*1000)
    tglClass(min,seconds)
}

function sleep(ms){
    return new Promise ( resolve => setTimeout(resolve,ms))
}


