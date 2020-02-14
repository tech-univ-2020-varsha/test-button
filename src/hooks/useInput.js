import React, { Component,useState,useEffect } from 'react';
import axios from 'axios'

export const useInput=(url,defaultValue)=>{
    const [text,setText]=useState(defaultValue);
    useEffect(()=>{
       
         axios.get(url).then(({data})=>{
                setText(data.initialText);
            })
           
       
    },[url])
    return [text,setText];
}

// export {useInput}