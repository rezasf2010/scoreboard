let homescoreEl = document.getElementById ("home-score")
let guestscoreEl = document.getElementById ("guest-score")
let count = 0
let countg = 0

function add1() {
    
    count += 1
    homescoreEl.textContent = count
      
}

function add2() {
    
    count += 2
    homescoreEl.textContent = count
      
}

function add3() {
    
    count += 3
    homescoreEl.textContent = count
}
    
function addg1() {
    countg += 1
    guestscoreEl.textContent = countg
}

function addg2() {
    countg += 2
    guestscoreEl.textContent = countg 
}

function addg3() {
    countg += 3
    guestscoreEl.textContent = countg    
}

function reset(){
    count = 0
    countg = 0
    homescoreEl.textContent = count
    guestscoreEl.textContent = countg
    // let gameEl = document.getElementById("game")
    // game = 1
    // result = game +1
    // gameEl.textContent += result
}