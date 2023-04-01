 //按s键后将光标定位到文本框内
let search = document.querySelector('input');
document.addEventListener('keyup', function (e) {
if (e.key == 's') {
    search.focus();
    }
})

 //点击登录弹出界面
let signBtn = document.querySelector('.signBtn');
let siRe = document.querySelector('.siRe');
let si = document.querySelector('.si');
let re = document.querySelector('.re')
signBtn.addEventListener('click',function(e){
    siRe.style.display = 'block';
    re.style.display = 'none'; 
}) 
 //点击注册或登录切换界面
let reBtn = document.querySelector('.reBtn');
reBtn.addEventListener('click',function(){
    re.style.display = 'block';
    si.style.display = 'none';
    
})
let siBtn = document.querySelector('.siBtn');
siBtn.addEventListener('click',function(){
    si.style.display = 'block';
    re.style.display = 'none';
    
})
 //点击叉号退出登录界面
let out = document.querySelector('.siRe img');
out.addEventListener('click',function(){
    siRe.style.display = 'none';
})
 //表单验证
let siUserNum = document.querySelector('.siUserNum')
let siUserPassword = document.querySelector('.siUserPassword')
let siUserNumError = document.querySelector('#siUserNum')
let siUserPasswordError = document.querySelector('#siUserPassword')
let siSubmit = document.querySelector('.siSubmit')
siSubmit.addEventListener('click',function(){
    if(siUserNum.value.length !== 5){
        siUserNumError.innerHTML = '您输入的账号有误,请输入五位数的账号';
    }else{
        siUserNumError.innerHTML = '';
    }
    if(siUserPassword.value.length <= 5){
        siUserPasswordError.innerHTML = '您输入的密码有误，密码长度不得低于五位数';
    }else{
        siUserPasswordError.innerHTML = '';
    }

})
let reUserNum = document.querySelector('.reUserNum')
let reUserPassword = document.querySelector('.reUserPassword')
let reUserNumError = document.querySelector('#reUserNum')
let reUserPasswordError = document.querySelector('#reUserPassword')
let reSubmit = document.querySelector('.reSubmit')
reSubmit.addEventListener('click',function(){
    if(reUserNum.value.length === 0){
        reUserNumError.innerHTML = '您还没有想好名字呢';
    }else{
        reUserNumError.innerHTML = '';
    }
    if(reUserPassword.value.length <= 5){
        reUserPasswordError.innerHTML = '您输入的密码有误，密码长度不得低于五位数';
    }else{
        reUserPasswordError.innerHTML = '';
    }

})
//登录动画
siSubmit.addEventListener('click', function() {
    if (siUserNum.value.length === 5 && siUserPassword.value.length > 5) {
    let loader = document.querySelector('.loaderBackground');
    loader.style.display = 'block';
      // 延迟两秒显示结果
    setTimeout(function() {
        loader.style.display = 'none';
        alert('登录成功');
    }, 2000);
    } else {
    alert('请输入正确的账号和密码');
    }
});
reSubmit.addEventListener('click', function() {
    if (reUserNum.value.length > 0 && reUserPassword.value.length > 5) {
    let loader = document.querySelector('.loaderBackground');
    loader.style.display = 'block';
      // 延迟两秒显示结果
    setTimeout(function() {
        loader.style.display = 'none';
        alert('登录成功');
    }, 2000);
    } else {
    alert('请输入正确的用户名和密码');
    }
});
//轮播图
let roImages = document.querySelector('.roImages');
let roMinImages = document.querySelectorAll('.roMinImages li');
let buttonLeft = document.querySelector('.buttonLeft');
let buttonRight = document.querySelector('.buttonRight');
let index = 0;
let timer;

function slide() {
  roImages.style.left = (index * -100) + "%";
}

function add() {
if (index >= roMinImages.length - 1) {
    index = 0;
} else {
    index++;
}
}

function desc() {
if (index <= 0) {
    index = roMinImages.length - 1;
} else {
    index--;
}
}

function time() {
timer = setInterval(function() {
    index++;
    desc();
    add();
    slide();
}, 3000);
}

time();

buttonLeft.addEventListener('click', function() {
desc();
slide();
clearInterval(timer);
time();
});

buttonRight.addEventListener('click', function() {
add();
slide();
clearInterval(timer);
time();
});

for (let i = 0; i < roMinImages.length; i++) {
roMinImages[i].addEventListener('click', function() {
    index = i;
    slide();
    clearInterval(timer);
    time();
});
}
//悬停下显示轮播图切换按钮
let rotograph = document.querySelector('.rotograph');
rotograph.addEventListener('mouseover',function(){
    buttonLeft.style.display = 'block';
    buttonRight.style.display = 'block';
})
rotograph.addEventListener('mouseout',function(){
    buttonLeft.style.display = 'none';
    buttonRight.style.display = 'none';
})
//留言板
let btn = document.querySelector('.release')
let text = document.querySelector('textarea')
let ul = document.querySelector('ul')
btn.addEventListener('click', function () {
if (text.value == '') {
    alert('您没有输入任何内容')
} else {
    let li = document.createElement('li')
    li.innerHTML = text.value + '<p>删除</p>'
    let del = li.querySelector('p')
    del.onclick = function () {
    ul.removeChild(li)
    }
    ul.insertBefore(li, ul.children[0])
}
})
