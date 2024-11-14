/* 
   filename: staticData
   存储静态数据
*/

// districtMp: 武汉市行政区到对应景点的映射
var districtMp = [
  {
    text:'江岸区',
    dot: false,
    children: [
      {text:'江滩公园', id: 151},
      {text:'武汉天地', id: 153},
      {text:'汉口火车站', id: 156},
      {text:'武汉博物馆', id: 157},
      {text:'中山公园', id: 158},
      {text:"汉口江滩", id: 165},
      {text:"武汉长江大桥", id: 168},
      {text:"武汉科技馆", id: 171},
      {text:"武汉美术馆", id: 177},
      {text:"汉口江滩公园", id: 178},
      {text:"武汉市民之家", id: 190},
    ]
  },
  {
    text:'武昌区',
    dot: false,
    children: [
      {text:'黄鹤楼', id: 151},
      {text:"东湖风景区", id: 166},
      {text: "湖北省博物馆", id: 182},
      {text:  "武汉大学", id: 193},
    ]
  },
  {
    text:"洪山区",
    dot:false,
    children:[
      {text:"武汉植物园", id:160},
      {text: "华中科技大学", id:181}
    ]
  },
  
  {
    text:'青山区',
    dot: false,
    children: [
      {text:'青山公园', id: 152},
      {text: "武汉钢铁公司", id: 159},
      {text: "青山江滩", id: 173},
    ]
  },
  {
    text:'汉阳区',
    dot: false,
    children: [
      {text:'归元寺', id: 169},
      {text:"汉阳造文化创意产业园", id: 170},
      {text: "武汉动物园", id: 172},
      {text: "琴台大剧院", id: 174},
      {text:"古琴台", id: 175},
      {text:"晴川阁", id: 179},
      {text: "汉阳江滩", id: 186},
      {text: "武汉国际博览中心", id: 187},
      {text: "武汉体育中心", id: 189},
    ]
  },
  
  {
    text:'东西湖区',
    dot: false,
    children: [
      {text:'金银湖湿地公园', id: 155},
      {text:'武汉海昌极地海洋世界', id: 180},
    ]
  },
  {
    text:'蔡甸区',
    dot: false,
    children: [
      {text:'蔡甸花博汇', id: 154},
      {text:'九真山', id: 183},
      {text: "后官湖湿地公园", id: 164},
      {text: "武汉花博汇", id: 185},
      {text: "武汉野生动物王国", id: 192}
    ]
  },
  {
    text:'江夏区',
    dot: false,
    children: [
      {text:'汤逊湖', id: 176},
      {text:"梁子湖", id: 191}
    ]
  },
  {
    text:'黄陂区',
    dot: false,
    children: [
  
      {text:'木兰天池', id: 162},
      {text:'木兰草原', id: 163},
      {text:'木兰山', id: 167},
      {text:"木兰湖", id: 188},
    ]
  },
  {
    text:'新洲区',
    dot: false,
    children: [
  
      {text: "紫薇都市田园", id: 184},
     
    ]
  },
  ];

// hotPlaceAttr 热门景点
var hotPlaceAttr = [
  {id: 1,
   title: '武汉极地海洋公园',
   imgSrc: 'img/hot/1.jpg',
   description: '武汉景点排名第1，34%去过武汉的驴友来过这里，观赏企鹅、北极熊等极地动物，还有海豚、海狮的精彩表演。'},
  {id: 2,
   title: '昙华林',
   imgSrc: 'img/hot/2.jpg',
   description: '武汉景点排名第2，40%去过武汉的驴友来过这里，文青们扎堆的地方，有很多百年老建筑和洋溢着文艺范的小店。'},
  {id: 3,
   title: '武汉大学',
   imgSrc: 'img/hot/3.jpg',
   description: '武汉景点排名第3，54%去过武汉的驴友来过这里，初春时节的浪漫樱花，还有众多中西合璧的老建筑。'},
  {id: 4,
   title: '武汉长江大桥',
   imgSrc: 'img/hot/4.jpg',
   description: '武汉景点排名第4，52%去过武汉的驴友来过这里，武汉的地标性建筑，充满了厚实的俄式风格。'},
  {id: 5,
   title: '户部巷',
   imgSrc: 'img/hot/5.jpg',
   description: '武汉景点排名第5，30%去过武汉的驴友来过这里，这里有武汉的各种美食小吃，热干面、糊汤粉、豆皮、鸭脖子等'},
  {id: 6,
   title: '汉正街',
   imgSrc: 'img/hot/6.jpg',
   description: '武汉景点排名第6，7%去过武汉的驴友来过这里，历史上的汉口商业中心，未来的国际金融服务中心。'},
];

