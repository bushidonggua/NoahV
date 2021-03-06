const proxy = {
  'GET /api/button': (req, res) => {
    return res.json({
      success: true,
      data: {}
    });
  },
  'POST /api/button/dialog': (req, res) => {
    return res.json({
      success: true,
      data: {}
    });
  },
  'POST /api/dialog': (req, res) => {
    return res.json({
      success: true,
      data: {}
    });
  },
  'POST /api/form': (req, res) => {
    return res.json({
      success: true,
      data: {}
    });
  },
  'POST /api/switch/open': (req, res) => {
    return res.json({
      success: true,
      data: {}
    });
  },
  'POST /api/switch/close': (req, res) => {
    return res.json({
      success: true,
      data: {}
    });
  },
  'POST /api/table': (req, res) => {
    return res.json({
      success: true,
      data: [
        {
            name: '王明',
            age: '23',
            sex: '男',
            page: '',
            education: '本科'
        },
        {
            name: '李荣',
            age: '27',
            sex: '男',
            page: '',
            education: '硕士'
        },
        {
            name: '张航',
            age: '27',
            sex: '男',
            page: '',
            education: '硕士'
        },
        {
            name: '王丽',
            age: '29',
            sex: '女',
            page: '',
            education: '博士'
        },
        {
            name: '王洋洋',
            age: '29',
            sex: '女',
            page: '',
            education: '博士'
        },
        {
            name: '王菲',
            age: '21',
            sex: '女',
            page: '',
            education: '本科'
        },
        {
            name: '李雨',
            age: '22',
            sex: '女',
            page: '',
            education: '本科'
        },
        {
            name: '冯勇',
            age: '22',
            sex: '男',
            page: '',
            education: '本科'
        },
        {
            name: '冯勇',
            age: '22',
            sex: '男',
            page: '',
            education: '本科'
        },
        {
            name: '冯勇',
            age: '22',
            sex: '男',
            page: '',
            education: '本科'
        },
        {
            name: '冯勇',
            age: '22',
            sex: '男',
            page: '',
            education: '本科'
        }
      ]
    });
  },
  'POST /api/filtertable': (req, res) => {
    return res.json({
      success: true,
      data: [
        {
            name: '王明',
            age: '23',
            sex: '男',
            page: '',
            education: '本科',
            hometown: '中国贵州',
            english: 'CET-6',
            address: '北京市海淀区',
            job: '建筑工程师',
            earning: '50w+'
        },
        {
            name: '李荣',
            age: '27',
            sex: '男',
            page: '',
            education: '硕士',
            hometown: '中国浙江',
            english: 'CET-6',
            address: '北京市海淀区',
            job: '软件工程师',
            earning: '50w+'
        },
        {
            name: '张航',
            age: '27',
            sex: '男',
            page: '',
            education: '硕士',
            hometown: '中国辽宁',
            english: 'CET-6',
            address: '上海市浦东新区',
            job: '插画师',
            earning: '30w+'
        },
        {
            name: '王丽',
            age: '29',
            sex: '女',
            page: '',
            education: '博士',
            hometown: '中国福建',
            english: 'CET-6',
            address: '香港中环',
            job: '投行分析师',
            earning: '200w+'
        },
        {
            name: '王洋洋',
            age: '29',
            sex: '女',
            page: '',
            education: '博士',
            hometown: '中国山东',
            english: '专业8级',
            address: '北京西城区',
            job: '同声翻译',
            earning: '700w+'
        },
        {
            name: '王菲',
            age: '35',
            sex: '女',
            page: '',
            education: '本科',
            hometown: '中国宁夏',
            english: 'CET-4',
            address: '山东青岛',
            job: '部门主管',
            earning: '55w+'
        },
        {
            name: '李雨',
            age: '22',
            sex: '女',
            page: '',
            education: '本科',
            hometown: '中国安徽',
            english: 'CET-4',
            address: '杭州西湖区',
            job: '银行职员',
            earning: '15w+'
        },
        {
            name: '冯勇',
            age: '52',
            sex: '男',
            page: '',
            education: '博士',
            hometown: '中国江苏',
            english: 'CET-4',
            address: '山东青岛',
            job: '公司副总裁',
            earning: '1500w+'
        }
      ]
    });
  },
  'POST /api/chart/column': (req, res) => {
    return res.json({
      success: true,
      data: {
        categories: ['苹果', '香蕉', '橙子'],
        data: [
            {
                name: '小明',
                data: [1, 10, 4]
            },
            {
                name: '小红',
                data: [5, 7, 3]
            }
        ]
      }
    });
  },
  'POST /api/chart/pie': (req, res) => {
    return res.json({
      success: true,
      data: {
        data: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
      }
    });
  },
  'POST /api/trend': (req, res) => {
    return res.json({
      success: true,
      data: {
        data: [
            {   
                name: '指标1', 
                data: [
                    [1529409600000, 134740],
                    [1529409660000, 134748],
                    [1529409720000, 144181],
                    [1529409780000, 172382],
                    [1529409840000, 129517],
                    [1529409900000, 123698],
                    [1529409960000, 121405],
                    [1529410020000, 121400],
                    [1529410080000, 119844],
                    [1529410140000, 120037],
                    [1529410200000, 119438],
                    [1529410260000, 119643],
                    [1529410320000, 118741],
                    [1529410380000, 118377],
                    [1529410440000, null],
                    [1529410500000, null],
                    [1529410560000, null],
                    [1529410620000, null],
                    [1529410680000, null],
                    [1529410740000, 115287],
                    [1529410800000, 117207],
                    [1529410860000, 124365],
                    [1529410920000, 123296],
                    [1529410980000, 122052],
                    [1529411040000, 118856],
                    [1529411100000, 117202],
                    [1529411160000, 116981],
                    [1529411220000, 118927],
                    [1529411280000, 115803],
                    [1529411340000, 117259],
                    [1529411400000, 118964],
                    [1529411460000, 117716],
                    [1529411520000, 116544],
                    [1529411580000, 117684],
                    [1529411640000, 115080],
                    [1529411700000, 114624],
                    [1529411760000, 116830],
                    [1529411820000, 116642],
                    [1529411880000, 115601],
                    [1529411940000, 114469],
                    [1529412000000, 112347],
                    [1529412060000, 122014],
                    [1529412120000, 120417],
                    [1529412180000, 115089],
                    [1529412240000, 112815],
                    [1529412300000, 116324],
                    [1529412360000, 114670],
                    [1529412420000, 112497],
                    [1529412480000, 116774],
                    [1529412540000, 119257],
                    [1529412600000, 121955],
                    [1529412660000, 121690],
                    [1529412720000, 121432],
                    [1529412780000, 118179],
                    [1529412840000, 116440],
                    [1529412900000, 114253],
                    [1529412960000, 116167],
                    [1529413020000, 119214],
                    [1529413080000, 117041]
                ]
            }, 
            {
                name: '指标2', 
                data: [
                    [1529409600000, 68592],
                    [1529409660000, 66443],
                    [1529409720000, 68637],
                    [1529409780000, 68697],
                    [1529409840000, 68716],
                    [1529409900000, 67119],
                    [1529409960000, 68135],
                    [1529410020000, 67068],
                    [1529410080000, 65789],
                    [1529410140000, 65779],
                    [1529410200000, 65777],
                    [1529410260000, 65879],
                    [1529410320000, 65800],
                    [1529410380000, null],
                    [1529410440000, null],
                    [1529410500000, null],
                    [1529410560000, null],
                    [1529410620000, null],
                    [1529410680000, null],
                    [1529410740000, 64825],
                    [1529410800000, 66635],
                    [1529410860000, 67960],
                    [1529410920000, 66948],
                    [1529410980000, 67606],
                    [1529411040000, 64638],
                    [1529411100000, 63868],
                    [1529411160000, 65210],
                    [1529411220000, 66572],
                    [1529411280000, 66151],
                    [1529411340000, 67589],
                    [1529411400000, 66340],
                    [1529411460000, 66191],
                    [1529411520000, 66504],
                    [1529411580000, 67385],
                    [1529411640000, 65806],
                    [1529411700000, 65614],
                    [1529411760000, 66191],
                    [1529411820000, 65664],
                    [1529411880000, 65783],
                    [1529411940000, 64951],
                    [1529412000000, 64353],
                    [1529412060000, 68035],
                    [1529412120000, 67170],
                    [1529412180000, 66725],
                    [1529412240000, 64843],
                    [1529412300000, 65341],
                    [1529412360000, 64871],
                    [1529412420000, 64194],
                    [1529412480000, 65090],
                    [1529412540000, 65905],
                    [1529412600000, 68489],
                    [1529412660000, 67083],
                    [1529412720000, 66888],
                    [1529412780000, 65622],
                    [1529412840000, 63742],
                    [1529412900000, 63152],
                    [1529412960000, 63549],
                    [1529413020000, 64021],
                    [1529413080000, 62980]
                ]
            }
        ]
      }
    });
  }
};

module.exports = proxy;