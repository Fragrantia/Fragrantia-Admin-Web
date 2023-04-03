// Get a file input reference
const inputComponents = document.querySelectorAll('input[type="file"]');
let ponds=[];
FilePond.registerPlugin(FilePondPluginImagePreview);
// Create a FilePond instance and post files to /upload
inputComponents.forEach(e=>{
    ponds.push(FilePond.create(e,{
        storeAsFile: true,
        labelIdle:"이미지를 클릭하거나 드래그를 통해 제출하십시오"
    }))
    }
)
const textAreas = document.querySelectorAll('textarea');

const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
  if(window.confirm("다시 작성하시겠습니까?")){
    ponds.forEach(e=>{e.removeFiles()})
    textAreas.forEach(e=>e.value='')
  }
})

const submit = document.getElementById('submit');
submit.addEventListener('click',function(){
    var isSomeTextAreaHasValue = false;
    textAreas.forEach(e=>{
        if (e.value.length>0)
        isSomeTextAreaHasValue =true;
    })
    if(ponds.some((e)=>e.getFiles().length>0)||isSomeTextAreaHasValue){
        if(window.confirm("제출하시겠습니까?")){
            ponds.forEach(e=>{e.removeFiles()})
            textAreas.forEach(e=>e.value='')
            alert('제출되었습니다!');
    }

    }
    else{
        var msg='변경사항이 없습니다...';
        alert(msg);
    }
})