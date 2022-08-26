import { useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios"

const url = "https://dqzzzp9cuf.execute-api.eu-west-2.amazonaws.com/Prod/ehealth/records?type=medicine"
const headers = {
    headers: { 
        'content-type': 'application/json', 
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": "X-Requested-With" 
    }
} 

const params ={
    type : "medicine"
}

const MainContent = () => {
    const [content, setContent] = useState("")

    const getContent = async() =>{
        const topicContent = await axios.get(url, params, headers)
        console.log(`topicContent::: ${JSON.stringify(topicContent.data)}`)
        console.log(`content 1::: ${JSON.stringify(content)}`)
        setContent("S3 GET")
        console.log(`content 2::: ${JSON.stringify(content)}`)
    }

    return (
        <>
            <div>Main Content</div>
            <p>{content}</p>
            <button onClick={getContent}>click</button>
            <Outlet/>
        </>
    ) 
}

export default MainContent;