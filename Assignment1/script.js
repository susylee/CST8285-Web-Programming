const searchBox1 = document.getElementById('searchBox')
searchBox1.addEventListener("keyup", search_course);

function search_course() {
   //alert("keyup");
const courseContainer = document.getElementsByClassName("flexbox-container");
const searchBox = document.getElementById('searchBox').value.toLowerCase();
const courseBox = document.querySelectorAll(".flexbox-item");
const textAll = document.getElementsByTagName("strong");

for(var i=0; i<textAll.length; i++) {
    let match = courseBox[i].getElementsByTagName("strong")[0];
    console.log(match);
    if(match) {
        let textValue = match.textContent || match.innerHTML
        console.log(textValue);

        if(textValue.toLowerCase().includes(searchBox)) {
            courseBox[i].style.display="";
        } else {
            courseBox[i].style.display="none";
        }
    }
}//for

}
