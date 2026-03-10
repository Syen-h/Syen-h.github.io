async function startShare(){

    try{

        const stream = await navigator.mediaDevices.getDisplayMedia({
            video:true,
            audio:false
        });

        const video = document.getElementById("screenVideo");
        video.srcObject = stream;

    }
    catch(err){
        alert("화면 공유 실패: " + err);
    }

}
