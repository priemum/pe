import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClientNavBar = ({ setActiveNav }) => {
  const navs = [
    {
        text: "الرئيسية",
        route: "/",
      },
      {
        text: "اسعار الشحن",
        route: "pricelist",
      },
    {
      text: "طلبات مندوبين البيك اب",
      navRoute: "initialdata",
      items: [
        {
          text: "طلب مندوب بيك اب",
          route: "pickupdata",
        },
        {
          text: "طلبات مندوبين البيك اب",
          route: "pickuplist",
        },
      ],
    },
    {
        text: "طلب شحن جديد",
        route: "newshipment",
      },
      {
        text: "استيراد من ملف اكسل",
        route: "importexel",
      },
    {
      text: "بوالص الشحن",
      navRoute: "prices",
      items: [
        {
          text: "بحث عن بوليصة شحن",
          route: "shippmentsearch",
        },
        {
          text: "بوالص الشحن المفتوحة",
          route: "shippmentsopen",
        },
        {
          text: "بوالص الشحن حسب الحالة",
          route: "shippmentbystatus",
        },
        {
          text: "جميع بوالص الشحن",
          route: "shippments",
        },
      ],
    },
    {
      text: "مستحقات العميل",
      route: "clientsreserve",
    },
    {
      text: "تقارير",
      navRoute: "report",
      items: [
        {
          text: "بوالص شحن تم تحديث حالاتها في اخر 48 ساعة",
          route: "report1",
        },
        {
          text: "احصائيات باعداد بوالص الشحن المرسلة خلال فترة",
          route: "report2",
        },
        {
          text: "احصائيات باعداد بوالص الشحن حسب الحالة",
          route: "report3",
        },
        {
          text: "احصائيات باعداد بوالص الشحن حسب النطاق",
          route: "report4",
        },
        {
          text: "المدفوعات",
          route: "myinvoces",
        },
      ],
    },
    {
      text: "راسلنا",
      navRoute: "contactus",
      items: [
        {
          text: "استفسار",
          route: "type1",
        },
        {
          text: "اقتراح",
          route: "type2",
        },
        {
          text: "شكوي",
          route: "type3",
        },
      ],
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky='top' collapseOnSelect={true}>
      <Container className="" fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 " />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="">
            {navs.map((nav, index) => {
              if(nav.items) return <NavDropdown
              style={{whiteSpace: 'pre', margin: '0 15px'}}
              key={index}
                renderMenuOnMount={true}
                title={nav.text}
                id="basic-nav-dropdown"
              >
                {nav.items.map((item, index) => (
                  <Link to={`/api/${item.route}`}>
                  <NavDropdown.Item
                    key={index}
                    onClick={() => setActiveNav(item.text)}
                    href="#action/3.1"
                  >
                    {item.text}
                  </NavDropdown.Item>
                  </Link>
                ))}
              </NavDropdown>
        return <Link  to={`/api/${nav.route}`}><Nav.Link style={{whiteSpace: 'pre', margin: '0 15px'}}>{nav.text}</Nav.Link></Link>  
})}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ClientNavBar;
