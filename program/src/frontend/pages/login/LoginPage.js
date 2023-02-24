import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import Login from '../../components/Login'
import Layout from '../../layouts/Layout'
 
export default function LoginPage()
{

    return (
        <div>
            <Layout title="Login Page">
                <Login/>
            </Layout>
            
        </div>
    )
}
