import React, { Component } from 'react';

class Footer extends Component {

    render() {

        return (
            <footer>
                <p>&copy; 2018 Codefin.io all rights reserved.</p>
                <style jsx>{`
                    footer {
                        background-color: #000;
                        position: fixed;
                        width:100%;
                        bottom:0;
                        text-align:center;
                        p{
                            color:#7a7a7a;
                            font-family: montserrat;
                            font-size: 14px;
                            font-weight: 300;
                        }
                    }
                    `}
                </style>
            </footer>
        );
    }
}

export default Footer;
