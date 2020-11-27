// 发布者
class Publisher {
    constructor() {
        let subsMap = {} // 订阅者
    }
    // 消息订阅
    subscribe(type,cb) {
        this.subsMap[type] = this.subsMap[type] || []
        this.subsMap[type].push(cb)
    }
    // 消息退订
    unsubscribe(type,cb) {
        if (!this.subsMap[type] || !this.subsMap[type].includes(cb)) {
            return;
        }
    }
    // 发布消息
    notify(type,...payload) {
        if (!this.subsMap[type]) { return;}
        this.subsMap[type].map(cb => cb(...payload))
    }
}

// 订阅者

class Watcher {
    constructor() {}
    update() {
        console.log('接收到消息了~');
    }

}


// 测试
let  p = new Publisher()
let watcher = new Watcher()
p.subscribe(watcher,watcher.update)
p.notify()