exports.success = function() {
	var result = new Object();
	result.code = 0;
	result.message = '성공';

	var JsonInfo = JSON.stringify(result);
	return JsonInfo;

};

exports.success = function(data) {
	var result = new Object();
	result.code = 0;
	result.message = '성공';
	result.data = data;

	var JsonInfo = JSON.stringify(result);
	return JsonInfo;
};

exports.db_error = function() {
	var result = new Object();
	result.code = 200;
	result.message = 'DB 에러';

	var JsonInfo = JSON.stringify(result);
	return JsonInfo;
};

exports.same_data = function() {
	var result = new Object();
	result.code = 300;
	result.message = '중복데이터';

	var JsonInfo = JSON.stringify(result);
	return JsonInfo;
};

exports.null_data = function() {
	var result = new Object();
	result.code = 404;
	result.message = '데이터 없음';

	var JsonInfo = JSON.stringify(result);
	return JsonInfo;
};

exports.null_params = function() {
	var result = new Object();
	result.code = 500;
	result.message = '파라미터 오류';

	var JsonInfo = JSON.stringify(result);
	return JsonInfo;
};