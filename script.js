var clipboard=new Clipboard('.hex');clipboard.on('success',function(e){e.clearSelection();showTooltip(e.trigger,'Copied!');});clipboard.on('error',function(e){showTooltip(e.trigger,fallbackMessage(e.action));});
var btns=document.querySelectorAll('.hex');for(var i=0;i<btns.length;i++){btns[i].addEventListener('mouseleave',clearTooltip);btns[i].addEventListener('blur',clearTooltip);}
function clearTooltip(e){e.currentTarget.setAttribute('class','hex');e.currentTarget.removeAttribute('aria-label');}
function showTooltip(elem,msg){elem.setAttribute('class','hex tooltipped tooltipped-w');elem.setAttribute('aria-label',msg);}
function fallbackMessage(action){var actionMsg='';var actionKey=(action==='cut'?'X':'C');if(/iPhone|iPad/i.test(navigator.userAgent)){actionMsg='No support :(';}
else if(/Mac/i.test(navigator.userAgent)){actionMsg='Press ⌘-'+actionKey+' to '+action;}
else{actionMsg='Press Ctrl-'+actionKey+' to '+action;}
return actionMsg;}
$('.color-tag').hover(
       function(){ $(this).addClass('tooltipped tooltipped-e') }
);
$(".hex").click(function(){
    $(".color-tag").removeClass("tooltipped tooltipped-e");
});