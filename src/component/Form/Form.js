import React from "react";





class Form extends React.Component {
    submitFun() {
        console.log("llll");
    }
    render() {
        return (
            <div className="form_block">
                <input type="text" placeholder="请输入用户名" />
                <input type="password" placeholder="请输入密码" />
                <div className="btn_submit" onClick={() => {this.submitFun()}}>登录</div>
            </div>
        )
    }
}
export default Form;