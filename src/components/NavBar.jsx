import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

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
          text: "اضافة مندوب جديد",
          route: "courierdata",
        },
        {
          text: "المندوبين",
          route: "couriers",
        },
        {
          text: "اضافة عميل جديد",
          route: "customerdata",
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
          route: "defultprices",
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
          route: "customersrequsts",
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
          route: "shipmentdata",
        },
        {
          text: "مراجعة بوالص الشحن",
          route: "shipments",
        },
        {
          text: "استيراد بوالص الشحن من ملف اكسل",
          route: "import",
        },
        {
          text: "تحديث حالات بوالص الشحن بارقام متعددة",
          route: "multi",
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
          route: "company",
        },
        {
          text: "شيتات تسليم اوردارات",
          route: "zones",
        },
        {
          text: "اضافة شيت مرتجع جديد",
          route: "areas",
        },
        {
          text: "شيتات تسليم مرتجع",
          route: "courierdata",
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
        {
          text: "تعريف السنة المالية",
          route: "financialyear",
        },
        {
          text: "انواع المصروفات",
          route: "masroufat",
        },
        {
          text: "شجرة الحسابات",
          route: "acctree",
        },
        {
          text: "القيود اليومية",
          route: "segals",
        },
        {
          text: "اضافة اذن صرف جديد",
          route: "safeoutData",
        },
        {
          text: "اذونات الصرف من الخزينة",
          route: "safeout",
        },
        {
          text: "اضافة اذن توريد جديد",
          route: "safeinData",
        },
        {
          text: "اذونات التوريد للخزينة",
          route: "safein",
        },
        {
          text: "اغلاق السنة المالية",
          route: "closeyear",
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
  const [show, setShow] = useState({});
  const showDropdown = (e)=>{
    if(window.innerWidth > 992){
    setShow({[e.target.text]: true});
    console.log(show);
    }
}
const hideDropdown = e => {
  setShow({});
}
  // useEffect(() => {
  //   console.log(document.querySelector('.dropmenu'))
  // },[])
  // const showDropdown = (e) => {
  //   const dropdown = e.target.offsetParent,
  //     dropdownMenu = e.target.offsetParent.children[1],
  //     dropdownLink = document.querySelector(
  //       ".dropdown-toggle.nav-link"
  //     );
  //   if (window.innerWidth >= 992) {
      
  //     dropdown.classList.add("show");
  //     dropdownMenu.classList.add("show");
  //   }
  // }
  // const hideDropdown = (e) => {
  //   const dropdown = e.target.offsetParent,
  //   dropdownMenu = e.target.offsetParent.children[1],
  //   dropdownLink = document.querySelector(
  //     ".dropdown-toggle.nav-link"
  //   );
  //   if (window.innerWidth >= 992) {
  //   dropdown.classList.remove("show");
  //   dropdownMenu.classList.remove("show");
  // }}

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="flex-row-reverse" fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-lg-row-reverse">
            {navs.map((nav, index) => (
              <NavDropdown
              key={index}
                show={show[`${nav.text}`]}
   onMouseOver={showDropdown} 
   onMouseLeave={hideDropdown}
                renderMenuOnMount={true}
                title={nav.text}
                id="basic-nav-dropdown"
              >
                {nav.items.map((item, index) => (
                  <NavDropdown.Item
                    className="bg-dark text-light"
                    key={index}

   onMouseOver={showDropdown} 
   onMouseLeave={hideDropdown}
                    onClick={() => setActiveNav(item.text)}
                    href="#action/3.1"
                  >
                    {item.text}
                  </NavDropdown.Item>
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
