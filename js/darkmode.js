$(document).ready(function() {
    $("main").prepend(`
    <div class="darkmode">
        <div class="mode"></div>
        <label class="switch">
        <input type="checkbox" class="dark-theme" id="dark-theme"/>
            <span class="slider round"></span>
        </label>
    </div>
    `)
    // Make a variable to check system color preferences
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    // If a user's whole system is in dark mode and there's no light-mode cookie, put webpages in dark mode by default
    if (prefersDarkScheme.matches && getCookie("theme") != "light") {
        document.body.classList.add("dark-theme");
    }
    // When the mode switch is clicked
    $("#dark-theme").change(function() {
        let theme = "light";
        // If it's checked, add dark-theme class
        if (this.checked) {
            document.body.classList.add("dark-theme");
            theme = "dark";
            // Change label text to Dark Mode to the switch
            $(".mode").html("Dark Mode");
        }
        // Otherwise...
        else {
            document.body.classList.remove("dark-theme");
            // Change label text to Light Mode to the switch
            $(".mode").html("Light Mode");
        }
        // Add a cookie to indicate the user's preferred theme or change an existing one
        document.cookie = "theme=" + theme;
    });
    // // If the theme is dark the mode switch should always be checked
    // else if
    if (document.body.classList.contains("dark-theme")) {
        $("#dark-theme").attr("checked", true);
        // Change label text to Dark Mode to the switch
        $(".mode").html("Dark Mode");
    }
    else {
        $(".mode").html("Light Mode");
    }
});

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }