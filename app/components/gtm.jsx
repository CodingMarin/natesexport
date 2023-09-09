"use client"

import { useEffect } from "react"

const GoogleTagManager = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-T67CT6C8`;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const noscript = document.createElement('noscript');
            noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T67CT6C8"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.appendChild(noscript);
        };
    }, []);

    return null;
}

export default GoogleTagManager

