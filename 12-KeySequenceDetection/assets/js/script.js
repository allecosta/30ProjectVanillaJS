let cornifyCount = 0;

let cornifyAdd = function (options) {
    cornifyCount += 1;
    let cornifyURL = "https://www.cornify.com/";
    let numType = "px";
    let heightRandom = Math.random() * 0.75;
    let windowHeight = 768;
    let windowWidth = 1024;
    let height = 0;
    let width = 0;
    let de = document.documentElement;
    let transform = "translate(-50%, -50%)";
    let showGrandUnicorn = cornifyCount == 15;
    let div = document.createElement("div");
    div.style.position = "fixed";
    div.className = "__cornify_unicorn";
    div.style.zIndex = 143143;
    div.style.outline = 0;
    div.onclick = cornifyAdd; 

    if (typeof window.innerHeight == "number") {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
    } else if (de && de.clientHeight) {
        windowHeight = de.clientHeight;
        windowWidth = de.clientWidth;
    } else {
        numType = "%";
        height = Math.round(height * 100) + "%";
    }

    if (showGrandUnicorn) {
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.zIndex = 143143143;
    } else {
        div.style.top = Math.round(Math.random() * 100) + "%";
        div.style.left = Math.round(Math.random() * 100) + "%";
        transform += " rotate(" + Math.round(Math.random() * 10 - 5) + "deg)";
    }

    let img = document.createElement("img");
        img.style.opacity = 0;
        img.style.transition = "all .1s linear";
        img.alt = "A lovely unicorn or rainbow";
        
        img.onload = function () {
            img.style.opacity = 1;
        };

    let currentTime = new Date();
    let submitTime = currentTime.getTime();

    if (showGrandUnicorn) {
        submitTime = 0;
    }

    let url = `https://www.cornify.com/corns/${Math.random() > 0.5 ? "r" : "u"}${Math.ceil(Math.random() * 7)}.gif`;


    if (options && (options.y || options.younicorns)) {
        url += "&y=" + (options.y ? options.y : options.younicorns);

        if (Math.random() > 0.5) {
            if (transform.length > 0) {
                transform += " scaleX(-1)";
            }
        }
    }

    div.style.transform = transform;
    div.style.MozTransform = transform;
    div.style.webkitTransform = transform;
    img.setAttribute("src", url);
    img.style.transition = "all .1s linear";
    
    div.onmouseover = function () {
        let size = 1 + Math.round(Math.random() * 10) / 100;
        let angle = Math.round(Math.random() * 20 - 10);
        let result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
        img.style.transform = result;
        img.style.MozTransform = result;
        img.style.webkitTransform = result;
    };

    div.onmouseout = function () {
        let size = 0.9 + Math.round(Math.random() * 10) / 100;
        let angle = Math.round(Math.random() * 6 - 3);
        let result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
        img.style.transform = result;
        img.style.MozTransform = result;
        img.style.webkitTransform = result;
    };

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
    div.appendChild(img);

    if (cornifyCount == 5) {
        let cssExisting = document.getElementById("__cornify_css");

        if (!cssExisting) {
            let head = document.getElementsByTagName("head")[0];
            let css = document.createElement("link");
            css.id = "__cornify_css";
            css.type = "text/css";
            css.rel = "stylesheet";
            css.href = "https://www.cornify.com/css/cornify.css";
            css.media = "screen";
            head.appendChild(css);
        }
        cornifyReplace();
    }

    cornifyUpdateCount();

    let event = new Event("cornify");
    document.dispatchEvent(event);
};


let cornifyUpdateCount = function () {
    let id = "__cornify_count";
    var p = document.getElementById(id);

    if (p == null) {
        p = document.createElement("p");
        p.id = id;
        p.style.position = "fixed";
        p.style.bottom = "5px";
        p.style.left = "0px";
        p.style.right = "0px";
        p.style.zIndex = "1000000000";
        p.style.color = "#ff00ff";
        p.style.textAlign = "center";
        p.style.fontSize = "24px";
        p.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'Marker Felt', serif"; 
        p.style.textTransform = "uppercase";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(p);
    }

    if (cornifyCount == 1) {
        p.innerHTML = "You cornified!";
    } else {
        p.innerHTML = "You cornified " + cornifyCount + " times!";
    }

    cornifySetCookie("cornify", cornifyCount + "", 1000);
};

