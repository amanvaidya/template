import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {apiUrl} from '../utils/constants'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSelect,
  CButton,
  CAlert,
  } from '@coreui/react'


const Company = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/getCompany")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])


  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])
  function hideInfo(){
    document.getElementById('info').style.visibility="hidden";
  }
    function goNext(){
      document.getElementById('info').style.visibility="hidden";
    var val = document.getElementById('compSel').value;
    if(val==0){
      //validation if nothing is selected..
      document.getElementById('info').style.visibility="visible";
      document.getElementById('compSel').focus();
      return false;
    }else if(val==1){
      //location of new company page..
      window.location="#/newCompany"
    }else{
      var compName=document.getElementById('compSel').value;
      console.log(compName);
      //location of existing company page..
      window.location="#/companyUpdate"

    }
  }
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Company Configuration
            </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <CSelect custom name="select" id="compSel" onChange={hideInfo}>
                  <option value="0">Please select</option>
                  <option value="1">New</option>
                  {items.map(item => (
                    <option key={item.company_id}>
                      {item.company_name}
                    </option>
                  ))}
                </CSelect>
              </CCol>
            </CRow>
            <CRow  id="info" style={{visibility: "hidden"}}>
            <CCardBody>
              <CAlert
                color="info"
              >
                Please select company option.
              </CAlert>
            </CCardBody>
            </CRow>
            <CRow>&nbsp;</CRow>
            <CRow>
              <CButton block color="primary" onClick={goNext}>Next</CButton>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Company
