// // querySelectors
// all for note
const hoverList = document.querySelector(".list");
const wNote = document.querySelector(".note");
const divAll = document.querySelector(".all");
const Write = document.querySelector(".write");
const noteSubmit = document.querySelector(".note-submit");
const Container = document.querySelector('.container');
const Title = document.querySelector('.title');
const mainNote = document.querySelector('.main-note');
const divNote = document.querySelector('.div-note');
const closeNote = document.querySelector('.close-note');
// all for list
const wList = document.querySelector(".list");
const writeList = document.querySelector('.write-list');
const closeList = document.querySelector('.close-list');
const addList = document.querySelector('.add');
const listItem = document.querySelector('.list-item');
const listSubmit =document.querySelector('.list-submit');
const listTitle =document.querySelector('.list-title');
const checkBtn = document.querySelector('.complete-btn');
const newitemDiv = document.querySelector('.newitem-div');
const removeButton = document.querySelector('remove-item');
const divList = document.querySelector('.div-list');
const searchFilter = document.querySelector('.search-filter');


// // EventListener
hoverList.addEventListener("mouseover", function () {
    const item = hoverList.children[0];
    item.classList.add('textshow');
});
hoverList.addEventListener("mouseout", function () {
    const item = hoverList.children[0];
    item.classList.remove('textshow');


});

wNote.addEventListener('click', open_note);
closeNote.addEventListener('click', close_note);
wList.addEventListener('click', open_list);

noteSubmit.addEventListener('click', submit);
Container.addEventListener('click', open_note);
closeList.addEventListener('click', close_list);
addList.addEventListener('click', newItem);
listSubmit.addEventListener('click', submit_list);
listItem.addEventListener('click', check_remove);
searchFilter.addEventListener('keyup', filter);



// functions
// for note

function open_note(e) {
    const item = e.target;
    if (item.classList[0] === 'div-note') {
        // const itema = divAll;
        divAll.style.display = 'none';
        // Write.style.display = 'flex';

        Write.classList.add('showWrite');
        Container.style.display = 'none'
        noteSubmit.classList.add('editnote-submit');
        const childtextareatitle = item.children[2];
        childtextareatitle.classList.add('edit-title');
        const childtextareanote = item.children[3];
        childtextareanote.classList.add('edit-note');
        mainNote.value = childtextareanote.value;
        Title.value = childtextareatitle.value;
        const divt = item.children[4];
        divt.classList.add('div-t');
        const divn = item.children[5];
        divn.classList.add('div-n');
        document.querySelector('.close-note').classList.add('close-noteE');
        const any = item.children;
        console.log(any);
        
    }

    if(item.classList[0] === 'note') {
        const item = divAll;
        item.style.display = 'none';
        // Write.style.display = 'flex';

        Write.classList.add('showWrite');
        Container.style.display = 'none';

    }
        // FORLIST
    if(item.classList[0] === 'div-list'){
    
        divAll.style.display = 'none';
        writeList.classList.add('showWrite');
        Container.style.display = 'none';

        const divt = item.children[2];
        divt.classList.add('divTe');
        listTitle.value = divt.innerText;
        const divle = item.children[3];
        divle.classList.add('div-LE');
        listItem.innerHTML = divle.innerHTML;
        listSubmit.classList.add('edit-list-submit');
        document.querySelector('.close-list').classList.add('close-listE');
    }

    if(item.classList[0] === 'delet-note'){
        item.parentElement.classList.add('slide');
        item.parentElement.addEventListener('transitionend', function(){
            item.parentElement.remove();
            });
    }
    if(item.classList[0] === 'delet-list'){
        item.parentElement.classList.add('slide');
        item.parentElement.addEventListener('transitionend', function(){
            item.parentElement.remove();
            });
    }
}
function submit(f) {
    const item = f.target;
    if (item.classList[1] === 'editnote-submit') {
        noteSubmit.classList.remove('editnote-submit');
        const editTitle = document.querySelector('.edit-title');
        editTitle.innerText = Title.value;
        const editNote = document.querySelector('.edit-note');
        editNote.innerText = mainNote.value;
        divAll.style.display = 'flex';
        Container.style.display = 'flex';
        // Write.style.display = 'none';
        Write.classList.remove('showWrite');
        const divi = document.querySelector('.div-t');
        divi.innerText = editTitle.value;
        divi.classList.remove('div-t');
        const divn = document.querySelector('.div-n');
        divn.innerText = editNote.value;
        divn.classList.remove('div-n');
        // Write.style.display = 'none';
        editTitle.classList.remove('edit-title');
        editNote.classList.remove('edit-note');
        mainNote.value = "";
        Title.value = "";
        document.querySelector('.close-noteE').classList.remove('close-noteE');
    }
    else {
        divAll.style.display = 'flex';
        Container.style.display = 'flex'
        Write.classList.remove('showWrite');
        // stiky_note


        const divnote = document.createElement('div');
        divnote.classList.add('div-note');
        divnote.innerHTML = '<i class="fas fa-paperclip"></i><button type="submit" class="note-edit"><i class="fas fa-check"></i></button>';
        Container.appendChild(divnote);

        

        const Divtitle = document.createElement('textarea');
        Divtitle.classList.add('title');
        Divtitle.innerText = Title.value;
        divnote.appendChild(Divtitle);

        const Divmainnote = document.createElement('textarea');
        Divmainnote.classList.add('main-note');
        Divmainnote.innerText = mainNote.value;
        divnote.appendChild(Divmainnote);

        const divt = document.createElement('p');
        divt.classList.add('divT');
        divt.innerText = Title.value;
        divnote.appendChild(divt);

        const divn = document.createElement('p');
        divn.classList.add('divN');
        divn.innerText = mainNote.value;
        divnote.appendChild(divn);

        const fileType = document.createElement('i');
        fileType.innerText = 'Your Note';
        fileType.classList.add('file-type');
        divnote.appendChild(fileType);

        const deletbtn = document.createElement('button');
        deletbtn.innerHTML = '<i class="fas fa-times"></i>';
        deletbtn.classList.add('delet-note');
        divnote.appendChild(deletbtn);

        mainNote.value ="";
        Title.value ="";
        
    
    }
}
function close_note(e){
    if(e.target.classList[1] === 'close-noteE'){
    divAll.style.display = 'flex';
    Container.style.display = 'flex';
    Write.classList.remove('showWrite');
    document.querySelector('.edit-title').classList.remove('edit-title');
    document.querySelector('.edit-note').classList.remove('edit-note');
    Title.value = "";
    mainNote.value = "";
    document.querySelector('.close-noteE').classList.remove('close-noteE');
}
else{
    divAll.style.display = 'flex';
    Container.style.display = 'flex';
    Write.classList.remove('showWrite');
    Title.value = "";
    mainNote.value = "";
}
}


