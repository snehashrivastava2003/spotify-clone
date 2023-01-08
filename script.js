console.log("WELCOME TO SPOTIFY");
let songIndex=0;
let audioElement= new Audio('song1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItems'));

let songs =[
{songName:"Barbadiyaan",filePath :"song1.mp3",coverPath:"img1.jpg"},
{songName:"Jia Ho",filePath :"song2.mp3",coverPath:"img2.jpg"},
{songName:"Kesariya",filePath:"song3.mp3",coverPath:"img3.jpg"},
{songName:"Manika",filePath :"song4.mp3",coverPath:"img4.jpg"},
{songName:"Radhe Radhe",filePath:"song5.mp3",coverPath:"img5.jpg"},
{songName:"Suno gaur se Duniya Walo",filePath:"song6.mp3",coverPath:"img6.jpg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    // element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
masterPlay.addEventListener('click',() =>{
if(audioElement.paused||audioElement.currentTime<=0)
{
    audioElement.play();
    masterPlay.classList.remove('bx-play-circle');
    masterPlay.classList.add('bx-pause-circle');
    gif.style.opacity=1;
}
else
{
audioElement.pause();
masterPlay.classList.remove('bx-pause-circle');
 masterPlay.classList.add('bx-play-circle');
 gif.style.opacity=0;

}
})
audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressBar.value=progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>
    {
        element.classList.remove('bx-pause-circle');
        element.classList.add('bx-play-circle');
   
    })
}
Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
        songIndex--;
        audioElement.src=songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('bx-play-circle');
        masterPlay.classList.add('bx-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5)
    { 
    songIndex=0
    }
    else
    { 
    songIndex+=1;
    }
    audioElement.src=songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bx-play-circle');
    masterPlay.classList.add('bx-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    { 
    songIndex=5
    }
    else
    { 
    songIndex-=1;
    }
    audioElement.src=songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('bx-play-circle');
    masterPlay.classList.add('bx-pause-circle');
})


