import {useEffect} from "react";
import ClientService from "../../services/client-service";

const InfoPage = ({client}: any) => {

    useEffect(() => {
        ClientService.getClientInfo()
            .then((response) => {
                console.log(response);
            })
            .catch((e: Error) => {
                console.log(e);
            })
    }, [])

    return (
        <h1>Hi, {client}</h1>
    )
}

export default InfoPage;
