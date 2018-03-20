import React from "react";
import Header from ".././Header/Header";
import MainContent from ".././MainContent/MainContent";
import Footer from ".././Footer/Footer";
import Properties from ".././Properties/Properties";
import Form from ".././Form/Form";

const AllContent=()=>(
	<div>
		<Form />
    	<Properties txt="这就是用来测试ProtoTypes" age={5} />
		<Header />
		<MainContent />
		<Footer />
	</div>
)


export default AllContent;