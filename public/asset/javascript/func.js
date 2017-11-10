var CUES = {
    tip:function(options){
        var msg = options.msg;
        var type = options.type?options.type:'info';
        var time = options.time?options.time:1000;
        var elma = this.createdom({"tag":"div","classname":"tippop","msg":'<div class="text '+type+'">'+msg+'</div></div>'});
        document.body.appendChild(elma);
        setTimeout(function(){
            elma.style.opacity = 0;
            elma.style.webkitTransition = 'all 1.5s';
            setTimeout(function(){
                options.callback && options.callback();
                elma.remove();
            },1000);
        },time);
    },
    alert:function(options){
        var msg = options.msg;
        var elma = this.createdom({"tag":"div","classname":"tippop_alert"});
        var elmb = this.createdom({"tag":"p","classname":"tippop_alert_t","msg":options.msg});
        var elmc = this.createdom({"tag":"a","classname":"tippop_alert_b","msg":"确定"});
        elma.appendChild(elmb),elma.appendChild(elmc);
        document.body.appendChild(elma);

        var elm_bg = this.createdom({"tag":"div","classname":"tippop_bg"});
        document.body.appendChild(elm_bg);

        elmc.addEventListener('click',function(){
            elm_bg.remove();
            elma.remove();
            options.callback && options.callback();
        },false);
    },
    confirm:function(options){
        var msg = options.msg;
        var elma = this.createdom({"tag":"div","classname":"tippop_alert"});
        var elmb = this.createdom({"tag":"p","classname":"tippop_alert_t","msg":options.msg});
        var elmc = this.createdom({"tag":"p","classname":"tippop_alert_b"});
        var a_cal = this.createdom({"tag":"a","classname":"tippop_confirm_btn","msg":"取消"});
        var a_sure = this.createdom({"tag":"a","classname":"tippop_confirm_btn","msg":"确定"});
        elmc.appendChild(a_cal),elmc.appendChild(a_sure);
        elma.appendChild(elmb),elma.appendChild(elmc);
        document.body.appendChild(elma);
        var elm_bg = this.createdom({"tag":"div","classname":"tippop_bg"});
        document.body.appendChild(elm_bg);
        a_cal.addEventListener('click',function(){
            elm_bg.remove();
            elma.remove();
        },false);
        a_sure.addEventListener('click',function(){
            elm_bg.remove();
            elma.remove();
            options.callback && options.callback();
        },false);
    },
    createdom:function(options){
        var dom = document.createElement(options.tag);
        dom.className = options.classname;
        if(options.msg){
            dom.innerHTML = options.msg;
        }
        return dom;
    }
};
function getRequest(){
    var url = window.location.search,
        theRequest = {},
        str = '',
        para = [];
    if (url.indexOf("?") != -1) {
        str = url.substr(1);
        strs = str.split("&");
        for(var i = 0, len = strs.length; i < len; i ++) {
            para = strs[i].split("=");
            //decodeURI()、decodeURIComponent
            theRequest[para[0]] = decodeURIComponent( (para.length>=2)?para[1]:"");
        }
    }
    return theRequest;
};



