var vm_topic=new Vue({
  el: "#content-top",
  data: {
    topic: "送料設備",
    text: "",
    pic: "",
  }
});

var data_card=[
  {
    href: "feeder-1264s.html",
    picture: "../../image/feeder-1264.png",
    h3: "Praxair 1264系列",
  },
  {
    href: "feeder-thermico.html",
    picture: "../../image/feeder-thermico.png",
    h3: "Thermico CPF2",
  },
  {
    href: "feeder-mettech.html",
    picture: "../../image/feeder-mettech.png",
    h3: "Mettech 750/350",
  }
];

var vm_card=new Vue({
  el: "#content-bottom",
  data: {
    cont: data_card,
  }
});

// -----------------------------------------------------
var data_sidebar=[
  {
    page: "feeder-1264s.html",
    name: "Praxair 送粉機",
  },
  {
    page: "feeder-thermico.html",
    name: "Thermico CPF2",
  },
  {
    page: "feeder-mettech.html",
    name: "Mettech 750/350",
  },
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "feeder.html",
    tag_name: "送料設備",
    sidemenu: data_sidebar,
  }
});

var data_1264=[
  {
    show_title: true,
    title: "Praxair 1264 系列送粉機",
    show_text: true,
    texts: ["1264型送粉機專為熱噴塗應用所設計，開放迴路送粉裝置適用於所有熱噴塗粉末與製程，並可提供高精度、穩定一致的送粉量。簡單的設計與堅固的機身使其不易損壞並容易保養維修。","重力式送粉技術通過改變送粉盤的轉速，與送粉盤上的孔洞數量及大小，來調整送粉量，再藉由載氣將粉末經由軟管送到噴槍。在送粉盤的設計上，共有5種可選擇，可依照粉末的特性，送粉量的多寡去進行最合適的搭配。而送粉桶的外側配有加熱毯，可避免因為空氣中的濕氣，使送粉桶內的粉末團聚，而造成的送粉不順。","1264i和1264WL是1264送粉機的改良版，系統採用PLC閉迴路控制送粉盤轉速，不會因為粉量多寡而使送粉盤轉速發生變化。1264WL再增加送粉量測重功能，可及時掌握送粉量，送粉損失重量可控制在±1.5g以內。","1264i與1264WL的送粉桶容量增加50%，可減少填粉的時間；快速更換送粉桶功能，只需將固定閥移除後即可更換，整個過程不需要1分鐘，同時也可以減少粉桶內不同粉末的交叉污染，不需熄火也可更換，可大幅提升工作效率。","在顯示界面方面，1264i和1264WL更換成觸控界面顯示，在系統中可以即時看見載氣流量、送粉盤轉速、噴塗時間、總操作時間與維修時限，也能調整加熱毯的溫度，讓操作者與開發者更了解整個操作的過程。",],
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#content_1264",
  data: {
  products: data_1264,
  }
});

Vue.component('table_template', {
  template: '#table-template_1264',
  props: {
    data: {},
    columns: [],
  }
});

var vm_1_1= new Vue({
  el: '#table_1264',
  data: {
    tableTitle: "1264系列規格：",
    tableHead: ["項目","1264型","1264i型","1264wl型"],
    tableData: [
      {項目:'迴路控制',"1264型": '開放迴路RPM',"1264i型": '閉迴路RPM',"1264wl型": '閉迴路RPM'},
      {項目:'送粉桶容量',"1264型": '3277 cc',"1264i型": '4916 cc',"1264wl型": '4916 cc'},
      {項目:'最大桶壓',"1264型": '90 psi',"1264i型": '125 psi',"1264wl型": '125 psi'},
      {項目:'顯示面板',"1264型": '數位顯示螢幕',"1264i型": '觸控面板',"1264wl型": '觸控面板'},
      {項目:'控制面板',"1264型": '直覺式撥桿',"1264i型": '觸控',"1264wl型": '觸控'},
      {項目:'壓力洩壓閥',"1264型": '＋',"1264i型": '＋',"1264wl型": '＋'},
      {項目:'送粉桶加熱毯',"1264型": '＋',"1264i型": '＋',"1264wl型": '＋'},
      {項目:'系統警報',"1264型": '-',"1264i型": '轉速限制警報',"1264wl型": '轉速限制警報、送粉量限制警報、低粉量提醒'},
    ]
  }
});




var data_mettech=[
  {
    show_title: true,
    title: "Mettech Nanofeeder 350/750 漿料機",
    show_text: true,
    text: "Mettech NanoFeeder 350/750漿料機，為奈米級到亞微米級粉末之漿料使用設計，利用Mettech在漿料熱噴塗上的豐富經驗，在漿料輸送流量與加壓都能得到精確的控制。應用在熱噴塗設備，可生產奈米級結構塗層，以滿足工業所需的高性能塗層，並提供穩定無脈衝漿料注射，使每次製做出來的塗層都能保持高品質。",
    pic: "../../image/feeder-mettech.png",
    show_features: true,
    features: ["NanoFeeder系統可以將含有奈米顆粒的漿料，送入至Axial III電漿噴槍或其他電漿噴槍中，來製備出性能更好的奈米結構塗層，開啟奈米材料在熱噴塗製成應用的可能性","具有卓越性能高性能漿料奈米塗層，已在工業上使用，並可取代現有EB-PVD，以降低生產成本提升效率","採閉迴路設計，可獨立操作也可以連接Axial III系統進行控制","所有Mettech的設備設計，替您考量所有最極端的工作環境","可對漿料的進料與霧化氣體進行品質流量控制，並能即時對送料進行修正","當漿料濃度高達40%時，最高可達0.5 L/min的送料速率","送料桶採不銹鋼製作而成，具備防腐蝕與防爆功能","全自動化設計，可自動啟動、清洗迴圈與關閉","漿料輸送範圍廣，10奈米到10微米皆適用"],    
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_2=new Vue({
  el: "#content_mettech",
  data: {
  products: data_mettech,
  }
});




var data_thermico=[
  {
    show_title: true,
    title: "Thermico CPF2送粉機",
    show_text: true,
    text: "Thermico CPF2送粉機可以精確輸送不同類型的粉末，最小可輸送之粉末大小為5μm。採用重力式送粉設計，藉由送粉盤精確地將粉末送到載氣流中，並將其輸送到噴槍，內建高精度磅秤（±2％）對粉末進行定量。為確保測量的精準度，送粉桶安裝在隔離艙中，以減少外部干擾。另一個特點為，採用PLC閉迴路控制系統，並自帶質量流量計，可精準控制送粉量與送粉載氣流，提供最佳的送粉穩定性。提供漸進式塗層選項，藉由內建軟體，可改變兩個送粉桶的送粉比例，讓操作者不需進行混粉或更換送粉桶，就能得到漸進式塗層的需求。",
    pic: "../../image/img-4-thermico.jpg",
    show_features: true,
    features: ["標準送粉盤最小送粉量為5.0克／分鐘，低量送粉盤的最小送粉量可達0.5克／分鐘","有0.5、3.5、5和10公升的送粉桶容量可選擇，並可快速更換送粉桶","送粉桶內部有震動片，減少送粉不順的問題","電熱毯可減少粉末的團聚","閉迴路控制系統，送粉更精準","可進行漸進式塗層送粉設定","配備觸控式操控界面"],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_3=new Vue({
  el: "#content_thermico",
  data: {
  products: data_thermico,
  }
});