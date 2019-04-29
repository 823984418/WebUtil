/* 
 * @东南巽司坤 版权所有
 */

class WebUtil{
	static debuggerHandler = new class DebuggerHandler{
		get(obj,key){
			console.groupCollapsed("代理调试器读取");
			console.log("源");
			console.dir(obj);
			console.log("键");
			console.dir(key);
			let result = obj[key];
			console.log("返回");
			console.dir(result);
			console.trace("栈");
			console.groupEnd();
			return result;
		}
		set(obj,key,val){
			console.groupCollapsed("代理调试器写入");
			console.log("源");
			console.dir(obj);
			console.log("键");
			console.dir(key);
			console.log("值");
			console.dir(val);
			console.trace("栈");
			console.groupEnd();
			return obj[key] = val;
		}
		proxy(obj){
			return new Proxy(obj,this);
		}
	}
}
