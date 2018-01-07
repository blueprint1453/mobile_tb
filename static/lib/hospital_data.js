'use strict';

var hospitalData = [{
    id: 1,
    listData: [{
        qid: 1,
        question: '医院地址',
        answer: '医院地址为：河北省唐山市路南区建设南路14号（百货大楼南行500米，大钊公园西门对面）。'
    }, {
        qid: 2,
        question: '医院二维码',
        answer: '\u533B\u9662\u7684\u4E8C\u7EF4\u7801\u53EF\u4EE5\u767B\u9646\u5B98\u7F51\u67E5\u770B\uFF0C\u533B\u9662\u5B98\u7F51\uFF1A\'http://www.tsfy.com\'\u3002'
    }, {
        qid: 3,
        question: '医院电话',
        answer: '\u60A8\u597D\uFF0C\u5510\u5C71\u5E02\u5987\u5E7C\u4FDD\u5065\u9662\u5B98\u65B9\u7535\u8BDD\uFF1A0315-3726688'
    }, {
        qid: 4,
        question: '门诊时间',
        answer: '\u60A8\u597D\uFF0C\u95E8\u8BCA\u65F6\u95F4\u4E3A\u5468\u4E00\u5230\u5468\u65E5\u5168\u5929\u95E8\u8BCA\uFF0C\u4E0A\u53488:00-12:00\uFF0C\u4E0B\u534814:00-17:30\u3002'
    }, {
        qid: 5,
        question: '医生排班时间表',
        answer: '\u60A8\u597D\uFF0C\u95E8\u8BCA\u65F6\u95F4\u4E3A\u5468\u4E00\u5230\u5468\u65E5\u5168\u5929\u95E8\u8BCA\uFF0C\u4E0A\u53488:00-12:00\uFF0C\u4E0B\u534814:00-17:30\u3002\u8BF7\u901A\u8FC7\u67E5\u8BE2\u533B\u751F\u7684\u6392\u73ED\u60C5\u51B5\uFF0C\u6216\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2\u3002'
    }, {
        qid: 6,
        question: '预约挂号流程',
        answer: '<a href="http://mp.weixin.qq.com/s/2pdW9UGHD5qoEPTJFB4v9A">预约挂号流程</a>'
    }, {
        qid: 7,
        question: '各科室分布地图',
        answer: '<a href="http://mp.gzhc365.com/hosp_floor_map_001.xhtml?viewcode=html_ld&HIS_CD=77">\u5404\u79D1\u5BA4\u5206\u5E03\u5730\u56FE</a>'
    }, {
        qid: 8,
        question: '如何办理医保报销？',
        answer: '\u5408\u4F5C\u533B\u7597\u3001\u533B\u4FDD\u76F8\u5173\u7684\u95EE\u9898\u8BF7\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2,\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0315-3726688\u3002\u76EE\u524D\u5FAE\u4FE1\u652F\u4ED8\u53EA\u652F\u6301\u81EA\u8D39\u7ED3\u7B97\uFF0C\u5982\u679C\u60A8\u60F3\u5237\u533B\u4FDD\u5361\u6216\u8005\u8981\u62A5\u9500\u533B\u4FDD\u7684\uFF0C\u8BF7\u79FB\u6B65\u533B\u9662\u6536\u8D39\u7A97\u53E3\uFF0C\u51ED\u5904\u65B9\u5355\u7F34\u8D39\u3002'
    }, {
        qid: 9,
        question: '如何办理出生医学证明？',
        answer: '<a href="http://mp.gzhc365.com/appno.xhtml?_route=f77&viewcode=html&HIS_CD=77&SCE_ID=&DEP_CD=ks00901&DOC_CD=2646">\u51FA\u751F\u533B\u5B66\u8BC1\u660E</a>'
    }, {
        qid: 10,
        question: '如何建档？',
        answer: '\u8BF7\u70B9\u51FB\u5E95\u90E8\u5BFC\u822A\u680F\u4E2D\u7684"\u4E2A\u4EBA\u4E2D\u5FC3"\uFF0C\u518D\u70B9\u51FB"\u5B55\u5987\u9884\u5EFA\u6863"\uFF0C\u5C31\u53EF\u4EE5\u63D0\u524D\u5F55\u5165\u81EA\u5DF1\u7684\u4FE1\u606F\u8FDB\u884C\u5EFA\u6863\u3002'
    }, {
        qid: 11,
        question: '如何使用微信支付？',
        answer: '\u76EE\u524D\u5FAE\u4FE1\u652F\u4ED8\u53EA\u652F\u6301\u81EA\u8D39\u7ED3\u7B97\uFF0C\u5982\u679C\u60A8\u60F3\u5237\u533B\u4FDD\u5361\u6216\u8005\u8981\u62A5\u9500\u533B\u4FDD\u7684\uFF0C\u8BF7\u79FB\u6B65\u533B\u9662\u6536\u8D39\u7A97\u53E3\uFF0C\u51ED\u5904\u65B9\u5355\u7F34\u8D39\u3002'
    }, {
        qid: 12,
        question: '如何取消医院黑名单？',
        answer: '\u9ED1\u540D\u5355\u7B49\u76F8\u5173\u95EE\u9898\u8BF7\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0315-3726688\u3002'
    }, {
        qid: 13,
        question: '如何查看化验结果？',
        answer: '\u5316\u9A8C\u5355\u3001\u62A5\u544A\u7ED3\u679C\u7B49\u4FE1\u606F\u8BF7\u53C2\u8003\uFF0C\u6216\u8BF7\u54A8\u8BE2\u76F8\u5173\u79D1\u5BA4\u3002'
    }, {
        qid: 14,
        question: '如何办理住院出院？',
        answer: '\u4F4F\u9662\u3001\u51FA\u9662\u6216\u5E8A\u4F4D\u7B49\u76F8\u5173\u95EE\u9898\u8BF7\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2,\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0315-3726688\u3002'
    }, {
        qid: 15,
        question: '四维彩超预约流程',
        answer: '<a href="http://mp.weixin.qq.com/s/br5k_YRY9hlyTVSMzKEPsA ">\u56DB\u7EF4\u5F69\u8D85\u9884\u7EA6\u6D41\u7A0B</a>'
    }, {
        qid: 16,
        question: '唐筛预约流程',
        answer: '<a href="http://mp.weixin.qq.com/s/QpLUW-ujXzlfNfCOEkZchg">\u5510\u7B5B\u9884\u7EA6\u6D41\u7A0B</a>'
    }]
}, {
    id: 2,
    listData: [{
        qid: 1,
        question: '医院地址',
        answer: '医院地址为：山西省晋中市榆次区龙湖大街公共卫生服务中心。'
    }, {
        qid: 2,
        question: '医院二维码',
        answer: '\u533B\u9662\u7684\u4E8C\u7EF4\u7801\u53EF\u4EE5\u767B\u9646\u5B98\u7F51\u67E5\u770B\uFF0C\u533B\u9662\u5B98\u7F51\uFF1A\'http://www.ycqfy.com\'\u3002'
    }, {
        qid: 3,
        question: '医院电话',
        answer: '<a href="https://mp.weixin.qq.com/s/Mn2AvF2STpPfkA3HrwO9lw">\u533B\u9662\u7535\u8BDD</a>'
    }, {
        qid: 4,
        question: '门诊时间',
        answer: '\u60A8\u597D\uFF0C\u95E8\u8BCA\u65F6\u95F4\u4E3A\u51AC\u5B63\u4E0A\u53488:00-12:00\uFF0C\u4E0B\u53482:30-6:00\uFF1B\u590F\u5B63\u4E0A\u53488:00-12:00\uFF0C\u4E0B\u53483:00-6:00\u3002\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u8003\u4E00\u5468\u95E8\u8BCA\u3002'
    }, {
        qid: 5,
        question: '医生介绍',
        answer: '<a href="http://mp.weixin.qq.com/s/ebPAyc0gMwbD-KQSVQ2m7Q">\u533B\u751F\u4ECB\u7ECD</a>'
    }, {
        qid: 51,
        question: '医生排班时间表',
        answer: '\u6BCF\u5468\u4E94\u4F1A\u53D1\u5E03\u4E0B\u5468\u7684\u6392\u73ED\u8868\uFF0C\u70B9\u51FB\u5E95\u90E8\u5BFC\u822A\u680F\u8D70\u8FDB\u5987\u5E7C\uFF0C\u518D\u70B9\u51FB\u4E00\u5468\u95E8\u8BCA\u5373\u53EF\u67E5\u770B\u3002'
    }, {
        qid: 6,
        question: '预约挂号流程',
        answer: '我院实行实名制挂号，请您务必携带身份证。拿着导诊帮您填好的单据到大厅13号-15号窗口，挂您所需的科室或医生，同时您会收到挂号发票和一本门诊手册。（挂号发票到目标科室交与工作人员，门诊手册用于医生记录病情，并于复诊时携带）。详细信息请参考一周门诊。'
    }, {
        qid: 7,
        question: '各科室分布地图',
        answer: '<a href="http://mp.weixin.qq.com/s/4qU5EKTfRkOdIEDIims_kw">\u5404\u79D1\u5BA4\u5206\u5E03\u5730\u56FE</a>'
    }, {
        qid: 8,
        question: '如何办理医保报销？',
        answer: '\u5408\u4F5C\u533B\u7597\u3001\u533B\u4FDD\u76F8\u5173\u7684\u95EE\u9898\u8BF7\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2,\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0354-8562999\u3002\u76EE\u524D\u5FAE\u4FE1\u652F\u4ED8\u53EA\u652F\u6301\u81EA\u8D39\u7ED3\u7B97\uFF0C\u5982\u679C\u60A8\u60F3\u5237\u533B\u4FDD\u5361\u6216\u8005\u8981\u62A5\u9500\u533B\u4FDD\u7684\uFF0C\u8BF7\u79FB\u6B65\u533B\u9662\u6536\u8D39\u7A97\u53E3\uFF0C\u51ED\u5904\u65B9\u5355\u7F34\u8D39\u3002'
    }, {
        qid: 9,
        question: '如何办理出生医学证明？',
        answer: '<a href="http://mp.weixin.qq.com/s/fr34t4zS5xs6Sen_dKtGCg">\u51FA\u751F\u533B\u5B66\u8BC1\u660E</a>'
    }, {
        qid: 10,
        question: '如何建档？',
        answer: '\u60A8\u597D\uFF0C\u5EFA\u6863\u7684\u76F8\u5173\u95EE\u9898\uFF0C\u8BF7\u5230\u76F8\u5173\u79D1\u5BA4\u6216\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0354-8562999\u3002'
    }, {
        qid: 11,
        question: '如何使用微信支付？',
        answer: '\u76EE\u524D\u5FAE\u4FE1\u652F\u4ED8\u53EA\u652F\u6301\u81EA\u8D39\u7ED3\u7B97\uFF0C\u5982\u679C\u60A8\u60F3\u5237\u533B\u4FDD\u5361\u6216\u8005\u8981\u62A5\u9500\u533B\u4FDD\u7684\uFF0C\u8BF7\u79FB\u6B65\u533B\u9662\u6536\u8D39\u7A97\u53E3\uFF0C\u51ED\u5904\u65B9\u5355\u7F34\u8D39\u3002'
    }, {
        qid: 12,
        question: '如何取消医院黑名单？',
        answer: '\u9ED1\u540D\u5355\u7B49\u76F8\u5173\u95EE\u9898\uFF0C\u8BF7\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0354-8562999\u3002'
    }, {
        qid: 13,
        question: '如何查看化验结果？',
        answer: '\u5316\u9A8C\u5355\u3001\u62A5\u544A\u7ED3\u679C\u7B49\u4FE1\u606F\u8BF7\u54A8\u8BE2\u76F8\u5173\u79D1\u5BA4\u3002'
    }, {
        qid: 14,
        question: '如何办理住院出院？',
        answer: '\u4F4F\u9662\u3001\u51FA\u9662\u6216\u5E8A\u4F4D\u7B49\u76F8\u5173\u95EE\u9898\u8BF7\u5230\u533B\u9662\u670D\u52A1\u53F0\u54A8\u8BE2,\u6216\u62E8\u6253\u533B\u9662\u7535\u8BDD0354-8562999\u3002'
    }, {
        qid: 15,
        question: '四维彩超预约流程',
        answer: '<a href="http://mp.weixin.qq.com/s/H4mIlkOp1mfaVaOX9-aCHQ">\u56DB\u7EF4\u5F69\u8D85\u9884\u7EA6\u6D41\u7A0B</a>'
    }, {
        qid: 16,
        question: '唐筛预约流程',
        answer: '<a href="http://mp.weixin.qq.com/s/khsTMLJZWiK64V6Sa-sTdQ">\u5510\u7B5B\u9884\u7EA6\u6D41\u7A0B</a>'
    }]
}];