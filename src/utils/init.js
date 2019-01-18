import { Message } from 'element-ui'
import Vue from 'vue'

Vue.prototype.showTip = (args) => {
    if (typeof args === 'undefined') {
        this.$message({
            message: 'error occur',
            type: 'error',
            duration: 3000,
            showClose: true
        });
    } else if (typeof args === 'string') {
        this.$message({
            message: args || 'error occur',
            type: 'error',
            duration: 3000,
            showClose: true
        });
    } else if (typeof args === 'object' && args.type === "success") {
        this.$message({
            message: args.msg || 'operation success',
            type: 'success',
            duration: 3000,
            showClose: true
        });
    } else if (typeof args === 'object' && args.type === "danger") {
        this.$message({
            message: args.msg || 'error occur',
            type: 'error',
            duration: 3000,
            showClose: true
        });
    } else {
        this.$message({
            message: 'error occur',
            type: 'error',
            duration: 3000,
            showClose: true
        });
    }
}
function messageTip(msg) {
    Message({
        message: msg || 'error occur',
        type: 'error',
        duration: 3000,
        showClose: true
    })
}

export default messageTip;

