//Upload menu
var modal=document.getElementById("modal");

function showUploadVideo(){
    modal.style.display="flex";
    document.getElementById("idVideoName").value="";
    document.getElementById("idUploaderName").value="";
    document.getElementById("idCondition").value="";
    document.getElementById("idURL").value="";
    document.getElementById("idURLVideo").value="";
}
function btnModalClose(){
    modal.style.display="none"
}
window.onclick = function (evt) {
    //if (evt.target == modal) {
        modal.style.display = "none";
    //}
}
//Toggle user info (right top icon)
let menuHidden=document.getElementById("menuHidden");
function toggleMenu(){
    
    menuHidden.classList.toggle("open-menu");
    // menuHidden.style.display="block";
}
window.onclick = function (evte) {
    if (evte.target==menuHidden){
        menuHidden.style.display = "none";
    }  
}

//comment list
class Comment{
    constructor (id,name,commentContent,imgLink){
        this.id=id;
        this.name=name;
        this.commentContent=commentContent;
        this.imgLink=imgLink;
    }
}
let  c1=new Comment(1,'@elio5791','thank you so much this helping me a lot. with your explanation I understand better .keep it up bro ❤️','https://yt3.ggpht.com/ytc/APkrFKZr5XbmUFwF96tJ-LaEzmxQMmSP37ppMnFp14F5=s88-c-k-c0x00ffffff-no-rj');
let  c2=new Comment(2,'@AntonioVargas','cool, I did not know I can join html into another html in this way','https://yt3.ggpht.com/PwPP8IIwq3q4pF1fGJDLh1IMjVA_5fUUcA-0SRx7Dnj3kxcxCQnXKoOHqZ7OWHMYloOLhT8VwIw=s88-c-k-c0x00ffffff-no-rj');
let  c3=new Comment(3,'@rushili399','Can u tell me which extension did u use to see ur html code','https://yt3.ggpht.com/ytc/APkrFKaca2NQWcsBu908r5JWk27iRZ6Uv0MgHWh1o2cmSw=s88-c-k-c0x00ffffff-no-rj');

let commentOfUser=[c1,c2,c3];

function renderComment(){
    let commentHTML="";
    for(i=commentOfUser.length-1;i>=0;i--){
        let item=`
        <div class="comment-total">
            <div class="comment">
                <div class="comment-image">
                    <img src="${commentOfUser[i].imgLink}" style="width: 40px; height: 40px; border-radius: 50%;">
                </div>
                <div class="comment-content">
                    <h5>${commentOfUser[i].name}</h5>
                    <p>${commentOfUser[i].commentContent}</p>
                </div>
            </div>
            <div>
                <span class="icon3point">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <ul class="name3point">
                        <li onclick="deleteComment('${commentOfUser[i].id}')">
                            <i class="fa-regular fa-trash-can"></i>
                            <span> Delete comment</span>
                        </li>
                        <li onclick="editComment('${commentOfUser[i].id}', '${commentOfUser[i].commentContent}')">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <span> Edit comment </span>
                        </li>
                    </ul>
                </span>
            </div>

        </div>

        `;
        commentHTML+=item;
    }
    document.getElementById("comment").innerHTML=commentHTML;
}

renderComment();

function addComment(){
    let content=document.getElementById("comment-bar-content").value;
    let maxID=commentOfUser.length+1;
    
    let commentOfUserNew=new Comment(maxID,'@BaoNhan',content,'https://yt3.ggpht.com/78FgAAUGBv644ZaDZq1dz6am4RaGsyC9PH5gjXNqLpxXx8KftYcJNXMwopqyau_Ds6vh4GW-22U=s88-c-k-c0x00ffffff-no-rj')
    commentOfUser.push(commentOfUserNew);
    renderComment();
 
    document.getElementById("comment-bar-content").value=""   
}

//Button comment/cancel appear/disappear
const commentInput = document.getElementById("comment-bar-content");
const buttons = document.getElementById("buttons");
const cancelButton = document.getElementById("cancelButton");
commentInput.addEventListener("focus", function() {
    buttons.style.display = "flex";
});

cancelButton.addEventListener("click", function() {
    commentInput.value = ""; // Xóa nội dung trong ô input khi bấm "Cancel"
    buttons.style.display = "none";
    colorChangeButton.classList.remove("has-value");
    colorChangeButton.classList.add("no-value");
});

