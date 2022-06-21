import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({setActiveNav}) => {
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
          }
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
  ];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navs.map((nav) => (
              <NavDropdown
                onMouseOver={(e) => {
                  if (window.innerWidth >= 992) {
                    const dropdown = e.target.offsetParent,
                      dropdownMenu = e.target.offsetParent.children[1],
                      dropdownLink = document.querySelector(
                        ".dropdown-toggle.nav-link"
                      );

                    dropdown.classList.add("show");
                    dropdownMenu && dropdownMenu.classList.add("show");
                  }
                }}
                onMouseLeave={(e) => {
                  const dropdown = e.target.offsetParent,
                    dropdownMenu = e.target.offsetParent.children[1],
                    dropdownLink = document.querySelector(
                      ".dropdown-toggle.nav-link"
                    );
                  dropdown.classList.remove("show");
                  dropdownMenu.classList.remove("show");
                }}
                title={nav.text}
                id="basic-nav-dropdown"
              >
                {nav.items.map((item) => (
                  <NavDropdown.Item onClick={() => setActiveNav(item.text)} href="#action/3.1">
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