// onSeasonAttr: 当季景点
var onSeasonAttr = [
  {id: 1,
   title: '古德寺',
   imgSrc: 'img/1.jpg',
   description: '武汉景点排名第13，26%去过武汉的驴友来过这里，拥有四面佛的寺庙，充满异域风情的圆通宝殿值得一看。'},
  {id: 6,
   title: '晴川阁',
   imgSrc: 'img/2.jpg',
   description: '武汉景点排名第12，29%去过武汉的驴友来过这里，濒临长江，登上楼顶，遥看武汉三镇和长江对岸的黄鹤楼。'},
  {id: 7,
   title: '汉口江滩',
   imgSrc: 'img/3.jpg',
   description: '武汉景点排名第33，3%去过武汉的驴友来过这里，吹江风，观赏十几幢不同风格的百年老建筑。'},
  {id: 10,
   title: '黎黄陂路',
   imgSrc: 'img/4.jpg',
   description: '武汉景点排名第10，4%去过武汉的驴友来过这里'},
  {id: 17,
   title: '湖北省博物馆',
   imgSrc: 'img/5.jpg',
   description: '武汉景点排名第9，31%去过武汉的驴友来过这里，聆听战国编钟的美妙古乐，观赏镇馆之宝，了解中国古代南方文明。'},
];

// 手帐背景图片
var bgs = [
  {id:"1",path: ""},
  {id:"2",path: "cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/2.jpeg"},
  {id:"3",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/3.jpeg"},
  {id:"4",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/4.jpeg"},
  {id:"5",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/5.jpeg"},
  {id:"6",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/6.jpeg"},
  {id:"7",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/7.jpeg"},
  {id:"8",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/8.jpeg"},
  {id:"9",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/9.jpeg"},
  {id:"10",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/10.jpeg"},
  {id:"11",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/11.jpeg"},
  {id:"12",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/bg/12.jpeg"},
];

// 贴纸
var stickers = [
  {id:"1",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/1.jpeg"},
  {id:"2",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/2.jpeg"},
  {id:"3",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/3.jpeg"},
  {id:"4",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/4.jpeg"},
  {id:"5",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/5.jpeg"},
  {id:"6",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/6.jpeg"},
  {id:"7",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/7.jpeg"},
  {id:"8",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/8.jpeg"},
  {id:"9",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/9.jpeg"},
  {id:"10",type:"food",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/food/10.jpeg"},
 
  
  {id:"1",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/1.jpeg"},
  {id:"2",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/2.jpeg"},
  {id:"3",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/3.jpeg"},
  {id:"4",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/4.jpeg"},
  {id:"5",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/5.jpeg"},
  {id:"6",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/6.jpeg"},
  {id:"7",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/7.jpeg"},
  {id:"8",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/8.jpeg"},
  {id:"9",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/9.jpeg"},
  {id:"10",type:"travel",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/travel/10.jpeg"},
  
  {id:'1',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/1.jpeg"},
  {id:'2',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/2.jpeg"},
  {id:'3',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/3.jpeg"},
  {id:'4',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/4.jpeg"},
  {id:'5',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/5.jpeg"},
  {id:'6',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/6.jpeg"},
  {id:'7',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/7.jpeg"},
  {id:'8',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/8.jpeg"},
  {id:'9',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/9.jpeg"},
  {id:'10',type:"sport",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/sport/10.jpeg"},


  {id:'1',type:"national_flag",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/national_flag/1.jpeg"},
  {id:'2',type:"national_flag",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/national_flag/2.jpeg"},
  {id:'3',type:"national_flag",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/national_flag/3.jpeg"},
  {id:'4',type:"national_flag",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/national_flag/4.jpeg"},
  {id:'5',type:"national_flag",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/national_flag/5.jpeg"},
  {id:'6',type:"national_flag",path:"cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/strickers/national_flag/6.jpeg"},

]

// 景点图片主路径
//  因为在导入数据库的时候直接用了"img/1.jpg"作为imgSrc，因此在加载的时候需要加上路径
var path="cloud://luojia1cloud-7gbweippb2dee1e5.6c75-luojia1cloud-7gbweippb2dee1e5-1330021689/"



module.exports = {
  districtMp,
  onSeasonAttr,
  hotPlaceAttr,
  path,
  bgs,
  stickers
};