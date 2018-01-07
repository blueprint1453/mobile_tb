'use strict';

var app = new Vue({
    el: '#app',
    data: {
        skillData: [],
        hospitalId: '',
        bid: ''
    },
    mounted: function mounted() {
        this.hospitalId = getUrlParam('hospital_id');
        this.bid = getUrlParam('bid');

        if (this.bid) {
            this.getSkillLists();
        }
    },

    methods: {
        toDetail: function toDetail(id) {
            if (id == 24) {
                if (this.hospitalId) {
                    location.href = './problem' + this.hospitalId + '.html?hospital_id=' + this.hospitalId;
                }
                return;
            }
            location.href = './skill_detail.html?skill_id=' + id;
        },
        getSkillLists: function getSkillLists() {
            var _this = this;

            this.$http.get('/get_bid_skill_ids?bid=' + this.bid).then(function (res) {
                var data = res.data;
                if (data.code == 0) {
                    for (var i = 0, len = skill_data.length; i < len; i++) {
                        if (data.data.skill_ids.find(function (id) {
                            return skill_data[i].id == id;
                        })) {
                            _this.skillData.push(skill_data[i]);
                        }
                    }
                } else {
                    alert(data.msg);
                }
            });
        }
    }
});