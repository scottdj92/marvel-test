import axios, { AxiosRequestConfig } from "axios";
import React from "react";

const source = axios.CancelToken.source();

const config: AxiosRequestConfig = {
    baseURL: " https://gateway.marvel.com:443/v1/public",
    cancelToken: source.token,
    params: {
        apikey: "c8bdfa572bb35fa366a202b82da86c7d",
    },
};

const client = axios.create(config);

const WithData = (WrappedComponent: React.ComponentType) => (
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
                error: "",
            };
        }

        public async componentDidMount() {
            await client.get("/characters")
                .then( (result) => this.setState({ data: result.data.data }))
                .catch( (error) => this.setState({ error }));
        }

        public async componentWillUnmount() {
            // ensure we can cancel the API request if the component is unmounted
            source.cancel();
        }

        public render() {
            return (<WrappedComponent {...this.state} {...this.props}/>);
        }
    }
);

export default WithData;
