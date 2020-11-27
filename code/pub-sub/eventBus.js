class EventBus {
    constructor() {
        this.callbacks = {}
    }
    // 发布者
        $on(eventType, fn) {
            this.callbacks[eventType] = this.callbacks[eventType] || []
            this.callbacks[eventType].push(fn)
        }
    // 订阅者
    $emit(eventType,...args) {
        if (!this.callbacks[eventType]) {
            this.callbacks.map(cb => cd(...args))
        }
    }
}