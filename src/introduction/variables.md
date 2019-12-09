## Description

The design system exposes a list of CSS variables which allow you to directly access color settings inside your react app.

Access from CSS or styled components with `var(--variable-name)`


### Getting a variable’s value
```
window
  .getComputedStyle(document.documentElement)
  .getPropertyValue("--olt-primaryColor");

```

### Setting a variable’s value

```html noeditor
document
  .documentElement.style.setProperty("--olt-primaryColor", "black");
```

### Available Variables

```html noeditor
--olt-primaryColor: #f60;
--olt-primaryColor-white-10: #fff0e6;
--olt-primaryColor-white-15: #ffe8d9;
--olt-primaryColor-white-20: #ffe0cc;
--olt-primaryColor-white-30: #ffd1b3;
--olt-primaryColor-white-40: #ffc299;
--olt-primaryColor-white-50: #ffb380;
--olt-primaryColor-white-60: #ffa366;
--olt-primaryColor-white-70: #ff944d;
--olt-primaryColor-white-80: #ff8533;
--olt-primaryColor-black-10: #1a0a00;
--olt-primaryColor-black-15: #260f00;
--olt-primaryColor-black-20: #331400;
--olt-primaryColor-black-30: #4d1f00;
--olt-primaryColor-black-40: #662900;
--olt-primaryColor-black-50: #803300;
--olt-primaryColor-black-60: #993d00;
--olt-primaryColor-black-70: #b34700;
--olt-primaryColor-black-80: #cc5200;
--olt-primaryColor-secondary-30: #562b1f;
--olt-primaryColor-secondary-40: #6e341a;
--olt-primaryColor-secondary-80: #cf5509;
--olt-sidebarColor: #0d122c;
--olt-readonly-secondaryColor: #0d122c;
--olt-readonly-errorColor: #fd5952;
--olt-readonly-successColor: #02bf1b;
--olt-readonly-infoColor: #46b4cd;
--olt-readonly-warningColor: #ffc94d;
--olt-readonly-lightColor: #fff;
--olt-readonly-darkColor: #000;
--olt-readonly-gray100Color: #f5f6f8;
--olt-readonly-gray200Color: #e9ecef;
--olt-readonly-gray300Color: #e3e4e5;
--olt-readonly-gray400Color: #d0d1d3;
--olt-readonly-gray500Color: #a7a8aa;
--olt-readonly-gray600Color: #58585a;
--olt-readonly-gray700Color: #343a40;
--olt-readonly-gray800Color: #2e3338;
--olt-readonly-gray900Color: #212529;
```