//미리 날짜별 방문자수를 담음 object형 배열 생성
Date.prototype.tommorow=function(){ //prototype에 내일 return 하는 함수 생성
  var date= new Date(this.valueOf());
  date.setDate(date.getDate()+1);
  return date;
}
var seed = new Math.seedrandom('잘굴러가육조');// 시딩 기반 랜덤 인수 출력 함수;
var today = new Date(); // 오늘날짜 및 Date prototype 생성
var visit_chart_data=[];
var tempDate=new Date('2023-01-01');
const autocolors = window['chartjs-plugin-autocolors'];

const visitChart = document.getElementById('visitChart');

// 임의의 데이터 시딩으로 생성
while(tempDate<=today){
  visit_chart_data.push({
    date:tempDate,
    value:Math.round(1000+seed()*1000) //1000명에서 2000명 사이 랜덤 데이터 생성
  })
  tempDate=tempDate.tommorow();
}
var rangeVisitDate=visit_chart_data;
let chart_bg_colors = Array.from({ length: visit_chart_data.length }, (value, index) =>`hsla(${Math.round(255*(index/rangeVisitDate.length))}, 100%, 80%, 0.5)`);
const makeVisitChart =   new Chart(visitChart, {
  type: 'line',
  data: {
    labels: rangeVisitDate.map(range=>range.date.toLocaleDateString()),
    datasets: [{
      borderColor:'rgb(255, 159, 64)',
      backgroundColor:'rgba(255, 159, 64,0.5)',
      label: '방문자수',
      data: rangeVisitDate.map(range=>range.value),
      fill: true,
      borderWidth:1
    }]
  },
  options: {
    plugins: {
        title: {
            display: true,
            text: '테스트 통계',
                font:{weight:"bold",size:"20px"},
                padding: {
                    top: 10,
                    bottom: 30
                }
        }
    },
    scales: {
      y: {
        suggestedMin:500,
        suggestedMax:2400
      }
    }
  }
});

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left',
    minDate:'2023-01-01',// 날짜 2023년 1월 1일 부터?
    maxDate: today,
    locale:{
      "format": "YYYY-MM-DD",
    }
  }, function(start, end) {
    rangeVisitDate= visit_chart_data.slice(visit_chart_data.findIndex(e=>e.date.toDateString()==start._d.toDateString()),visit_chart_data.findIndex(e=>e.date.toDateString()==end._d.toDateString()));
    makeVisitChart.data.labels=rangeVisitDate.map(range=>range.date.toLocaleDateString());
    makeVisitChart.data.datasets.data=rangeVisitDate.map(range=>range.date.toLocaleDateString());
    makeVisitChart.update();
  });
});


//검색어 유입 설정

var seed = new Math.seedrandom('6조');
const searchChart = document.getElementById('searchChart');
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};  
// 키워드 뭐하냐
/*
기념일, 꽃, 향수, 졸업식, Fragrantia */
var keywords = [
  ['기념일',CHART_COLORS.red],
  ['꽃',CHART_COLORS.orange],
  ['향수',CHART_COLORS.yellow],
  ['졸업식',CHART_COLORS.green],
  ['Fragrantia',CHART_COLORS.blue]];
tempDate=new Date('2023-01-01'); //재설정
var search_chart_data=[];
while(tempDate<=today){
  search_chart_data.push({
    date:tempDate,
    data:keywords.map(function(e){
      return({
        word:e[0],
        bgColor:e[1],
        value:Math.round(seed()*400+100)});
    }).sort(function(a,b){
      return b.value - a.value
    }) //1000명에서 2000명 사이 랜덤 데이터 생성
  })
  tempDate=tempDate.tommorow();
}
const makesearchChart =   new Chart(searchChart, {
  type: 'pie',
  data: {
    labels: search_chart_data[search_chart_data.length-1].data.map(e=>e.word),
    datasets: [{
      label: '검색 유입 수',
      backgroundColor: search_chart_data[search_chart_data.length-1].data.map(e=>e.bgColor),
      data: search_chart_data[search_chart_data.length-1].data.map(e=>e.value),
    }]
  },
  options: {
    plugins: {
        title: {
            display: true,
            text: `${search_chart_data[search_chart_data.length-1].date.toLocaleDateString()} 검색어 유입`,
                font:{weight:"bold",size:"20px"},
                padding: {
                    top: 10,
                    bottom: 30
                }
        }
    },
  }
});
    
$(function() {
  $('input[name="datepick"]').daterangepicker({
    opens: 'left',
    "singleDatePicker": true,
    minDate:'2023-01-01',// 날짜 2023년 1월 1일 부터?
    maxDate: today,
    locale:{
      "format": "YYYY-MM-DD",
    }
  }, function(start) {
    var searchResult = search_chart_data[search_chart_data.findIndex(e=>e.date.toDateString()==start._d.toDateString())].data;
    makesearchChart.options.plugins.title.text=`${start._d.toLocaleDateString()} 검색어 유입`;
    makesearchChart.data.datasets[0].backgroundColor=searchResult.map(e=>e.bgColor);

    makesearchChart.data.datasets[0].data=searchResult.map(e=>e.value);
    makesearchChart.data.labels=searchResult.map(e=>e.word);
    
    makesearchChart.update();
  });
});

//표 작성
//visit_chart_data

var monthlyVisit=[];
/*
구조 object 아래
year month value label 형식
 */
visit_chart_data.forEach((e)=>{
  var eMonth=e.date.getMonth();
  var eYear=e.date.getFullYear();
  var index=monthlyVisit.findIndex(element=>element.year==eYear&element.month==eMonth);
  if(index<0){
    monthlyVisit.push({
      month:eMonth,
      year:eYear,
      label:`${eYear}년 ${eMonth+1}월`,
      value:e.value});}
    else{
      monthlyVisit[index].value+=e.value;
    }
})
new gridjs.Grid({
  columns: ["구분","방문자 수"],
  data: monthlyVisit.map(e=>[e.label,e.value.toLocaleString()])
}).render(document.getElementById('visitorTable'))
new gridjs.Grid({
  columns: ["항목","품목 수"],
  data: [
    ["꽃","8"],
    ["향수","12"]
  ]
}).render(document.getElementById('itemTable'))
/*.table{
        width: 40%;
        table.gridjs-table{
            td,th{
                text-align: center;
                width:unset;
                padding: 6px 24px;
            }
        }
    } */