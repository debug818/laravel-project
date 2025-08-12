async function hello() {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
    const res_json = await res.json()
        // console.log(res_json)
    return res_json
}

hello().then((data) => {
    for (let x in data) {
        document.write(`
            
    <div class="body" style="display: flex;">
        <div class="card-upfront" style="border: solid black;">
            <img src="${data[x].download_url}" alt="" width="150px" height="150px"> <br>
                <h5>${data[x].author}</h5>
        </div>
    </div> <br>`)
    }

}).catch((err) => {
    console.log(`Error Occured => ${err}`)
})