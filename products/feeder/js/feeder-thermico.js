$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var pd_infos=[
  {
    show_title: true,
    title: "Thermico CPF2送粉機",
    show_text: true,
    text: "Thermico CPF2送粉機可以精確輸送不同類型的粉末，最小可輸送之粉末大小為5μm。採用重力式送粉設計，藉由送粉盤精確地將粉末送到載氣流中，並將其輸送到噴槍，內建高精度磅秤（±2％）對粉末進行定量。為確保測量的精準度，送粉桶安裝在隔離艙中，以減少外部干擾。另一個特點為，採用PLC閉迴路控制系統，並自帶質量流量計，可精準控制送粉量與送粉載氣流，提供最佳的送粉穩定性。提供漸進式塗層選項，藉由內建軟體，可改變兩個送粉桶的送粉比例，讓操作者不需進行混粉或更換送粉桶，就能得到漸進式塗層的需求。",
    show_features: true,
    features: ["標準送粉盤最小送粉量為5.0克／分鐘，低量送粉盤的最小送粉量可達0.5克／分鐘","有0.5、3.5、5和10公升的送粉桶容量可選擇，並可快速更換送粉桶","送粉桶內部有震動片，減少送粉不順的問題","電熱毯可減少粉末的團聚","閉迴路控制系統，送粉更精準","可進行漸進式塗層送粉設定","配備觸控式操控界面"],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});