/* 
 * @东南巽司坤 版权所有
 */

class webUtil{
	static ProxyDebugger = class ProxyDebugger{
		static proxyDebugger = new ProxyDebugger();
		static proxy(obj){
			return ProxyDebugger.proxyDebugger.proxy(obj);
		}
		static log(){
			ProxyDebugger.proxyDebugger.log();
		}
		proxy(obj){
			return new Proxy(obj,this);
		}
		list = [];
		get(obj,key){
			let result = obj[key];
			let data = {
				type:"get",
				obj:obj,
				key:key,
				val:result,
				time:Date.now()
			};
			Error.captureStackTrace(data);
			data.stack = data.stack.split("\n");
			data.stack.shift();data.stack.shift();
			this.list.push(data);
			return result;
		}
		set(obj,key,val){
			obj[key] = val;
			let data = {
				type:"set",
				obj:obj,
				key:key,
				val:val,
				time:Date.now()
			};
			Error.captureStackTrace(data);
			data.stack = data.stack.split("\n");
			data.stack.shift();data.stack.shift();
			this.list.push(data);
		}
		log(){
			let log = this.list;
			this.list = [];
			console.group(log);
			for(let i in log){
				let d = log[i];
				console.log("%s %s %o[%o] = %o %i",i,d.type,d.obj,d.key,d.val,d.time);
				for(let s in d.stack){
					console.log(d.stack[s]);
				}
			}
			console.groupEnd();
		}
	}
}


