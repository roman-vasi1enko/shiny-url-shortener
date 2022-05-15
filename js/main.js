document.getElementById('encodeMessage').addEventListener('click', getFetch);




function getFetch(){
    const longUrl = document.querySelector('input').value;
    const url = `https://api.shrtco.de/v2/shorten?url=${longUrl}`;
    

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);;
            document.querySelector('.shortUrl').href = `${data.result.full_short_link3}`;
            document.querySelector('.shortUrl').innerText = `✨ ${data.result.full_short_link3} ✨`;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
