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
    title: "3710電漿噴塗控制系統",
    show_text: true,
    texts: ["為維持電漿噴塗塗層相關應用的優良表現，3710電漿噴塗控制系統提供給您穩定、經濟的噴塗設備。控制器為操作SG-100、SG-200系列噴槍所設計，同時也能適用於其他電漿噴槍，如9M或F4。3710電漿噴塗控制系統包含：電漿噴槍、3710控制器、PS-1000（40kW）或HPS-100（100Kw）電源供應器、HF-2210高頻點火器、1264送粉機、以及完整管路與電纜。","3710控制器為機電型電漿控制器，專為生產環境所設計。3710控制器的特點在於採用臨界氣體流量控制（critical orifice gas flow control），由於對背壓（back pressure）相對不敏感，相較於一般浮子流量計（rotameters），能在氣體控制上達到更精確、穩定的標準，且不需進行定期校準就能維持良好的氣流控制。","PS-1000為一款使用三相恆電流（3 phase constant-current）、40kW、100%功率循環（duty cycle）的電源供應器，專為電漿噴塗所設計。HPS-100電源供應器採用最新設計，使電漿噴塗製程能達到更精確的控制與更高的穩定性，功率規格：100 kW，100%功率循環（duty cycle）輸出。","HF-2210高頻點火器與電源供應器配合來啟動電漿噴槍，以1200 Amp連續輸出、高頻強度控制和振盪器（oscillator）為特色，能使點火過程更穩定。HF-2210與SmartStartTM 電弧控制器合併使用，使其更省時、效率更高。"],
    show_features: false,
    features: ["",],
    show_specs: true,
    specs: ["重量：45.4 kg","體積：長787 mm，寬394 mm，高940 mm","供電需求：115 VAC, 1 phase, 50/60 Hz, 20 amps","吹掃空氣需求：大於80 psi","主氣體（氬氣）需求：71.3~430 SCFH（33.5~202 l/min）@30~250 psi","二次氣體（氦氣）需求：71.3~430 SCFH（33.5~202 l/min）@30~250 psi","二次氣體（氫氣）需求：4.3~26.4 SCFH（2~12.4 l/min）@30~250 psi","載氣（氬氣）需求：8.2~46.2 SCFH（4~22.6 l/min）@30~200 psi",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});