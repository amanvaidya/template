import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CSelect,
  CButton,
  CAlert,
  CInputFile,

  } from '@coreui/react'


const NewCompany = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])
  function hideName(){
    document.getElementById('hideName').style.visibility="hidden";
  }
  function hideAdd(){
    document.getElementById('hideAdd').style.visibility="hidden";
  }
    function goNext(){

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
              <CCol xl={6}>
                Company Name*
                <CInput custom name="compName" id="compName" placeholder="Company Name" onKeyPress={hideName}/>
                <p color="info" id="nmErr" style={{visibility: "hidden"}}>Please enter company address.</p>
              </CCol>
              <CCol xl={6}>
                Company Address*
                <CInput custom name="compAdd" id="compAdd" placeholder="Company Address" onKeyPress={hideAdd}/>
                <p color="info" id="addErr" style={{visibility: "hidden"}}>Please enter company address.</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
                City*
                <CInput custom name="compCity" id="compCity" placeholder="City" onKeyPress={hideName}/>
                <p color="info" id="ctErr" style={{visibility: "hidden"}}>Please enter city.</p>
              </CCol>
              <CCol xl={6}>
                State*
                <CInput custom name="compState" id="compState" placeholder="State" onKeyPress={hideAdd}/>
                <p color="info" id="stErr" style={{visibility: "hidden"}}>Please enter state.</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
                Country*
                <CInput custom name="compCountry" id="compCountry" placeholder="Country" onKeyPress={hideName}/>
                <p color="info" id="conErr" style={{visibility: "hidden"}}>Please enter country.</p>
              </CCol>
              <CCol xl={6}>
                Pin*
                <CInput custom name="compPin" id="compPin" placeholder="Pin" onKeyPress={hideAdd}/>
                <p color="info"id="pnErr"  style={{visibility: "hidden"}}>Please enter pin.</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
                Fax
                <CInput custom name="compFax" id="compFax" placeholder="Fax"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter fax details</p>
              </CCol>
              <CCol xl={6}>
                Phone
                <CInput custom name="compPhone" id="compPhone" placeholder="Phone"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter phone number</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
                PAN
                <CInput custom name="compPan" id="compPan" placeholder="PAN"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter PAN details</p>
              </CCol>
              <CCol xl={6}>
                GSTIN
                <CInput custom name="compGSTIN" id="compGSTIN" placeholder="GSTIN"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter GSTIN</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
                License Number
                <CInput custom name="compLicNum" id="compLicNum" placeholder="License Number"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter License Number</p>
              </CCol>
              <CCol xl={6}>
                License Start Date
                <CInput type="date" name="compLicDate" id="compLicDate" placeholder="License Start Date"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter License Date</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
                License End Date
                <CInput type="date" name="compLicEDate" id="compLicEDate" placeholder="License End Date"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter License Number</p>
              </CCol>
              <CCol xl={6}>
                SMTP Port
                <CInput custom name="compPort" id="compPort" placeholder="SMTP Port"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter SMTP Port</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
              SMTP Email ID
              <CInput custom name="compEmail" id="compEmail" placeholder="SMTP Email Id"/>
              <p color="info" style={{visibility: "hidden"}}>Please enter Email Id</p>
              </CCol>
              <CCol xl={6}>
                SMTP Password
                <CInput custom name="compPass" id="compPass" placeholder="SMTP Password"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter SMTP Password</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol xl={6}>
              Upload Logo
              <CInputFile name="compLogo" id="compLogo"/>
              <p color="info" style={{visibility: "hidden"}}>Please upload logo</p>
              </CCol>
              <CCol xl={6}>
                Company Logo
                <img src="/#"/>
                <p color="info" style={{visibility: "hidden"}}>Please enter SMTP Password</p>
              </CCol>
            </CRow>




            <CRow>&nbsp;</CRow>
            <CRow>
              <CButton block color="primary" onClick={goNext}>Save</CButton>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default NewCompany
