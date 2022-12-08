import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import RegistrationForm from '../../components/RegistrationForm'
import Layout from '../components/Layout'

export default function SellerPage()
{

    return (
        <div>
            <Layout title="Registration Page">
                <RegistrationForm/>
            </Layout>
            
        </div>
    )
}