// for list
function open_list(l){
    const listo = l.target;
    if(listo.classList[0] === "list"){

        const item = divAll;
        item.style.display = 'none';
        writeList.classList.add('showWrite');
        Container.style.display = 'none';
}
    
}




function newItem(){
    const newItemDiv = document.createElement('div');
    newItemDiv.classList.add('newitem-div');
    listItem.appendChild(newItemDiv);

    const newbtn = document.createElement('button');
    newbtn.innerHTML = '<i class="fas fa-check"></i>';
    newbtn.classList.add('complete-btn');
    newItemDiv.appendChild(newbtn);

    const newtext = document.createElement('textarea');
    newtext.classList.add('list-add');
    newtext.placeholder = 'Input your List item';
    newtext.name = 'fname';
    newItemDiv.appendChild(newtext);

    const removeItem = document.createElement('button');
    removeItem.innerHTML = '<i class="fas fa-times"></i>';
    removeItem.classList.add('remove-item');
    newItemDiv.appendChild(removeItem);

    listItem.lastChild.children[1].focus();
}

function submit_list(l){
    
    if(l.target.classList[1] === 'edit-list-submit' ){
    divAll.style.display = 'flex';
    Container.style.display = 'flex';
    writeList.classList.remove('showWrite');


    document.querySelector('.divTe').innerText = listTitle.value;
    const newitemList = document.querySelector('.div-LE');
    newitemList.innerHTML = listItem.innerHTML;
    j=listItem.children.length;
    for(b=0; b<j; b++) {
    const newitemList = document.querySelector('.div-LE');
    newitemList.children[b].children[1].innerText =listItem.children[b].children[1].value;
    }
    document.querySelector('.divTe').classList.remove('divTe');
    document.querySelector('.div-LE').classList.remove('div-LE');
    document.querySelector('.list-submit').classList.remove('edit-list-submit');


    const i = listItem.children.length;
    for(a=1; a<i; a++){
         listItem.children[1].remove();
    }
    listTitle.value = "";
    listItem.children[0].children[1].value = "";
    listItem.children[0].children[0].classList.remove('check');
    listItem.children[0].children[1].classList.remove('cut');
    listItem.classList.remove('faide');
    document.querySelector('.close-listE').classList.remove('close-listE');

    
    }


    else{
    divAll.style.display = 'flex';
    Container.style.display = 'flex';
    writeList.classList.remove('showWrite');
    // stiky_list
    const divlist = document.createElement('div');
    divlist.classList.add('div-list');
    divlist.innerHTML = '<i class="fas fa-paperclip"></i>';
    Container.appendChild(divlist);

    const fileType = document.createElement('i');
    fileType.innerText = 'Your List';
    fileType.classList.add('file-type');
    divlist.appendChild(fileType);
    

    const divt = document.createElement('p');
    divt.classList.add('divT');
    divt.innerText = listTitle.value;
    divlist.appendChild(divt);

    const containerdiv = document.createElement('div');
    containerdiv.classList.add('divL');
    containerdiv.innerHTML = listItem.innerHTML;
    divlist.appendChild(containerdiv);

    const deletbtn = document.createElement('button');
    deletbtn.innerHTML = '<i class="fas fa-times"></i>';
    deletbtn.classList.add('delet-list');
    divlist.appendChild(deletbtn);

    j=listItem.children.length;
    for(b=0; b<j; b++) {
    const newitemList = document.querySelector('.newitem-div');
    containerdiv.children[b].children[1].innerText =listItem.children[b].children[1].value;
    }
    // newitemList.children.
    // containerdiv.children[3].value =listItem.children[3].value;
    // containerdiv.children[5].value =listItem.children[5].value;
    // containerdiv.children[7].value =listItem.children[7].value;
    // containerdiv.children[1].classList =listItem.children[1].classList;
    // containerdiv.children[3].classList =listItem.children[3].classList;
    // containerdiv.children[5].classList =listItem.children[5].classList;
    // containerdiv.children[7].classList =listItem.children[7].classList;
    // containerdiv.children[0].classList =listItem.children[0].classList;
    // containerdiv.children[2].classList =listItem.children[2].classList;
    // containerdiv.children[4].classList =listItem.children[4].classList;
    // containerdiv.children[6].classList =listItem.children[6].classList;
    
    const i = listItem.children.length;
    for(a=1; a<i; a++){
         listItem.children[1].remove();
    }
    listTitle.value = "";
    newitemDiv.children[1].value = "";
    newitemDiv.children[0].classList.remove('check');

    
}}


