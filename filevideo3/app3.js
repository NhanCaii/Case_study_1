//search
let availableKeywords=[
    'HTML','CSS','Easy tutorial','Javascript','Where to learn coding','How to create website','where to learn code',
    'Facebook','Youtube','Instagram','Learn HTML iframes in 3 minutes'
];

// function nameToLink(){
//     for (i=0;i<availableNameKeyWords.length;i++){
//         let valueInput=document.getElementById("input-box");
//         if (valueInput==availableNameKeyWords[i].toLowerCase()){
//             window.location.href=listVideo[i].videolink;
//         }
//     }
// }

// const resultBox=document.querySelector(".result-box");
// const inputBox=document.getElementById("input-box");

// inputBox.onkeyup = function(){
//     let result=[];
//     let input=inputBox.value;
//     if(input.length){
//         result=availableKeywords.filter((keyword)=>{
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }
//     display(result);
// }
// function display(result){
//     const content=result.map((list)=>{
//         // return " <li onclick=selectInput(this)>"+"<i class='fa-solid fa-clock-rotate-left fa-spin fa-spin-reverse'></i>"+"\n\n\n" +list+ "</li>";
//         return "<li onclick='selectInput(this)'><i class='fa-solid fa-dumpster'></i>" + list + "</li>";

//     });
//     resultBox.innerHTML="<ul>"+content.join("")+"</ul>";
// }
// function selectInput(list){
//     inputBox.value=list.innerHTML;
//     resultBox.innerHTML='';
// }



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
let  c1=new Comment(1,'@lieschenmultikill503','This is an awsome piece of work! The firing system is so cool. I would love to have it in my Tiger I.','https://yt3.ggpht.com/ye3GRChFAZKBGYsPm0b6hwmPyw9hicThfzlMODIciGSE_QYOXWUxaebGe8ubJCZe3mwHJVp2=s88-c-k-c0x00ffffff-no-rj');
let  c2=new Comment(2,'@@andrewsmall6834',"All 3 crew side by side in the front of the vehicle? That's gonna be a tight squeeze.",'https://yt3.ggpht.com/ytc/APkrFKaoUVpYYktlTLOO5fd3ju2iNkVGEAUrbP5IsOz7=s88-c-k-c0x00ffffff-no-rj');
let  c3=new Comment(3,'@ClassRoutinesRENEEsFunClips','Wow fantastic remote control tanks + like','https://yt3.ggpht.com/ytc/APkrFKbffkwFZD5ubD0TC2a7l8IW7brg8kF7_sBD9bvYEw=s88-c-k-c0x00ffffff-no-rj');

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
let cv1=new Commentvideo(1,'How does a Tank work? (M1A2 Abrams)','Jared Owen','2.9M subscribers','https://www.youtube.com/embed/SdL55HWNPRM?si=AjZH7SLrjXPuVsYO','https://youtu.be/SdL55HWNPRM?si=ZJDL8-LtuQvYXBEX')
let cv2=new Commentvideo(2,'M1 Abrams - mobility and speed demo','Chris Stahl','751 subscribers','https://www.youtube.com/embed/f5XUQ2beGfM?si=bJmM_YvU_20CVSbR','https://youtu.be/f5XUQ2beGfM?si=vmpOp0PulEgENM6Y')
let cv3=new Commentvideo(3,'Gunnery','Jonathan Jones','1.46K subscribers','https://www.youtube.com/embed/HM5UNwlWaUk?si=KVe8ls0pwBX7RElk','https://youtu.be/HM5UNwlWaUk?si=jheapLEtX5LPTUOR')
let cv4=new Commentvideo(4,'Air Force Slander','Ice711','63.5k subscribers','https://www.youtube.com/embed/wg2HE7hu3dU?si=Fl9i4nsYGmonfv8n','https://youtu.be/wg2HE7hu3dU?si=EzdQTio9caf1USum')
let cv5=new Commentvideo(5,'Rheinmetall releases Panther KF51 Main Battle Tank','Rheinmetall – The integrated technology group','208K subscribers','https://www.youtube.com/embed/fTBA5tQsDbE?si=Q6MBgqJcE60jUfZj','https://youtu.be/fTBA5tQsDbE?si=IDQ8B88FXbbUAcFX')
let cv6=new Commentvideo(5,'New German Super Tank - KF51 Panther','RedEffect','183K subscribers','https://www.youtube.com/embed/BPeLRScPeXY?si=BK7ilKlz9_7MSl2b','https://youtu.be/BPeLRScPeXY?si=-1Mg79bYSkhjxygE')

let listVideo=[cv1,cv2,cv3,cv4,cv5,cv6];

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
        return "<li onclick='selectInput(this)'><i class='fa-solid fa-clock-rotate-left'></i>"+"\n\n\n" + list + "</li>";

    });
    resultBox.innerHTML="<ul>"+content.join("")+"</ul>";
}
function selectInput(list){
    inputBox.value=list.textContent;
    resultBox.innerHTML='';
}