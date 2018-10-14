import React, { Component } from 'react';

class Footer extends Component {

    render() {

        return (
            <footer>
                <img src="/static/img/power.svg" />
                <style jsx>{`
                    footer {
                        background-color: #000;
                        width:100%;
                        text-align:center;
                        img{
                            width:300px;
                        }
                    }
                    `}
                </style>
            </footer>
        );
    }
}

export default Footer;