function dataSelect(option){
    this.opt = option;
    this.setting();
    this.render();
    this.bindEvent();
    return this;
}
dataSelect.prototype = {
    setting:function(){
        var opt = this.opt;
        this.data = opt.data;
        this.fieldshow = opt.fieldshow;
        this.fieldvalue = opt.fieldvalue;
        this.default_v = opt.default_v?opt.default_v:this.data[0][opt.fieldvalue];
        this.unit = opt.unit?opt.unit:24;
        this.target = opt.target;
        this.title = opt.title?opt.title:'';
        this.maxY = -(this.data.length-3)*this.unit;
        this.Y = 0;
        this.fy = this.ly = this.ofy = 0;
        this.v = null;
    },
    render:function(){
        this.outer = this.createdom({"tag":"div","classname":"select_data_box"});
        document.body.appendChild(this.outer);

        this.outer.innerHTML = '<div class="select_data"><p class="sc-btns"><a href="javascript:;" class="sc-btn sc-cal">取消</a><a href="javascript:;" class="sc-btn sc-btna sc-sure">确定</a><span class="sc-title">'+this.title+'</span></p><div class="scls"><div class="sclsbox"></div></div></div>';
        this.sclsbox = this.outer.getElementsByClassName("sclsbox")[0];
        this.sc_cal = this.outer.getElementsByClassName("sc-cal")[0];
        this.sc_sure = this.outer.getElementsByClassName("sc-sure")[0];


        this.scul = this.createdom({"tag":"ul","classname":"sc-ul"});
        this.scul.style.webkitTransition = "all .3s";

        var len = this.data.length,fieldshow = this.fieldshow,default_v = this.default_v,unit = this.unit,fieldvalue = this.fieldvalue;
        for(var i=0;i<len;i++){
            var v = this.data[i];
            var li = this.createdom({"tag":"li","classname":"sc-option","msg":v[fieldshow]});
            if(v[fieldvalue] == default_v){
                this.Y = (2-i)*unit;
                if(this.opt.default_v){this.v = v};
                this.scul.style.webkitTransform = 'translateZ(0) translateY('+((2-i)*unit)+'px)';
            };
            this.scul.appendChild(li);
        }
        this.sclsbox.appendChild(this.scul);
    },
    createdom:function(options){
        var dom = document.createElement(options.tag);
        dom.className = options.classname;
        if(options.msg){
            dom.innerHTML = options.msg;
        }
        return dom;
    },
    bindEvent:function(){
        var _this = this,scul = this.scul,unit = this.unit,outer = this.outer,target = this.target,fieldshow = this.fieldshow;
        this.sclsbox.addEventListener('touchstart',function(event){
            scul.style.webkitTransition = "all 0s";
            var touches = event.targetTouches;
            _this.fy = touches[0].pageY;
        },false);
        this.sclsbox.addEventListener('touchmove',function(event){
            var touches = event.targetTouches;
             _this.ly = touches[0].pageY;
            var cy =  _this.ly-_this.fy;
            scul.style.webkitTransform = 'translateZ(0) translateY('+(_this.Y+cy)+'px)';
            event.preventDefault();
        },false)
        this.sclsbox.addEventListener('touchend',function(event){
            scul.style.webkitTransition = "all .3s";
            if(_this.ly==0){
                _this.fy =  _this.ly = 0;
                return false;
            }
            _this.Y = Math.round((_this.Y + _this.ly - _this.fy)/unit)*unit;
            if(_this.Y<=_this.maxY){
                _this.Y = _this.maxY;
            }else if(_this.Y>=2*unit){
                _this.Y = 2*unit;
            };
            scul.style.webkitTransform = 'translateZ(0) translateY('+(_this.Y)+'px)';
            _this.fy =  _this.ly = 0;

            var v = _this.data[2-Math.floor(_this.Y/unit)];
            if(v!=_this.v){
                _this.v = v;
                _this.opt.change && _this.opt.change(v); 
            }
        },false);

        this.sc_cal.addEventListener('click',function(){
            outer.style.display = "none";
        },false);
        this.target.addEventListener('click',function(){
            if(!_this.v){_this.v = _this.data[0]};
            outer.style.display = "block";
        },false);
        this.sc_sure.addEventListener('click',function(){
            target.value = _this.v[fieldshow];
            _this.opt.selected && _this.opt.selected(_this.v)
            outer.style.display = "none";
        },false);
    }
}

function picshow(id){
    this.elm = document.getElementById(id);
    var _this = this;
    var ww = window.innerWidth,
        wh = window.innerHeight,
        close = this.elm.getElementsByClassName('close')[0];

    close.addEventListener('click',function(){
        _this.elm.style.display = 'none';
    },false)

    this.imgs = this.elm.getElementsByClassName('img');
    this.imgs[1].style.width = wh +'px';
    this.imgs[1].style.height = ww +'px';

};
picshow.prototype = {
    initimg:function(url){
        var _this = this,img = new Image;
        img.src = url;
        img.onload = function(){
            if(img.width>=img.height){
                _this.imgs[0].style.display = 'none';
                _this.imgs[1].style.backgroundImage = 'url('+url+')';
                _this.imgs[1].style.display = 'block';
            }else{
                _this.imgs[1].style.display = 'none';
                _this.imgs[0].style.backgroundImage = 'url('+url+')';
                _this.imgs[0].style.display = 'block';
            };
            _this.elm.style.display = 'block';
        }
    }
}