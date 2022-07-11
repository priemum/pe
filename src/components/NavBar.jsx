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
      text: "الفروع",
      navRoute: "initialdata",
      items: [
        {
          text: "الفروع",
          route: "branchs",
        },
        {
          text: "الشيتات المرسلة الي الفروع",
          route: "transfer",
        },
        {
          text: "الشيتات المستلمة من الفروع",
          route: "transferfrom",
        },
        {
          text: "توريد واعادة الشحنات الي الفرع",
          route: "branchreturn",
        },
      ],
    },
    {
      text: "اسعار الشحن",
      navRoute: "initialdata",
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
      navRoute: "initialdata",
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
      navRoute: "initialdata",
      items: [
        {
          text: "اضافة بوليصة شحن جديدة",
          route: "shipments/add",
        },
        {
          text: "مراجعة بوالص الشحن",
          route: "shipments",
        },
        {
          text: "استيراد بوالص الشحن من ملف اكسل",
          route: "shipments/import",
        },
        {
          text: "تحديث حالات بوالص الشحن بارقام متعددة",
          route: "shipments/multi",
        },
        {
          text: "حذف سجل حركات بوليصة",
          route: "shipmentstatus",
        },
      ],
    },
    {
      text: "شيتات العمل اليومية",
      navRoute: "initialdata",
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
      navRoute: "initialdata",
      items: [
        {
          text: "تحصيل مبالغ بوالص الشحن فى شيت معين",
          route: "company",
        },
        {
          text: "تحديث حالات بوالص الشحن بارقام متعددة(حسابات)",
          route: "multi",
        },
        {
          text: "اضافه فاتورة جديدة",
          route: "invoicedata",
        },
        {
          text: "فواتير العملاء",
          route: "invoices",
        },
      ],
    },
    {
      text: "خدمة العملاء",
      navRoute: "initialdata",
      items: [
        {
          text: "البحث",
          route: "shipmentdata",
        },
        {
          text: "مراجعة حالات بوليصة الشحن",
          route: "shipments",
        },
        {
          text: "انواع الشكاوى",
          route: "import",
        },
        {
          text: "جهات الشكاوى",
          route: "multi",
        },
        {
          text: "اضافة شكوى/اقتراح جديد",
          route: "shipmentstatus",
        },
        {
          text: "الشكاوى",
          route: "shipmentstatus",
        },
        {
          text: "ارشيف الشكاوى",
          route: "shipmentstatus",
        },
      ],
    },
    {
      text: "تقارير",
      navRoute: "initialdata",
      items: [
        {
          text: "بوالص الشحن خلال فترة معينة",
          route: "company",
        },
        {
          text: "طباعة شيت يومى لمندوب",
          route: "multi",
        },
        {
          text: "ارصدة العملاء المستحقة",
          route: "invoicedata",
        },
        {
          text: "تقارير المدفوعات للعملاء",
          route: "invoices",
        },
        {
          text: "بيان بالمصروفات خلال فترة معينة",
          route: "financialyear",
        },
        {
          text: "القيود اليومية خلال فترة",
          route: "masroufat",
        },
        {
          text: "كشف حركة حساب خلال فترة",
          route: "acctree",
        },
        {
          text: "حساب الاستاذ العام",
          route: "segals",
        },
        {
          text: "ارصدة الحسابات",
          route: "safeoutData",
        },
        {
          text: "ميزان المراجعة",
          route: "safeout",
        },
        {
          text: "الميزانية العمومية",
          route: "safeinData",
        },
        {
          text: "قائمة الدخل",
          route: "safein",
        },
      ],
    },
    {
      text: "احصائيات",
      navRoute: "initialdata",
      items: [
        {
          text: "احصائيات عامة",
          route: "company",
        },
        {
          text: "احصائيات طلبات الشحن خلال فترة",
          route: "multi",
        },
        {
          text: "احصائيات بوالص الشحن خلال فترة",
          route: "invoicedata",
        },
        {
          text: "احصائيات عدد بوالص الشحن حسب الحالة",
          route: "invoices",
        },
        {
          text: "احصائيات بوالص الشحن للعملاء",
          route: "financialyear",
        },
        {
          text: "احصائيات عدد البوالص لمدخلين البيانات",
          route: "masroufat",
        },
        {
          text: "احصائيات الحالات فى الفروع",
          route: "acctree",
        },
      ],
    },
    {
      text: "اعدادات",
      navRoute: "initialdata",
      items: [
        {
          text: "مجموعات المستخدمين",
          route: "company",
        },
        {
          text: "اضافة اسم مستخدم جديد",
          route: "multi",
        },
        {
          text: "المستخدمين",
          route: "invoicedata",
        },
        {
          text: "صلاحيات الظهور",
          route: "invoices",
        },
        {
          text: "صلاحيات الاضافة والتعديل و الحذف",
          route: "financialyear",
        },
        {
          text: "logs",
          route: "masroufat",
        },
      ],
    },
    {
      text: "اقسام البرنامج",
      navRoute: "initialdata",
      items: [
        {
          text: "اقسام البرنامج",
          route: "company",
        },
        {
          text: "الصفحات",
          route: "multi",
        },
      ],
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky='top' collapseOnSelect={true}>
      <Container className="flex-row-reverse" fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 " />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto flex-lg-row-reverse">
            {navs.map((nav, index) => (
              <NavDropdown
              className='text-light'
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
