let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshay",
    "email": "akshay@akgec.ac.in",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "akgec.ac.in",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}


submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("ffkf")
    let key = "ema_live_b1gm0K8imKNYyVcF4XGJgOxJIjJhlUra7cUKWzvI"
    let email = document.getElementById("username").value
    
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ` `
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
            str = str + `<div>${key}: ${result[key]}</div>`
        }   
    }
    console.log(str)
    resultcon.innerHTML = str
})
