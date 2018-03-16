import React from "react";
import style from ".././css/style.css";
import pic from ".././Images/1.jpg";



var ftstyle = {
    position: "fixed",
    "bottom": 0,
    "left": '0',
    "padding": '10px',
    "width": "100%",
    "textAlign": "center",
    "boxSizing": "border-box",
    background: "#1abc9c",
}



class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            infos: "开开心心撸代码",
            idx: 0,
            dis_no: "none",
        }
    }
    showBox(index) {
        this.setState({
            dis_no: "block",
        })
    }
    liFun(item, index) {
        if (index === 3) {
            this.setState({
                dis_no: "none",
            })
            return ;
        }
        this.setState({
            idx: index,
            infos: item.text,

        })


        console.log(item);
    }
    render() {
        let liItem = [
            {
                text: "极客头条"

            }, {
                text: "伯乐头条"
            }, {
                text: "开发者头条"
            }
            , {
                text: "取消"
            }
        ]
        return (
            <div >

                <div className="testContent">
                    你选择的信息：{this.state.infos}
                    <img src={pic} className="pic" />
                </div>
                <div style={ftstyle} onClick={() => this.showBox()}>切换更多</div>
                <div className="block_ul" style={{ 'display': this.state.dis_no }}>

                    <ul>
                        {
                            liItem.map((item, index) => {
                                return (
                                    <li key={index} className={`block_li  ${index === this.state.idx ? 'active' : ''}`} onClick={() => { this.liFun(item, index) }}>
                                        {item.text}
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


export default Footer;