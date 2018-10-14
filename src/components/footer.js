import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
    <div
        style={{
            background: '#000',
            textAlign: 'center',
            position: 'fixed',
            bottom: 0,
            width: '100%',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                width: '80%',
                padding: '1.45rem 1.0875rem',
            }}
        >
            <p style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Powered by Codefin Co., Ltd.
                </Link>
            </p>
        </div>
    </div>
)

export default Footer
