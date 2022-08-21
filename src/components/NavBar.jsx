import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ setActiveNav }) => {
  const navs = [
    {
      text: "بيانات اوليه",
      navRoute: "initialdata",
      items: [
        {
          text: "بيانات الشركة",
          route: "company",
        },
        {
          text: "النطاقات الرئيسية",
          route: "zones",
        },
        {
          text: "المناطق",
          route: "areas",
        },
        {
          text: "المندوبين",
          route: "couriers",
        },
        {
          text: "العملاء",
          route: "customers",
        },
        {
          text: "حالات البوالص",
          route: "status",
        },
      ],
    },
    
    {
      text: "اسعار الشحن",
      navRoute: "prices",
      items: [
        {
          text: "اسعار الشحن الافتراضية",
          route: "defaultprices",
        },
        {
          text: "اسعار الشحن العملاء",
          route: "customerprices",
        },
      ],
    },
    {
      text: "ادوات البيك اب",
      navRoute: "pickup",
      items: [
        {
          text: "اضافة اذن بيك اب جديد",
          route: "pickupdata",
        },
        {
          text: "مراجعة جميع اذونات البيك اب",
          route: "pickuplist",
        },
        {
          text: "طلبات الشحن المرسلة اون لاين",
          route: "customersrequests",
        },
        {
          text: "مصروفات العملاء من الفلايرز",
          route: "customersflyers",
        },
        {
          text: "ارصدة العملاء من الفلايرز",
          route: "flyersbalances",
        },
      ],
    },
    {
      text: "بوالص الشحن",
      navRoute: "shippments",
      items: [
        {
          text: "اضافة بوليصة شحن جديدة",
          route: "shippments/add",
        },
        {
          text: "مراجعة بوالص الشحن",
          route: "shippments",
        },
        {
          text: "استيراد بوالص الشحن من ملف اكسل",
          route: "shippments/import",
        },
        {
          text: "تحديث حالات بوالص الشحن بارقام متعددة",
          route: "shippments/multi",
        },
        {
          text: "حذف سجل حركات بوليصة",
          route: "shippmentstatus",
        },
      ],
    },
    {
      text: "شيتات العمل اليومية",
      navRoute: "sheets",
      items: [
        {
          text: "اضافة شيت تسليم جديد",
          route: "sheets/delivery/add",
        },
        {
          text: "شيتات تسليم اوردارات",
          route: "sheets/delivery",
        },
        {
          text: "اضافة شيت مرتجع جديد",
          route: "sheets/return/add",
        },
        {
          text: "شيتات تسليم مرتجع",
          route: "sheets/return",
        },
        {
          text: "عودة مندوب وتحديث حالات البوالص",
          route: "returnstatusupdate",
        },
        {
          text: "شيتات لم يتم تحديثها",
          route: "pendingsheets",
        },
        {
          text: "مراجعة بوالص الشحن للمندوبين",
          route: "courierstatusupdate",
        },
        {
          text: "تسوية حسابات شيتات عمل المندوبين",
          route: "mandoobtaswia",
        },
      ],
    },
    {
      text: "الحسابات",
      navRoute: "accounting",
      items: [
        {
          text: "تحصيل مبالغ بوالص الشحن فى شيت معين",
          route: "sheets/collections",
        },
        {
          text: "تحديث حالات بوالص الشحن بارقام متعددة(حسابات)",
          route: "accounting/multi",
        },
        {
          text: "اضافه فاتورة جديدة",
          route: "accounting/add",
        },
        {
          text: "فواتير العملاء",
          route: "accounting/invoices",
        },
      ],
    },
    {
      text: "خدمة العملاء",
      navRoute: "customerservices",
      items: [
        {
          text: "البحث",
          route: "customerservices/search",
        },
        {
          text: "مراجعة حالات بوليصة ",
          route: "tracking",
        },
        {
          text: "انواع الشكاوى",
          route: "customerservices/compltypes",
        },
        {
          text: "جهات الشكاوى",
          route: "customerservices/complgeha",
        },
        {
          text: "اضافة شكوى/اقتراح جديد",
          route: "customerservices/complaint/add",
        },
        {
          text: "الشكاوى",
          route: "customerservices/complaint/",
        },
        {
          text: "ارشيف الشكاوى",
          route: "customerservices/complaint/archive",
        },
      ],
    },
    {
      text: "تقارير",
      navRoute: "frmreports",
      items: [
        {
          text: "قائمة العملاء",
          route: "frmreports/RptCustomers",
        },
        {
          text: "بوالص الشحن خلال فترة معينة",
          route: "frmreports/shipmentsduringperiod",
        },
        {
          text: "طباعة شيت يومى لمندوب",
          route: "frmreports/courierssheets",
        },
        {
          text: "ارصدة العملاء المستحقة",
          route: "frmreports/clientsreserved",
        },
        {
          text: "تقارير المدفوعات للعملاء",
          route: "frmreports/clientsbills",
        },
        {
          text: "بيان بالمصروفات خلال فترة معينة",
          route: "frmreports/feesduringperiod",
        },
        {
          text: "القيود اليومية خلال فترة",
          route: "frmreports/sagelsrpt",
        },
        {
          text: "كشف حركة حساب خلال فترة",
          route: "frmreports/statementsrpt",
        },
        {
          text: "حساب الاستاذ العام",
          route: "frmreports/generalledeger",
        },
        {
          text: "ارصدة الحسابات",
          route: "frmreports/accountsbalances",
        },
        {
          text: "ميزان المراجعة",
          route: "frmreports/myzan",
        },
        {
          text: "الميزانية العمومية",
          route: "frmreports/myzania",
        },
        {
          text: "قائمة الدخل",
          route: "frmreports/income",
        },
      ],
    },
    {
      text: "احصائيات",
      navRoute: "frmreports",
      items: [
        {
          text: "احصائيات عامة",
          route: "statistics",
        },
        {
          text: "احصائيات طلبات الشحن خلال فترة",
          route: "pickup/requeststat",
        },
        {
          text: "احصائيات بوالص الشحن خلال فترة",
          route: "shipments/shipmentsstat",
        },
        {
          text: "احصائيات عدد بوالص الشحن حسب الحالة",
          route: "operations",
        },
        {
          text: "احصائيات بوالص الشحن للعملاء",
          route: "frmreports/zonesstat",
        },
        {
          text: "احصائيات عدد البوالص لمدخلين البيانات",
          route: "frmreports/entryrpt",
        },
        {
          text: "احصائيات الحالات فى الفروع",
          route: "frmreports/branchsstat",
        },
      ],
    },
    {
      text: "اعدادات",
      navRoute: "Admin",
      items: [
        {
          text: "مجموعات المستخدمين",
          route: "Admin/URoles",
        },
        {
          text: "اضافة اسم مستخدم جديد",
          route: "Admin/CreateUser",
        },
        {
          text: "المستخدمين",
          route: "Admin/Users",
        },
        {
          text: "صلاحيات الظهور",
          route: "Admin/pagesForRole",
        },
        {
          text: "صلاحيات الاضافة والتعديل و الحذف",
          route: "Admin/Userpages",
        },
        {
          text: "logs",
          route: "masroufat",
        },
      ],
    }
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky='top' collapseOnSelect={true}>
      <Container className="" fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 " />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="">
            {navs.map((nav, index) => (
              <NavDropdown
              className='text-light mx-1'
              key={index}
                renderMenuOnMount={true}
                title={nav.text}
                id="basic-nav-dropdown"
              >
                {nav.items.map((item, index) => (
                  <Link to={`/${item.route}`}>
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
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
