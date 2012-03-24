//el:��ҳ���� count:�ܼ�¼�� pageStep:ÿҳ��ʾ���ٸ� pageNum:�ڼ�ҳ fnGo:��ҳ��ת����
var jsPage = function(el, count, pageStep, pageNum, fnGo) {
	this.getLink = function(fnGo, index, pageNum, text) {
		var s = '<a href="#p' + index + '" onclick="' + fnGo + '(' + index + ');" ';
		if(index == pageNum) {
			s += 'class="aCur" ';
		}
		text = text || index;
		s += '>' + text + '</a> ';			
		return s;
	}
	
	//��ҳ��
	var pageNumAll = Math.ceil(count / pageStep);
	if (pageNumAll == 1) {
		divPage.innerHTML = '';
		return;
	}
	var itemNum = 5; //��ǰҳ����������ʾ����
	pageNum = Math.max(pageNum, 1);
	pageNum = Math.min(pageNum, pageNumAll);
	var s = '';
	if (pageNum > 1) {
		s += this.getLink(fnGo, pageNum-1, pageNum, '��һҳ');
	} else {
		s += '<span>��һҳ</span> ';
	}
	var begin = 1;
	if (pageNum - itemNum > 1) {
		s += this.getLink(fnGo, 1, pageNum) + '... ';
		begin = pageNum - itemNum;
	}
	var end = Math.min(pageNumAll, begin + itemNum*2);
	if(end == pageNumAll - 1){
		end = pageNumAll;
	}
	for (var i = begin; i <= end; i++) {
		s += this.getLink(fnGo, i, pageNum);
	}
	if (end < pageNumAll) {
		s += '... ' + this.getLink(fnGo, pageNumAll, pageNum);
	}
	if (pageNum < pageNumAll) {
		s += this.getLink(fnGo, pageNum+1, pageNum, '��һҳ');
	} else {
		s += '<span>��һҳ</span> ';
	}
	var divPage = document.getElementById(el);
	divPage.innerHTML = s;
}
