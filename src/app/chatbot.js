"use client"
import React, { Component } from "react";
class KommunicateChat extends Component {
    constructor(props) {
        super()
    }
    componentDidMount() {

       
        (function(d, m){
            var kommunicateSettings = {"appId":"11e3c535484c206013d566d15cab7233a","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});

    }
    render() {
        return (
            <div></div>
        )
    }
}

export default KommunicateChat;
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
