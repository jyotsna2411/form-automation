"use client";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./form.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

function FieldsForm() {
  const [formdata, setformdata] = useState({
    Address: "",
    APN: "",
    County: "",
    State: "",
    PropertyWebLink: "",
    ContractPrice: "",
    ClosingDate: "",
    AcquisitionCost: "",
    AdditionalCosts: "",
    SalePrice: "",
    SoldComps: "",
    SaleComps: "",
    ClosingCost: "",
    Profit: "",
    RealtorName: "",
    RealtorContact: "",
    Zoning: "",
    Buildable: "",
    Topography: "",
    LotSize: "",
    Electric: "",
    Water: "",
    Sewer: "",
    Access: "",
    SaleTimeline: "",
  });
  const [validated, set_Validated] = useState(false);

  useEffect(() => {
    const hasNoEmptyValues = Object.values(formdata).every(
      (value) => value !== ""
    );
    set_Validated(hasNoEmptyValues);
  }, [formdata]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name);
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/trigger-puppeteer", {
        formData: formdata,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles.dynamic_form}>
      <h1>Form Fields</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Property Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Address"
            value={formdata.Address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAPN">
          <Form.Label>APN</Form.Label>
          <Form.Control
            value={formdata.APN}
            onChange={handleChange}
            name="APN"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCounty">
          <Form.Label>County</Form.Label>
          <Form.Control
            value={formdata.County}
            onChange={handleChange}
            name="County"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control
            value={formdata.State}
            onChange={handleChange}
            name="State"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formlinkPropertyWebsite">
          <Form.Label>Link to Property in assessors website</Form.Label>
          <Form.Control
            value={formdata.PropertyWebLink}
            onChange={handleChange}
            name="PropertyWebLink"
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridContractPrice">
            <Form.Label>Contract Price</Form.Label>
            <Form.Control
              value={formdata.ContractPrice}
              onChange={handleChange}
              name="ContractPrice"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridClosingDate">
            <Form.Label>closing date for acquisition</Form.Label>
            <Form.Control
              value={formdata.ClosingDate}
              onChange={handleChange}
              name="ClosingDate"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridAcquisitionCosts">
            <Form.Label>Acquisition costs</Form.Label>
            <Form.Control
              value={formdata.AcquisitionCost}
              onChange={handleChange}
              name="AcquisitionCost"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAdditionalCosts">
            <Form.Label>Additional Costs</Form.Label>
            <Form.Control
              value={formdata.AdditionalCosts}
              onChange={handleChange}
              name="AdditionalCosts"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEstimatedSalePrice">
            <Form.Label>Estimated Sale Price</Form.Label>
            <Form.Control
              value={formdata.SalePrice}
              onChange={handleChange}
              name="SalePrice"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridLinkSoldComps">
            <Form.Label>Link Sold Comps</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formdata.SoldComps}
              onChange={handleChange}
              name="SoldComps"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLinkSaleComps">
            <Form.Label>Link Sale Comps</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formdata.SaleComps}
              onChange={handleChange}
              name="SaleComps"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridEstimatedClosingCosts">
            <Form.Label>Estimated Closing Costs</Form.Label>
            <Form.Control
              value={formdata.ClosingCost}
              onChange={handleChange}
              name="ClosingCost"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEstimatedProfit">
            <Form.Label>Estimated Total Profit</Form.Label>
            <Form.Control
              value={formdata.Profit}
              onChange={handleChange}
              name="Profit"
              required
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridRealtorName">
            <Form.Label>Realtor Name</Form.Label>
            <Form.Control
              value={formdata.RealtorName}
              onChange={handleChange}
              name="RealtorName"
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRealtorContactDetails">
            <Form.Label>Realtor Contact Details</Form.Label>
            <Form.Control
              value={formdata.RealtorContact}
              onChange={handleChange}
              name="RealtorContact"
              required
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridZoning">
            <Form.Label>Zoning</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={formdata.Zoning}
              onChange={handleChange}
              name="Zoning"
              required
            >
              <option>Choose..</option>
              <option>Residential</option>
              <option>Recreational</option>
              <option>Industrial</option>
              <option>Commercial</option>
              <option>Agricultural</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridBuildable">
            <Form.Label>Is the Property Buildable</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={formdata.Buildable}
              onChange={handleChange}
              name="Buildable"
              required
            >
              <option>Choose..</option>
              <option>Yes</option>
              <option>No</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLandTopography">
            <Form.Label>land Topography</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              value={formdata.Topography}
              onChange={handleChange}
              name="Topography"
              required
            >
              <option>Choose..</option>
              <option>Flat</option>
              <option>Gently Sloped</option>
              <option>Step Slope</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridLotSize">
          <Form.Label>Lot Size</Form.Label>
          <Form.Control
            value={formdata.LotSize}
            onChange={handleChange}
            name="LotSize"
            required
          />
        </Form.Group>
        <Row>
          <Form.Group controlId="formGridElectric">
            <Form.Label>Is Electric on the lot?</Form.Label>
            <Form.Control
              value={formdata.Electric}
              onChange={handleChange}
              name="Electric"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridWater">
            <Form.Label>Is Water on the lot?</Form.Label>
            <Form.Control
              value={formdata.Water}
              onChange={handleChange}
              name="Water"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridSewer">
            <Form.Label>Is waste water sewer or spetic?</Form.Label>
            <Form.Control
              value={formdata.Sewer}
              onChange={handleChange}
              name="Sewer"
              required
            />
          </Form.Group>
        </Row>
        <Form.Group controlId="formGridAccess">
          <Form.Label>
            Does the property have legal and physical access?
          </Form.Label>
          <Form.Select
            name="Access"
            value={formdata.Access}
            onChange={handleChange}
            required
          >
            <option>Choose..</option>
            <option>Legal&nbsp;access</option>
            <option>Physical&nbsp;access</option>
            <option>Both</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSaleTimeline">
          <Form.Label>Estimated Sale Timeline</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={formdata.SaleTimeline}
            onChange={handleChange}
            name="SaleTimeline"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!validated}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FieldsForm;