function check_remove(c){
    const item = c.target;
    if (item.classList[0] === "complete-btn"){
    item.classList.toggle("check");
    item.parentElement.classList.toggle('faide');
    item.parentElement.children[1].classList.toggle('cut');
}

    if(item.classList[0] === 'remove-item'){

        item.parentElement.classList.add('slide');
        item.parentElement.addEventListener('transitionend', function(){
        item.parentElement.remove();
        });
    }

}
function close_list(e){
    if(e.target.classList[1] === 'close-listE'){
    divAll.style.display = 'flex';
    Container.style.display = 'flex';
    writeList.classList.remove('showWrite');

    const i = listItem.children.length;
    for(a=1; a<i; a++){
         listItem.children[1].remove();
    }
    document.querySelector('.divTe').classList.remove('divTe');
    document.querySelector('.div-LE').classList.remove('div-LE');
    listTitle.value = "";
    listItem.children[0].children[1].value = "";
    listItem.children[0].children[0].classList.remove('check');
    listItem.children[0].children[1].classList.remove('cut');
    listItem.classList.remove('faide');
    document.querySelector('.close-listE').classList.remove('close-listE');
}
else{
    divAll.style.display = 'flex';
    Container.style.display = 'flex';
    writeList.classList.remove('showWrite');

    const i = listItem.children.length;
    for(a=1; a<i; a++){
         listItem.children[1].remove();
    }
    listTitle.value = "";
    listItem.children[0].children[1].value = "";
    listItem.children[0].children[0].classList.remove('check');
    listItem.children[0].children[1].classList.remove('cut');
    listItem.classList.remove('faide');
}
}


function filter(){
   const searchValue = searchFilter.value.toUpperCase();
   const Container =document.querySelector('.container');
   i=Container.children.length;
   for(a = 0; a<i; a++){
       if(Container.children[a].getElementsByTagName('p')[0].innerHTML.toUpperCase().indexOf(searchValue) > -1){
        Container.children[a].style.display = "";
       }
       else{
        Container.children[a].style.display = 'none';
       }
   }
}