let cornifySetCookie = function (name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + "; " + expires;
};

var cornifyGetCookie = function (cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";  
};

cornifyCount = parseInt(cornifyGetCookie("cornify"));

if (isNaN(cornifyCount)) {
    cornifyCount = 0;
}

var cornifyReplace = function () {
    let hc = 6;
    let hs;
    let h;
    let k;

    const words = [
        "Happy",
        "Sparkly",
        "Glittery",
        "Fun",
        "Magical",
        "Lovely",
        "Cute",
        "Charming",
        "Amazing",
        "Wonderful",
    ];

    while (hc >= 1) {
        hs = document.getElementsByTagName("h" + hc);
    
    for (k = 0; k < hs.length; k++) {
        h = hs[k];
        h.innerHTML = words[Math.floor(Math.random() * words.length)] + " " + h.innerHTML;
    }
        hc -= 1;
    }
};

var cornifyReplace = function () {
    let headerTypeIndex = 6;
    let headerElements;
    let headerElement;
    let i;
    
    const magicalWords = [
        "Happy",
        "Sparkly",
        "Glittery",
        "Fun",
        "Magical",
        "Lovely",
        "Cute",
        "Charming",
        "Amazing",
        "Wonderful",
    ];

    while (headerTypeIndex >= 1) {
        headerElements = document.getElementsByTagName("h" + headerTypeIndex);

    for (i = 0; i < headerElements.length; i++) {
        headerElement = headerElements[i];
        headerElement.innerHTML =
        magicalWords[Math.floor(Math.random() * magicalWords.length)] + " " + headerElement.innerHTML;
    }

        headerTypeIndex -= 1;
    }
};

let cornifyClickCupcakeButton = function () {
    let corns = document.getElementsByClassName("__cornify_unicorn");

    if (corns) {
        for (let i = 0; i < corns.length; i++) {
            corns[i].parentNode.removeChild(corns[i]);
        }
    }

    let button = document.getElementById("__cornify_count");

    if (button) {
        button.parentNode.removeChild(button);
    }

    button = document.getElementById("__cornify_cupcake_button");

    if (button) {
        button.parentNode.removeChild(button);
    }

    let event = new Event("cornify-clear");
    document.dispatchEvent(event);
};

let cornifyAddCupcakeButton = function () {
    let id = "__cornify_cupcake_button";
    let button = document.getElementById(id);

    if (!button) {
        button = document.createElement("div");
        button.id = id;
        button.onclick = cornifyClickCupcakeButton;
        button.style.position = "fixed";
        button.style.top = "10px";
        button.style.right = "10px";
        button.style.zIndex = 2147483640;
        button.setAttribute("aria-label", "Hide unicorns and rainbows");

        let image = document.createElement("img");
        image.src = "https://www.cornify.com/assets/cornify-cupcake-button.png";
        image.alt = "Cupcake button";
        image.width = 50;
        image.height = 50;
        image.style.width = "50px !important";
        image.style.height = "50px !important";
        image.style.display = "block !important";
        image.style.cursor = "pointer !important";
        image.style.margin = "0 !important";
        image.style.padding = "0 !important";
        button.appendChild(image);

        document.getElementsByTagName("body")[0].appendChild(button);
    }
};

const cornami = {
    input: "",
    pattern: "38384040373937396665",
    clear: setTimeout("cornami.clearInput()", 5000),
    load: function () {
        window.document.onkeydown = function (event) {
            if (cornami.input == cornami.pattern) {
                cornifyAdd();
                clearTimeout(cornami.clear);
                return;
            } else {
                cornami.input += event.keyCode;
                
                if (cornami.input == cornami.pattern) {
                    cornifyAdd();
                }
                clearTimeout(cornami.clear);
                cornami.clear = setTimeout("cornami.clearInput()", 5000);
            }
        };
    },
    clearInput: function () {
        cornami.input = "";
        clearTimeout(cornami.clear);
    },
};

cornami.load();
