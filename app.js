let availableKeywords=[
    'HTML','CSS','Easy tutorial','Javascript','Where to learn coding','How to create website','where to learn code',
    'Facebook','Youtube','Instagram','Learn HTML iframes in 3 minutes'
];
const resultBox=document.querySelector(".result-box");
const inputBox=document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}
function display(result){
    const content=result.map((list)=>{
        // return " <li onclick=selectInput(this)>"+"<i class='fa-solid fa-clock-rotate-left'></i>"+"\n\n\n" +list+ "</li>";
        return "<li onclick='selectInput(this)'><i class='fa-solid fa-clock-rotate-left'></i>"+ "\n\n\n" +list+ "</li>";

    });
    resultBox.innerHTML="<ul>"+content.join("")+"</ul>";
}
function selectInput(list){
    inputBox.value=list.textContent;
    resultBox.innerHTML='';
}

class Youtube{
    constructor (id,link,avatar,videoName,uploader,condition){
        this.id=id;
        this.link=link;
        this.avatar=avatar
        this.videoName=videoName;
        this.uploader=uploader;
        this.condition=condition;
    }
}
let v1=new Youtube(1,'https://www.youtube.com/embed/aRGdDy18qfY?si=BwC4-40Wly5_iVsW','https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80','Learn HTML iframes in 3 minutes 🖼️','Quang','11k views 46 minus ago');
let v2=new Youtube(2,'https://www.youtube.com/embed/B5yygyCUdvs?si=MD1jC9cbvgZ_zEOL','https://www.fundemoniumtoys.com/wp-content/uploads/2021/04/RCO3889-1.jpg','RC TANK LEOPARD 2A6 IN A SHOOTING PRACTICE ','Nhan','10k views 46 hours ago')
let v3=new Youtube(3,'https://www.youtube.com/embed/TcfuyyxFtgQ?si=DmgGBKJVHY1au6Lh','https://www.thedrive.com/uploads/2022/10/09/ABRAMS-MBT-General-Dynamics.jpg?auto=webp','AbramsX Technology Demonstrator on the Move','Anh','20k views 2 hours ago')

let youtubeVideo=[v1,v2,v3];

{/* <div class="video-item">
    <div class="vi-img-contaier">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
            alt="" srcset="">
    </div>
    <div class="vi-content-container">
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
            alt="">
        <div class="vi-content">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, beatae?</h4>
            <h5>Quang Dang</h5>
            <span>11k views 46 minus ago</span>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
</div> */}

function renderVideo(){
    let videoHTML="";
    for (i=0;i<youtubeVideo.length;i++){
        let item=`
        <div class="video-item">
            <div class="vi-img-contaier">

                <iframe src="${youtubeVideo[i].link}"></iframe>

            </div>
            <div class="vi-content-container">
                <img src="${youtubeVideo[i].avatar}"
                    alt="">
                <div class="vi-content">
                    <a href="./filevideo${youtubeVideo[i].id}/${youtubeVideo[i].id}.html" target="_blank" style="text-decoration: none;"><h4>${youtubeVideo[i].videoName}</h4></a>
                    
                    <h5>${youtubeVideo[i].uploader}</h5>
                    <span>${youtubeVideo[i].condition}</span>
                </div>
                <span class="icon3point">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <ul class="name3point">
                        <li onclick="deleteVideo('${youtubeVideo[i].id}', '${youtubeVideo[i].uploader}')">
                            <i class="fa-regular fa-trash-can"></i>
                            <span> Delete </span>
                        </li>
                        <li onclick="editVideo('${youtubeVideo[i].id}')">
                            <i class="fa-solid fa-pen-nib"></i>
                            <span> Edit video infomation </span>
                        </li>
                    </ul>

                </span>
            </div>
        </div>
        `;
        videoHTML+=item;
    }
    document.getElementById("ytb-videos").innerHTML=videoHTML;
}

renderVideo();

var modal=document.getElementById("modal");

function showUploadVideo(){
    modal.style.display="flex";
    document.getElementById("idVideoName").value="";
    document.getElementById("idUploaderName").value="";
    document.getElementById("idCondition").value="";
    document.getElementById("idURL").value="";
    document.getElementById("idURLVideo").value="";

    document.getElementById("frmbtnuploader").classList.remove("hide");
    document.getElementById("frmbtnedit").classList.add("hide");
    document.getElementById("create").classList.remove("hide");
    document.getElementById("edit").classList.add("hide");

}
function btnModalClose(){
    modal.style.display="none"
}
function btnCancelUpload(){
    modal.style.display="none";
}
modal.onclick = function (evt) {
    if (evt.target == modal) {
        modal.style.display = "none";
    }    
}



function btnUploadVideo(){
    // document.getElementById("frm-btn-uploader").classList.remove("hide");
    // document.getElementById("frm-btn-edit").classList.add("hide");

    let videoname=document.getElementById("idVideoName").value;
    let uploadname=document.getElementById("idUploaderName").value;
    let conditioN=document.getElementById("idCondition").value;
    let linkURL=document.getElementById("idURL").value;
    let linkVideo=document.getElementById("idURLVideo").value;

    let maxID=youtubeVideo.length+1
    let youtubeNewVideo= new Youtube(maxID,linkVideo,linkURL,videoname,uploadname,conditioN);
    youtubeVideo.push(youtubeNewVideo);
    renderVideo();

    modal.style.display="none";
}
function deleteVideo(id,name){
    let check=confirm("Wanna to delete this video of " +name+"?");
    if(check){
        for(let i=0;i<youtubeVideo.length;i++){
            if (youtubeVideo[i].id==id){
                youtubeVideo.splice(i,1);
            }
        }
        renderVideo();
    }
}

function editVideo(id){
    let s=null;
    for (i=0;i<youtubeVideo.length;i++){
        if (youtubeVideo[i].id==id){
            s=youtubeVideo[i];
        }
    }

    document.getElementById("id-video").value=s.id;
    document.getElementById("idVideoName").value=s.videoName;
    document.getElementById("idUploaderName").value=s.uploader;
    document.getElementById("idCondition").value=s.condition;
    document.getElementById("idURL").value=s.avatar;
    document.getElementById("idURLVideo").value=s.link;
    
    modal.style.display = "flex";    
    document.getElementById("frmbtnuploader").classList.add("hide");
    document.getElementById("frmbtnedit").classList.remove("hide");
    document.getElementById("create").classList.add("hide");
    document.getElementById("edit").classList.remove("hide");
}
function btnEditVideo(){
    let id=document.getElementById("id-video").value;
    for (let i = 0; i < youtubeVideo.length; i++) {
        if (youtubeVideo[i].id == id) {
            youtubeVideo[i].videoName= document.getElementById("idVideoName").value;
            youtubeVideo[i].uploader = document.getElementById("idUploaderName").value;
            youtubeVideo[i].condition = document.getElementById("idCondition").value;
            youtubeVideo[i].link = document.getElementById("idURLVideo").value;
            youtubeVideo[i].avatar=document.getElementById("idURL").value;
        }
    }
    modal.style.display = "none";
    renderVideo();
}

let menuHidden=document.getElementById("menuHidden");
function toggleMenu(){
    
    
    menuHidden.classList.toggle("open-menu");
    // menuHidden.style.display="block";
}
window.onclick = function (evte) {
    if (evte.target==menuHidden){
        menuHidden.style.display = "none";
        // menuHidden.closest();
    }  
}