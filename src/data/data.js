const products = [
    {
      id: 1,
      name: "AP515 - Analogue Radio",
      description: "The AP515 series business radio is the perfect choice for instant communication. With a 3W speaker, the compact and light AP5 series can deliver loud and clear audio that allows you to hear and be heard in background noise.",
      price: 19.99,
      imageURL: "https://hytera-europe.com/imager/images/534817/EN_AP32X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
    },
    {
      id: 2,
      name: "BD305LF - Licence-free robust digital business radio",
      description: "A lightweight design in a compact yet rugged exterior, providing clear voice communication and high performance makes the BD305LF the ideal two-way radio for everyday business communication. \nFor pricing and availability, use the link below to find and contact us.",
      price: 29.99,
      imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
    },
    {
        id: 3,
        name: "BD505 - Business Digital Radio",
        description: "Hytera's BD505 two-way radio is the compact device that provides a professional communication in easy to operate way.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/530556/BD505_470x600_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 4,
        name: "BD505LF - Licence-free DMR Handheld Radio (PMR446)",
        description: "A lightweight design in a compact yet rugged exterior, providing clear voice communication and high performance makes the BD505LF the ideal licence-free DMR radio for everyday business communication.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
      },
      {
        id: 5,
        name: "BD555 - Business Digital Radio",
        description: "Hytera's BD555 two-way radio is the compact device that provides a professional communication in easy to operate way.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/534817/EN_AP32X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 6,
        name: "BP515",
        description: "Supports both digital and analogue modes, compatible with your existing digital and analogue systems and terminals. Powerful digital features like priority interrupt, basic encryption, text messaging, roaming will enhance your business service. The BP5 series has extended range in class and features 64/128 channels, making group communication more flexible.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
      },
      {
        id: 7,
        name: "BP565 - DMR and Analogue Radio",
        description: "Supports both digital and analogue modes, compatible with your existing digital and analogue systems and terminals. Powerful digital features like priority interrupt, basic encryption, text messaging, roaming will enhance your business service. The BP5 series has extended range in class and features 64/128 channels, making group communication more flexible.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/534703/EN_BP36X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 8,
        name: "HP605",
        description: "Small and light in style, the HP605 delivers class-leading audio performance and extended coverage together with a Lithium Polymer battery, ability to operate in extreme environments and supports abundant features. It is an easy to-use tool for customer-facing staff, enabling them to focus on their daily tasks and improve efficiency.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/592170/HP60X_1500x1500_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 9,
        name: "HP685",
        description: "Small and light in style, the HP685 delivers class-leading audio performance and extended coverage together with a Lithium Polymer battery, ability to operate in extreme environments and supports abundant features. It is an easy to-use tool for customer-facing staff, enabling them to focus on their daily tasks and improve efficiency.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/534817/EN_AP32X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 9,
        name: "HP705",
        description: "The HP705 represents the future on style and functions that refreshes the standards in digital radios, providing more efficient and more reliable communication with loud and clear audio, powerful battery, remarkable portability and ruggedness for ease of use across multiple environments and industries.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
      },
      {
        id: 10,
        name: "HP785",
        description: "The HP785 represents the future on style and functions that refreshes the standards in digital radios, providing more efficient and more reliable communication with loud and clear audio, powerful battery, remarkable portability and ruggedness for ease of use across multiple environments and industries.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/210867/HP78x.43_02-small_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 11,
        name: "HP78X",
        description: "The HP78X represents the future on style and functions that refreshes the standards in digital radios, providing more efficient and more reliable communication with loud and clear audio, powerful battery, remarkable portability and ruggedness for ease of use across multiple environments and industries.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/210867/HP78x.43_02-small_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 12,
        name: "P30 - PoC Radio",
        description: "Hytera P30 is a push-to-talk over cellular (PoC) radio providing instant voice communications over the 2G, 3G or LTE network for those engaging in security, property management, utilities, logistics, and more. The radio promotes efficient collaboration in daily works from low latency to always-stable signal, from multiple standby groups to quick group creation.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/901497/en_p30_main_5472332afa344033d2bf9e7b6b9d883e.png",
      },
      {
        id: 13,
        name: "PD355LF - Licence-free digital two-way radio",
        description: "Pocket-sized and licence-free, the Hytera PD355LF handheld digital two-way radio delivers a range of sought after features in a small form factor, ideal for discreet use in retail, hospitality or education environments.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
      },
      {
        id: 14,
        name: "PD365 - Compact digital two-way radio",
        description: "Pocket-sized, the Hytera PD365 handheld digital two-way radio delivers a range of sought after features in a small form factor, ideal for discreet use in retail, hospitality or education environments.",
        price: 19.99,
        imageURL: "https://hytera-europe.com/imager/images/534817/EN_AP32X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
      },
      {
        id: 15,
        name: "PD365LF - Compact, licence free digital two-way radio",
        description: "Pocket-sized and licence free, the Hytera PD365LF handheld digital two-way radio delivers a range of sought after features in a small form factor, ideal for discreet use in retail, hospitality or education environments.",
        price: 29.99,
        imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
      },
      {
          id: 16,
          name: "PD415 - Conventional digital two-way radio with integrated RFID reader.",
          description: "Robust and reliable, the Hytera PD415 handheld digital two-way radio offers a simple communication solution with in-built RFID reader. When used with Hytera Patrol System and tags (optional), the PD415 delivers an ideal asset tracking solution for users in the security or service industries.",
          price: 19.99,
          imageURL: "https://hytera-europe.com/imager/images/530556/BD505_470x600_7c3bb7433ca337bb1e85cb38e974272e.png",
        },
        {
          id: 17,
          name: "PD485 - Conventional digital two-way radio with GPS and Bluetooth option.",
          description: "Robust and reliable, the Hytera PD485 handheld digital two-way radio offers a simple communication solution with OLED screen, programmable keys and emergency button, ideal for users operating in manufacturing, facilities management or education environments.",
          price: 29.99,
          imageURL: "https://hytera-europe.com/imager/images/11585/Hytera_BD305LF_92561d1e46b6df9e529a0abd81fe8b9c.png",
        },
        {
          id: 18,
          name: "PD505 - Lightweight, robust digital two-way radio",
          description: "Packed with functionality, the Hytera PD505 handheld digital two-way radio impresses with its safety features and flexibility to support for both digital and analogue communications, ideal for manufacturing, events and hospitality environments.",
          price: 19.99,
          imageURL: "https://hytera-europe.com/imager/images/534817/EN_AP32X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
        },
        {
          id: 19,
          name: "PD505 UL913",
          description: "Intrinsically Safe non-display digital portable radio",
          price: 29.99,
          imageURL: "https://hytera-europe.com/imager/images/1765/Hytera_PD505_01_5472332afa344033d2bf9e7b6b9d883e.png",
        },
        {
          id: 20,
          name: "PD505LF - Licence-free digital two-way radio",
          description: "Packed with functionality and licence-free, the Hytera PD505LF handheld digital two-way radio impresses with its safety features and flexibility to support for both digital and analogue communications, ideal for manufacturing, events and hospitality environments.",
          price: 19.99,
          imageURL: "https://hytera-europe.com/imager/images/534703/EN_BP36X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
        },
        {
          id: 21,
          name: "PD565 - Lightweight, robust digital two-way radio",
          description: "Packed with functionality, the Hytera PD565 handheld digital two-way radio impresses with its safety features and flexibility to support for both digital and analogue communications, ideal for manufacturing, events and hospitality environments.",
          price: 29.99,
          imageURL: "https://hytera-europe.com/imager/images/592170/HP60X_1500x1500_7c3bb7433ca337bb1e85cb38e974272e.png",
        },
        {
          id: 22,
          name: "PD605 - Slim, professional, digital two-way radio",
          description: "Delivering superior voice clarity and enhanced encryption, the Hytera PD605 handheld digital two-way radio is a compact, high quality device. At just 27mm thick and 290g, this radio is a popular choice and ideal for long shifts.",
          price: 19.99,
          imageURL: "https://hytera-europe.com/imager/images/534817/EN_AP32X_5_7c3bb7433ca337bb1e85cb38e974272e.png",
        },
        {
          id: 23,
          name: "PD605 UL913 - DMR Professional Intrinsically Safe Digital Radio",
          description: "This radio is specially designed for those who work in environments with explosive gas and combustible dust, where using regular radios could be unsafe. Hytera understands the challenges in hazardous environments and is dedicated to designing and developing safer radios for more and more customers. Hytera launched this portable explosion-proof DMR radio with ergonomic and rugged design. Easy to use, long battery life and UL913/TIA4950-rated for safety.",
          price: 29.99,
          imageURL: "https://hytera-europe.com/imager/images/1768/Hytera_PD605_01_5472332afa344033d2bf9e7b6b9d883e.png",
        },
        {
          id: 24,
          name: "PD665 - Slim, professional, digital two-way radio",
          description: "Delivering superior voice clarity and enhanced encryption, the Hytera PD665 handheld digital two-way radio is a compact, high quality device with LCD screen and programmable keys. At just 27mm thick and 310g, this radio is a popular choice and ideal for long shifts.",
          price: 19.99,
          imageURL: "https://hytera-europe.com/imager/images/210867/HP78x.43_02-small_7c3bb7433ca337bb1e85cb38e974272e.png",
        },
        {
          id: 25,
          name: "PD665 UL913 - DMR Professional Intrinsically Safe Digital Radio",
          description: "This radio is specially designed for those who work in environments with explosive gas and combustible dust, where using regular radios could be unsafe. Hytera understands the challenges in hazardous environments and is dedicated to designing and developing safer radios for more and more customers. Hytera launched this portable explosion-proof DMR radio with an ergonomic and rugged design. Easy to use, long battery life and UL913/TIA4950-rated for safety.",
          price: 29.99,
          imageURL: "https://hytera-europe.com/imager/images/1769/Hytera_PD665_01_5472332afa344033d2bf9e7b6b9d883e.png",
        },
        {
          id: 26,
          name: "PD685 - Slim, professional, digital two-way radio",
          description: "Delivering superior voice clarity and enhanced encryption, the Hytera PD685 handheld digital two-way radio is a compact, high quality device with LCD screen and full keypad. At just 27mm thick and 310g, this radio is a popular choice and ideal for long shifts.",
          price: 19.99,
          imageURL: "https://hytera-europe.com/imager/images/901497/en_p30_main_5472332afa344033d2bf9e7b6b9d883e.png",
        },
        {
          id: 27,
          name: "PD685 UL913 - DMR Professional Intrinsically Safe Digital Radio",
          description: "This radio is specially designed for those who work in environments with explosive gas and combustible dust, where using regular radios could be unsafe. Hytera understands the challenges in hazardous environments and is dedicated to designing and developing safer radios for more and more customers. Hytera launched this portable explosion-proof DMR radio with ergonomic and rugged design. Easy to use, long battery life and UL913/TIA4950-rated for safety.",
          price: 29.99,
          imageURL: "https://hytera-europe.com/imager/images/1770/Hytera_PD685_01_5472332afa344033d2bf9e7b6b9d883e.png",
        },
        {
            id: 28,
            name: "PD705 - Versatile, professional digital two-way radio",
            description: "A popular all-rounder, the Hytera PD705 handheld digital two-way radio offers a vast array of functionality, with remarkable build quality, enabling reliable and secure communications in any situation.",
            price: 29.99,
            imageURL: "https://hytera-europe.com/imager/images/1768/Hytera_PD605_01_5472332afa344033d2bf9e7b6b9d883e.png",
          },
          {
            id: 29,
            name: "PD705 UL913 - DMR Professional Intrinsically Safe Digital Radio",
            description: "This Intrinsically Safe portable digital radio offers a vast array of functionality, with the remarkable build quality, enabling reliable and secure communications in any situation. The IS housing makes it ideal for hazardous environments. At just 27mm thick and 310g, this radio is a popular choice and ideal for long shifts.",
            price: 19.99,
            imageURL: "https://hytera-europe.com/imager/images/210867/HP78x.43_02-small_7c3bb7433ca337bb1e85cb38e974272e.png",
          },
          {
            id: 30,
            name: "PD785 - Versatile, professional digital two-way radio",
            description: "A popular all-rounder, the Hytera PD785 handheld digital two-way radio with full keypad and screen offers a vast array of functionality, with remarkable build quality, enabling reliable and secure communications in any situation.",
            price: 29.99,
            imageURL: "https://hytera-europe.com/imager/images/1769/Hytera_PD665_01_5472332afa344033d2bf9e7b6b9d883e.png",
          },
          {
            id: 31,
            name: "PD795Ex - Intrinsically-safe digital two-way radio",
            description: "Offering safe, reliable communications, the Hytera PD795 Ex handheld digital two-way radio with screen and full keypad has been designed to meet the European Atex directives, FM standards and IEC standards, perfect for tough environments that require advanced, intrinsically-safe devices.",
            price: 19.99,
            imageURL: "https://hytera-europe.com/imager/images/901497/en_p30_main_5472332afa344033d2bf9e7b6b9d883e.png",
          },
          {
            id: 32,
            name: "PD985 - Feature-rich digital two-way radio",
            description: "Professional and versatile, the Hytera PD985 is the ultimate handheld digital two-way radio. Offering a range of advanced features and an exceptional audio experience, the PD985 can be utilised in all manner of working environments, playing an integral role in your communication network.",
            price: 29.99,
            imageURL: "https://hytera-europe.com/imager/images/1770/Hytera_PD685_01_5472332afa344033d2bf9e7b6b9d883e.png",
          },
          {
            id: 33,
            name: "PD985 UL913 - DMR Professional Intrinsically Safe Digital Radio",
            description: "PD985(UL913) is a small, light and feature-rich digital two-way radio. It is UL913 certified and can secure the safety in most dangerous areas.",
            price: 29.99,
            imageURL: "https://hytera-europe.com/imager/images/1769/Hytera_PD665_01_5472332afa344033d2bf9e7b6b9d883e.png",
          },
          {
            id: 34,
            name: "PDC550 - PDC550 is a smart PoC radio which enables the collaboration of multiple communication modes",
            description: "PDC550 is a smart PoC radio which enables the collaboration of multiple communication modes including broadband and narrowband networks as well as public and private networks in various scenarios.",
            price: 19.99,
            imageURL: "https://hytera-europe.com/imager/images/31070/PDC550_EN_7c3bb7433ca337bb1e85cb38e974272e.png",
          },
          {
            id: 35,
            name: "PDC680 - Dual-mode Rugged Radio",
            description: "PDC680 dual-mode rugged radio combines a mission-critical DMR radio with an Android-based smartphone in a single device. It harnesses the power of narrowband and broadband technologies to provide mission-critical voice call, photo and video taking, positioning, etc. This innovative radio enables seamless communications between the DMR network and public networks such as 2G, 3G, LTE, and WLAN.",
            price: 29.99,
            imageURL: "https://hytera-europe.com/imager/images/250384/PDC680-Front-View-EN_5472332afa344033d2bf9e7b6b9d883e.png",
          },
    // Add more products as needed
  ];
  
  export default products;
  