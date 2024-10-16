const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");



let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter)
})

function getChapterList(){
    return JSON.parse(window.localStorage.getItem("chapterList"));
}

function setChapterList(){
    window.localStorage.setItem("chapterList", JSON.stringify(chapterArray));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); 
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList() 
}

function displayList(item){
    const li = document.createElement('li');
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click",function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

button.addEventListener("click",function(){
    if(input.value.trim() !== ''){
        displayList(input.value) ;
        chapterArray.push(input.value)
        setChapterList();
        input.value = '';
    }
    else{
        alert("invalid input!");
    }
    input.focus();
})