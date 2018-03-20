import React from "react";





class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            idx: 0
        }
    }

    tabClick = (index) => {
        this.setState({
            idx: index,
        })
    }
    render() {
        const tab = [
            {
                tab_txt: "全部",
            },
            {
                tab_txt: "已取消",
            }, {
                tab_txt: "已结束",
            }
        ]
        const content = [
            {
                item: "内容1"
            }, {
                item: "内容2"
            }
            , {
                item: "内容3"
            }
        ]

        return (
            <div className="tab_block">


                <div className="tab" >
                    <ul>
                        {
                            tab.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => this.tabClick(index)} className={this.state.idx === index ? "current" : " "}>
                                        {item.tab_txt}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="tab_content">
                    {
                        content.map((item, index) => {
                            return (

                                <div key={index} className={this.state.idx === index ? "dis_block" : " "}>

                                    {item.item}
                                </div>
                            )
                        })
                    }
                </div>
                <a href="./../Index/Index" className="link_to">单击页面跳转</a>
            </div>
        )
    }
}


export default MainContent;