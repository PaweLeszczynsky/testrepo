{
    const changeButtonTheme = document.querySelector(".js-mainSection__buttonThemecontainer__buttonLightmode");
    changeButtonTheme.addEventListener("click", () => {
        changeButtonTheme.classList.toggle("mainSection__buttonThemecontainer__buttonDarkmode");
        backgroundTheme();
        buttonThemeImageChange();
    });
    const backgroundTheme = () => {
        const backgroundColor = document.querySelector(".js-backgroundTheme");
        backgroundColor.classList.toggle("darkTheme");
    }
    const buttonThemeImageChange = () => {
        const backgroundColor = document.querySelector(".js-backgroundTheme");
        document.getElementById("themeChanger").src = backgroundColor.classList.contains("darkTheme") ? "images/night-mode.png" : "images/brightness.png"
    }
}