//comment=change button's color
const colorChangeButton = document.getElementById("commentButton");
commentInput.addEventListener("input",function(){
    if(commentInput.value.trim() !==""){
        colorChangeButton.classList.remove("no-value");
        colorChangeButton.classList.add("has-value");
    } else {
        colorChangeButton.classList.remove("has-value");
        colorChangeButton.classList.add("no-value");
    }
});

//delete comment
function deleteComment(id){
    for (i=0;i<commentOfUser.length;i++){
        if (commentOfUser[i].id==id){
            commentOfUser.splice(i,1);
        }
    }
    renderComment();
}


class Commentvideo{
    constructor (id,name,uploader,condition,embedvideo,videolink){
        this.id=id;
        this.name=name;
        this.uploader=uploader;
        this.condition=condition;
        this.embedvideo=embedvideo;
        this.videolink=videolink;
    }
}
let cv1=new Commentvideo(1,'Learn Flexbox CSS in 8 minutes','Slaying The Dragon','61.5K subscribers','https://www.youtube.com/embed/phWxA89Dy94?si=uCnHUk7vELn9c-zq','https://youtu.be/phWxA89Dy94?si=-gZsyVbpcrcVnQxB')
let cv2=new Commentvideo(2,'Learn CSS position in 5 minutes 🎯','Bro Code','1.25M subscribers','https://www.youtube.com/embed/Pp7UXS3P6jY?si=Jzbd_xanIJQ2FoM7','https://youtu.be/Pp7UXS3P6jY?si=rxx0uOjQZg7_7SOs')
let cv3=new Commentvideo(3,'Learn CSS margins in 4 minutes 📏','Bro Code','1.25M subscribers','https://www.youtube.com/embed/2ZlVV0MM1a0?si=pigNMR8f5t2zbEyh','https://youtu.be/2ZlVV0MM1a0?si=uLVHh54inibYdO7k')
let cv4=new Commentvideo(4,'Learn CSS Box Model In 8 Minutes','Web Dev Simplified','1.41M subscribers','https://www.youtube.com/embed/rIO5326FgPE?si=ESS0nv9JwjePPVw2','https://youtu.be/rIO5326FgPE?si=vvNSWDPIFL0nZ-C0')
let cv5=new Commentvideo(5,'#19 - CSS Box Model - CSS Full Tutorial','Dev Dreamer','25K subscribers','https://www.youtube.com/embed/YIxOwIuWp3c?si=-RYg8o3TWGTCnT7j','https://youtu.be/YIxOwIuWp3c?si=fuphBY0Xq_yBLcFT')

let listVideo=[cv1,cv2,cv3,cv4,cv5];

function renderCommentVideo(){
    let commentViHTML=""
    for(i=0;i<listVideo.length;i++){
        let item1=`
            <div class="total-video">
                
                <div class="video-frame">
                    <iframe width="170px" height="100px" src="${listVideo[i].embedvideo}"></iframe>
                </div>
                <div class="video-frame-content">
                    <a href="${listVideo[i].videolink}" target="_blank" style="text-decoration: none;" ><h3 style="color:black">${listVideo[i].name}</h3></a> 
                    <p>${listVideo[i].uploader}</p>
                    <p>${listVideo[i].condition}</p>
                </div>
                

            </div>
        `;
        commentViHTML+=item1;
    }
    document.getElementById("div1-3").innerHTML=commentViHTML;
}
renderCommentVideo();




let availableNameKeyWords=[];
for (i=0;i<listVideo.length;i++){
    availableNameKeyWords.push(listVideo[i].name)
    // console.log(availableNameKeyWords);
}

//bam nut search, vao link
function nameToLink(){
    for (i=0;i<availableNameKeyWords.length;i++){
        let valueInput=document.getElementById("input-box").value;
        if (valueInput.toLowerCase()==availableNameKeyWords[i].toLowerCase()){
            window.location.href=listVideo[i].videolink;
        }
    }
}

const resultBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availableNameKeyWords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}
function display(result){
    const content=result.map((list)=>{
        // return " <li onclick=selectInput(this)>"+"<i class='fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse'></i>"+"\n\n\n" +list+ "</li>";
        return "<li onclick='selectInput(this)'><i class='fa-solid fa-clock-rotate-left'></i>"+ "\n\n\n" +list+ "</li>";

    });
    resultBox.innerHTML="<ul>"+content.join("")+"</ul>";
}
function selectInput(list){
    inputBox.value=list.textContent;
    resultBox.innerHTML='';
}