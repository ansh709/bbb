class Nav {
    constructor(tabname, tablink, tabicon,even) {
        this.tabname = tabname;
        this.tablink = tablink;
        this.tabicon = tabicon;
		this.even = even;
		
    }
}

var tab01 = new Nav("Profile", "index.html", '<i class="fas fa-user-alt"></i>',"mypage(event,'profilePage')");
var tab02 = new Nav("Task", "index.html", '<i class="fab fa-magento"></i>',"mypage(event,'task')");
var tab03 = new Nav("Home", "index.html", '<i class="fas fa-home"></i>',"mypage(event,'home')");
var tab04 = new Nav("Setting", "index.html", '<i class="fas fa-cog"></i>',"mypage(event,'settings')");
var tab05 = new Nav("About", "index.html", '<i class="far fa-address-card"></i>',"mypage(event,'about')");



var AllnavData = () => {
    arr = [tab01, tab02, tab03, tab04, tab05];
    document.querySelector("nav").innerHTML += `<div class="container-fluid"><div class="row"><div class="col-md-12"><div class="navItem"><ul class="navbar-nav nav"></ul></div></div></div></div>`;

    for (var i in arr) {
        document.querySelector('nav>.container-fluid>.row>.col-md-12>.navItem>ul').innerHTML += `
         <li><a href="#" onclick="${arr[i].even}">${arr[i].tabicon}</a></li>`;
    }
}


document.addEventListener("DOMContentLoaded", AllnavData);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}