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
let  c2=new Comment(2,'@MrNiteriders1','Those tanks are awesome. Great video buddy👍👍','https://yt3.ggpht.com/ytc/APkrFKbgHV3Al61fHygfZcQ30h0P0dTZxZ3Pzb6TM87xAA=s88-c-k-c0x00ffffff-no-rj');
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
let cv1=new Commentvideo(1,'Autoloader How it Works T90 M | Main Battle Tank Engineering Explained','AiTelly','376K subscribers','https://www.youtube.com/embed/8LsBbQOL0JY?si=Hr6BcCV1Q-MW3Naz','https://youtu.be/8LsBbQOL0JY?si=pwXUJztv0itPPOcx')
let cv2=new Commentvideo(2,'RC Tank 1/16 Leopard 2 A6 Taigen/Torro Gun Smoker','licmas-tank heng-long-panzer','17K subscribers','https://www.youtube.com/embed/wdo5ah3pMLY?si=51GDgFxHPwV5fUvR','https://youtu.be/wdo5ah3pMLY?si=tIlXz_Y-jwDllt-Z')
let cv3=new Commentvideo(3,'HENG LONG 1/16 RC MERKAVA IV TANK - TEST RUN','TankUMuch','1.79K subscribers','https://www.youtube.com/embed/AQzK4VRQPA4?si=pO_rq8cSg1h_IIzK','https://youtu.be/AQzK4VRQPA4?si=17Uauf_F-xKyF5f3')
let cv4=new Commentvideo(4,'Russian T90 A MBT. (Henglong 7.0)','surin surinsent','207 subscribers','https://www.youtube.com/embed/jZ5yjOLI5Ac?si=cZALBUOLu9i264cx','https://youtu.be/jZ5yjOLI5Ac?si=55oGbdWcC5J6-EJO')
let cv5=new Commentvideo(5,'He 115 C-1 German hydroplane Review - Sons of Atilla update | War Thunder','8Bit Dane','4.98K subscribers','https://www.youtube.com/embed/Rrs9k7PiWRg?si=RGT2Cdp4ynltZyns','https://youtu.be/Rrs9k7PiWRg?si=zhsDD3_cQdOLEeqZ')

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