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
    // If a user's whole system is in dark mode, put webpages in dark mode by default
    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-theme");
    }
    // When the mode switch is clicked
    $("#dark-theme").change(function() {
        let theme = "light";
        // If it's checked, remove light-theme class (if present) and add dark-theme
        if (this.checked) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            theme = "dark";
            // Change label text to Dark Mode to the switch
            $(".mode").html("Dark Mode");
        }
        // Otherwise...
        else {
            // If user's system is in dark mode
            if (prefersDarkScheme.matches) {
                 // ...then apply the .light-theme class to override those dark mode styles
                 document.body.classList.add("light-theme");
            }
            document.body.classList.remove("dark-theme");
            // Change label text to Light Mode to the switch
            $(".mode").html("Light Mode");
        }
        // Add a cookie to indicate the user's preferred theme or change an existing one
        document.cookie = "theme=" + theme;
    });
    // Make sure that the class doesn't contain both light and dark themes at the same time
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("dark-theme");
        // Change label text to Light Mode to the switch
        $(".mode").html("Light Mode");
    }
    // If the theme is dark the mode switch should always be checked
    else if (document.body.classList.contains("dark-theme")) {
        $("#dark-theme").attr("checked", true);
        // Change label text to Dark Mode to the switch
        $(".mode").html("Dark Mode");
    }
    else {
        $(".mode").html("Light Mode");
    }
});