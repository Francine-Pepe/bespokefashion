import React from "react"
import { useState } from "react"
import "./ReturnPolicy.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from "react-bootstrap/Modal"
import Logo from "../Images/BF_Logo.png"

function ReturnPolicy() {
  const [lgShow, setLgShow] = useState(false)

  return (
    <>
      <h2 onClick={() => setLgShow(true)}>Return Policy</h2>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className="RP-header" closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="RP-title"
          >
            <h2>Alterations & Return Policy</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="RP-text">
          <h5>
            DRESS SHIRT, CASUAL PANT & TAILORED CLOTHING COMPLIMENTARY
            ALTERATIONS AND REMAKES
          </h5>
          <p>
            Custom clothing can be tricky, and getting everything perfect on
            your first try doesn’t always happen. Don’t worry though, we’re
            committed to doing what we can to help you get the perfect fit. If
            you don’t 100% love how your shirt or tailored clothing fits, we’re
            more than happy to provide a complimentary alteration or remake. We
            excel at making alterations and remakes quick and hasslefree.
          </p>
          <h5>COMPLIMENTARY ALTERATION AND REMAKE TERMS</h5>
          <ul>
            <li>
              Alteration and remake requests must be initiated within 30 days of
              when you receive your order.
            </li>
            <li>
              After a remake or alteration request has been submitted please
              expect around two weeks for an updated shirt to be delivered, and
              4-6 weeks for tailored clothing.
            </li>
            <li>
              In order to request an alteration or remake, you must return your
              original garment to the Bespoke Fashion.
            </li>
            <li>
              Each customer is entitled to up to two complimentary remakes for
              shirts, two complimentary remakes for casual pants, and two
              complimentary remakes for tailored clothing. One is usually
              enough, but you get two. Just in case.
            </li>
            <li>
              For EU customers, all custom clothing orders will arrive with a
              complimentary return shipping label included in the packaging.
            </li>
            <li>
              For customers in US, Canada and Australia, please contact us to
              request a complimentary return shipping label.
            </li>
            <li>
              Alterations and remakes are subject to fabric stock and
              availability. If a fabric is no longer in stock, an alternative of
              equal or lesser value may be selected.
            </li>
            <li>
              If your body changes significantly after receiving your garment,
              we’re more than happy to help update your saved size. However,
              beyond your two complimentary remakes, Bespoke Fashion is not
              responsible for remaking shirts and tailored clothing to fit your
              changing body size.
            </li>
            <li>
              Receiving a complimentary remake on a shirt, casual pant, or piece
              of tailored clothing does not disqualify you from a full refund.
              You’ll just need to return both the original and the remade
              version of the garment to us to receive a refund.
            </li>
            <li>
              For tailored clothing only, in order to request reimbursement for
              local tailoring expenses, a photo of the receipt must be
              furnished.
              <br />
              - Up to 120€ can be reimbursed for a suit (jacket and pant pair)
              <br />- Up to 70€ can be reimbursed for a tailored jacket and
              dresses <br />- Up to 50€ can be reimbursed for a tailored pant
              and jumpsuits
            </li>
          </ul>
          <br />

          <h2>Return & Exchange Policy</h2>
          <br />
          <p>
            If you’re not 100% satisfied with your order, you may return it for
            a full refund (within 30 days).
          </p>
          <h5>RETURN & EXCHANGE POLICY TERMS</h5>
          <ul>
            <li>
              Shirts or other products must be returned within 30 days of when
              they were purchased to qualify for a full refund.
            </li>
            <li>
              Shirts or other products must be returned within 50 days of when
              they were purchased to qualify for store credit.
            </li>
            <li>
              We’re happy to accept returns of shirts and casual pants that have
              been laundered once. We often encourage customers to launder their
              garment so that they can better evaluate the fit after shrinkage.
              However, shirts and casual pants that have been laundered more
              than once or that show signs of repeated use will not be accepted
              as returns.
            </li>
            <li>
              Any other (non-custom) products must be unworn, unwashed and
              unaltered in order to be returned for a refund or store credit.
            </li>
            <li>Refunds can only be issued to the original payment method.</li>
            <li>
              Processing time for refunds, store credit, and exchanges is 3-7
              business days.
            </li>
            <li>
              Bespoke Fashion is not liable for returns that are lost in
              transit. Customers should keep record of tracking information to
              minimize confusion.
            </li>
            <li>
              Exchanges and remakes are all subject to stock and fabric
              availability.
            </li>
            <li>
              For products, EU-based orders will arrive with a complimentary
              return shipping label included in the packaging.
            </li>
            <li>
              For products, customers outside of the EU are responsible for
              return shipping costs to Bespoke Fashionin.
            </li>
            <li>
              Our return policy is not a warranty. Shirts or products with
              extensive wear may not be accepted as returns.
            </li>
            <li>
              Customers deemed to be abusing our return policy may be restricted
              from making additional purchases. Bespoke Fashion reserves the
              right to refuse to do business with any customer for any reason.
            </li>
          </ul>
          <br />
          <h5>SPECIAL NOTES FOR CUSTOMERS OUTSIDE THE EU, CANADA & US</h5>
          <ul>
            <li>
              The following terms specifically apply to customers in the
              following countries: Argentina, Australia, Brazil, China, Hong
              Kong, Japan, New Zealand, Norway, Philippines, Singapore,
              Switzerland, and Taiwan.
            </li>
            <li>
              Customers are responsible for any incurred customs duties, fees or
              taxes. These fees are non-refundable.
            </li>
            <li>
              Complimentary outbound shipping is provided for items returned for
              exchange and alterations for customers located outside of the EU,
              Canada and US, however, the customer is still responsible for any
              incurred customs fees or taxes.
            </li>
          </ul>
          <div className="RP-logo">
            <img src={Logo} alt="Icon Logo" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ReturnPolicy
