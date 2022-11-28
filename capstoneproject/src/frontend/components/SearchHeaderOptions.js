import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'
import {useRouter} from 'next/router'

export default function SearchHeaderOptions() {
  const router = useRouter()
  function selectTab(title)
  {
    router.push(`/search?term=${router.query.term}&searchType=${title === "images" ? "imagae" : ""}`)
  }
    return (
    <div>
        {/* onClick={selectTab(title)} className>
        <Icon className="h-4"/>
        <p>{title}</p> */}
    </div>
  )
}
