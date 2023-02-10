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
        siUserNumError.innerHTML = '您输入的账号有误';
    }else{
        siUserNumError.innerHTML = '';
    }
    if(siUserPassword.value.length !== 7){
        siUserPasswordError.innerHTML = '您输入的密码有误';
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
    if(reUserNum.value.length !== 5){
        reUserNumError.innerHTML = '您输入的账号有误';
    }else{
        reUserNumError.innerHTML = '';
    }
    if(reUserPassword.value.length !== 7){
        reUserPasswordError.innerHTML = '您输入的密码有误';
    }else{
        reUserPasswordError.innerHTML = '';
    }

})


//留言板
let btn = document.querySelector('.release')
let text = document.querySelector('textarea')
let ul = document.querySelector('ul')
btn.addEventListener('click',function(){
    if (text.value == '') {
        alert('您没有输入任何内容')
    } else {
        let li = document.createElement('li')
        li.innerHTML = text.value + '<p>删除</p>'
        ul.insertBefore(li, ul.children[0]);
        let del = document.querySelectorAll('li p')
        for (let i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                ul.removeChild(this.parentNode)
            }
        }

    }
})
