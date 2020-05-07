
var exp='';
function back()
{
	exp=document.cals.screen.value;
	exp=exp.substring(0,exp.length-1);
	document.cals.screen.value=exp;
}
var displayVal;
var pendingVal;
var evalStringArray=[];





function result(pre)
{
	final=eval(pre);
	document.cals.histo.value=pre;
	document.cals.screen.value=final;
}







