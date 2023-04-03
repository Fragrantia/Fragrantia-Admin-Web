const inputComponents = document.querySelectorAll('input[type="file"]');
let ponds=[];
let images=['','',''];
function reader(file, callback) {
    const fr = new FileReader();
    fr.onload = () => callback(null, fr.result);
    fr.onerror = (err) => callback(err);
    fr.readAsDataURL(file);
  }
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginFileValidateType);
FilePond.registerPlugin(FilePondPluginFileValidateSize);
inputComponents.forEach(e=>{
    ponds.push(FilePond.create(e,{
        storeAsFile: true,
        labelIdle:"클릭 혹은 끌어오기를 통해 이미지를 변경하십시오.",
        maxFileSize:'10MB',
        acceptedFileTypes: ['image/*'],
    }))
    }
)
ponds.forEach((p,index)=>{
    p.on('addfile',(error,file)=>{
    if(error){
        console.log("Error!",error);
    }
    reader(file.file,(err,res)=>{images[index]=res})
    console.log(images)})
})
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

const preview = document.getElementById('preview')
preview.addEventListener('click',function () {
        var inputTexts=[]
        textAreas.forEach(e=>{
            inputTexts.push(e.value.replaceAll('\n',`<br>`))
        })
        var popup = open("", "_blank");
        var defaultTexts=[`
        Fragrantia는 향을 뜻하는 영어 Fragrance와 <br>
        환상을 뜻하는 이탈리아어 Fantasia의 조합으로 탄생했습니다.<br>
        향을 향유한다는 것은 곧 다른 시공간 속에 있는 것,<br>
        일상에서의 분리를 이야기합니다.<br>
        여러 자연의 요소들이 섞여 나는 오묘한 향마다<br>
        다른 환상을 경험하고 싶은 당신을 Fragrantia로 초대합니다.`,
        `인간은 자연과는 오랜 친구였습니다.<br>
        하지만 이제는 더 이상 친구라 부를 수 없는 시간 속에 있습니다.<br>
        자연과 친구를 맺는 것은 아주 오래 걸렸지만,<br>
        그것을 곧 주종의 관계로 착각했기에<br>
        자연 속에서의 인류는 이제 강물을 거스르는 연어와 같이 움직여야만 합니다.<br>
        가장 아름다운 것과 가장 놀라운 신비는 언제나 자연 속에 숨어 있습니다.<br>
        Fragrantia는 높은 품질의 향기를 개발하기 위해<br>
        자연의 아름다움과 순수함에서 영감을 받습니다.<br>
        때문에 우리에게 가장 중요한 것은 자연과 함께 상생하는 정체성입니다.`,
        `제품을 위해 사람이 있지 않습니다.<br>
        사람이 없으면 제품은 화살촉이 잘린 이정표와 같습니다.<br>
        그렇기에 우리의 제품은 사람을 가리키고자 합니다.<br>
        오랜 시간 동안 사람들 곁에서 머물며,<br>
        편안하지만 품격있는 라이프 스타일 자체의 선사를 추구합니다.<br>
        우리의 꽃과 향수는 사람의, 사람에 의한, 사람을 위한 라이프 스타일의 서막입니다.<br>
        아브라함 링컨의 견고했던 가치관처럼.<br>`]
        popup.document.write(
            `<!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <title>Brand Story</title>
        
          <!-- meta Setting -->
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
          <!-- 외부 스타일시트 -->
          <link rel="stylesheet" href="../../css/global.css">
          <link rel="stylesheet" href="../../css/page/brandInfo.css">
        
          <!-- 외부 스크립트(자바스크립트, jQuery) -->
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </head>
        <body>
          <div id="header"></div>
          <section class="brand_story naming" ${ponds[0].getFiles().length>0&&`style="background-image:url(${images[0]})"`}>
            <div class="description">
              <h1>#1 History</h1>
              <p>
                ${inputTexts[0].length>0?inputTexts[0]:defaultTexts[0]}
              </p>
            </div>
          </section>
          <section class="brand_story nature"${ponds[1].getFiles().length>0&&`style="background-image:url(${images[1]})"`}>
            <div class="description">
              <h1>#2 Nature</h1>
              <p>
              ${inputTexts[1].length>0?inputTexts[1]:defaultTexts[1]}
              </p>
            </div>
          </section>
          <section class="brand_story human"${ponds[2].getFiles().length>0&&`style="background-image:url(${images[2]})"`}>
            <div class="description">
              <h1>#3 Human</h1>
              <p>
              ${inputTexts[2].length>0?inputTexts[2]:defaultTexts[2]}
              </p>
            </div>
          </section>
          <div id="footer"></div>
        </body>
        
        </html>`
        )
        
})