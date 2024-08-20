import { useEffect, useState } from "react";

function useFooter() {
    const [adreess, setAdreess] = useState<any>();
    const [contactUs, setContactUs] = useState<any>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/footer-adress?populate=*`, {
            method: "GET",
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAdreess(data.data);
            });

        fetch(`${process.env.REACT_APP_API_URL}/footer-contact-us?populate=*`, {
            method: "GET",
            headers: {
                Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setContactUs(data.data);
            });
    }, []);

    return {
        adreess,
        contactUs,
    };
}

export default useFooter;
