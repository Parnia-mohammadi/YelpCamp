const camps = ["mount ulap", "calaguas islands", "onay beach" ,
"seven sister waterfall", "latik reverside", "buloy springs"];
function searchBtn() {
    var searchValue = document.getElementById("search-bar").value;
    searchValue = searchValue.toLowerCase();
    if (searchValue==""){
        alert("you don't enter any campground in search bar");
    }
    else{
        let j=1;
        for (let i=0; i<camps.length; i++){
            if (searchValue == camps[i] || camps[i].includes(searchValue)){
                location.pathname = "/E:/Web%20Developing/projects-exp/YelpCamp%20Starter%20Files/YelpCamp/"
                + camps[i] + ".html";
                j = 0 ;
                break;
            }
        }
        if (j){
            alert("This campground wasn't found. You can add your own campground by follow link");
            document.getElementById("search-bar").value = "";
            document.getElementById("addCamp").style.animation = "blinkText 1500ms linear 5";

        };
    }
}
