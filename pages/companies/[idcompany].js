import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Company = () => {
    const router = useRouter()
    const [companyInfo, setCompanyInfo] = useState()
    
    
    useEffect(()=> {
        const companyinfo = await fetchEntries();
        console.log(companyinfo)
    }, [])
    return (
      <>
        Product Page
      </>
    )
  }
  
  export default Company;