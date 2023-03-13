import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function Navi() {
    const { campaign_id, app_ads_id, user_id } = useParams()
    const [ad, setAd] = useState()

    useEffect(() => {
        fetch('https://ads.behad.uz/api/v1/advertisements?campaign_id=' + campaign_id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    setAd(data.data[0])
                }
            }).catch((e) => console.log(e))

        fetch("https://ads.behad.uz/api/v1/addAction", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                app_ads_id: app_ads_id,
                action: 3,
                campaign_id: campaign_id,
                user_id: user_id
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            }).catch((e) => console.log(e))
    }, [])

    useEffect(() => {
        if(ad){
            window.location.href = ad?.advertisement_click_link
        }
    }, [ad])


    return (
        <></>
    )
}

export default Navi;