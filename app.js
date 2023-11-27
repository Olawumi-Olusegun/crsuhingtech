const accordionList = document.querySelectorAll(".accordion_content");
const accordionButtonNodeList = document.querySelectorAll(".accordion-button");
const checkBoxes = document.querySelectorAll(".checkbox");
const progress = document.querySelector("#progress");
const closeAlertButton = document.querySelector("#close__button");
const pill = document.querySelector(".pill");
const count = document.querySelector("#counter");

const openAndCloseAccordionContainer = document.querySelector(".open__close_accordion");

const toggleMenuBtn = document.querySelector(".avatar"); 
const notificationButton = document.querySelector("#notification__button"); 


const accordionContainer = document.querySelector(".accordion__box-container");


const accordionData = [
    {
    title: "Customize your online store",
    content: "Choose a theme and add your logo, colors, and images to reflect your brand.",
    readMore: "Learn more",
    imgUrl: "https://crushingit.tech/hackathon-assets/customise-store.png",
    buttonText1: "Customize theme",
    },
    {
    title: "Add your first product",
    content: "Write a description, add photos, and set pricing for the products you plan to sell.",
    imgUrl: "https://crushingit.tech/hackathon-assets/product.png",
    readMore: "Learn more",
    buttonText1: "Add Product",
    buttonText2: "Import product",
    },
    {
    title: "Add a custom domain",
    content: "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    imgUrl: "https://crushingit.tech/hackathon-assets/website.png",
    readMore: "Learn more",
    buttonText1: "Add domain",
    },
    {
    title: "Name your store",
    content: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    imgUrl: "https://crushingit.tech/hackathon-assets/name-store.png",
    readMore: "Learn more",
    buttonText1: "Name Store",
    },
    {
    title: "Set up a payment provider",
    content: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
    imgUrl: "https://crushingit.tech/hackathon-assets/payment.png",
    readMore: "Learn more",
    buttonText1: "Setup payment",
    },

];

const accordionTitles = [
    "Customize your online store",
    "Add your first product",
    "Add a custom domain",
    "Name your store",
    "Set up a payment provider",
]

const accordionContent = [
    {
    content: "Choose a theme and add your logo, colors, and images to reflect your brand. Learn more",
    imgUrl: "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg",
    buttonText1: "Customize theme",
    },
    {
    content: "Write a description, add photos, and set pricing for the products you plan to sell. Learn more",
    imgUrl: "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg",
    buttonText1: "Customize theme",
    buttonText2: "Add product",
    },
    {
    content: "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store. Learn more",
    imgUrl: "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg",
    buttonText1: "Customize theme",
    },
    {
    content: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store. Learn more",
    imgUrl: "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg",
    buttonText1: "Name Store",
    },
    {
    content: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store. Learn more",
    imgUrl: "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg",
    buttonText: "Customize theme",
    },

];





let counter = 0;
let progressCount = 0;

const btn = document.querySelector(".dropdownmenu__item");

toggleMenuBtn.addEventListener("click", function() { 
    btn.classList.toggle("toggleMenu");
});

notificationButton.addEventListener("click", function() {
    const alertContainer = document.querySelector(".alert-container");
    alertContainer.classList.toggle("show-alert");
});


function handleProgressAndCounter(event) {
    event.stopPropagation();

    const checkbox = event.target; 
    const label = checkbox.parentNode;

    const loadingIcon = label.querySelector('.loading-icon');
    
    loadingIcon.style.display = 'inline-block';


    const icons = label.querySelectorAll('.icon-svg');
    icons.forEach(icon => icon.style.display = 'none');


  setTimeout(() => {
    const isChecked = checkbox.checked;

    const iconToShow = isChecked ? label.querySelector('.checked-icon') : label.querySelector('.unchecked-icon');
    iconToShow.style.display = 'inline-block';

    loadingIcon.style.display = 'none';
  }, 1000);



    if(this.checked) {
        counter++;
        progressCount += 20;
    }else {
        counter--;
        progressCount -= 20;
    }

    count.textContent = counter;
    progress.style.width = `${progressCount}%`;
    progress.style.backgroundColor = "#1C181D";


}


function handleButtonClick(event) {
    event.stopPropagation();
    const accordionNodeList = document.querySelectorAll('.accordion-item');
   
    accordionNodeList.forEach((accordion) => {
        if (accordion !== event.currentTarget) {
            accordion.classList.remove('expanded');
            accordion.querySelector('.accordion-content').style.maxHeight = '0';
            accordion.classList.remove('toggleActive');
        }
    });


    event.currentTarget.classList.toggle('expanded');
    event.currentTarget.classList.toggle('toggleActive');
    const accordionContent = event.currentTarget.querySelector('.accordion-content');

    if(!event.currentTarget.classList.contains('expanded')) {
        accordionContent.style.maxHeight  =  '0';
    }


}


function loadAccordionContent() {

    accordionData.forEach((item) => {
        const accordionItemTemplate = `
        <div class="accordion-item">
            <div class="accordion__body">

                <button class="accordion-button" arial-label="${item.title} button">
                
                <label for="checkboxLabel" class="checkbox-label">
                    <input id="checkboxLabel" type="checkbox" class="checkbox" />

                    <svg class="icon-svg unchecked-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="12" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
                    </svg>

                    <svg  class="icon-svg checked-icon" style="display:none;" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                        <path
                            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                            fill="#000"
                            >
                        </path>
                  </svg>

                  <div class="loading-icon" style="display:none;">

                  <svg   class="spinner" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                   
                  </div>

                </label>
                    <span class="title">${item.title}</span>                    
                </button>
                    
                <div class="accordion-content">
                   <div class="accordion__text">
                        <p class="accordion__text">
                            <span>
                                ${item.content} ${item.readMore ? `<a href="#" class="link">${item.readMore}</a>` : ''}
                            </span>
                        </p>
    
                        <div class="accordion__action_buttons">
                            ${item.buttonText1 ? `<button href="#" class="btn1 accordion__btn">${item.buttonText1}</button>` : '' }
                            ${item.buttonText2 ? `<button href="#" class="btn1 accordion__btn unstyled-btn">${item.buttonText2}</button>` : '' }
                        </div>
                            
                        
                   </div>
                    <div class="accordionImage">
                        <img src="${item.imgUrl}" alt="${item.title}" class="accImage">
                    </div>
                </div>
            </div>
            
        </div>
    `;

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = accordionItemTemplate;

    const accordionItem = tempContainer.firstElementChild;
    accordionItem.addEventListener('click', handleButtonClick);

    const checkbox = accordionItem.querySelector('.checkbox');
    
    checkbox.addEventListener('click', handleProgressAndCounter);


    const accordionContent = accordionItem.querySelector('.accordion-content');

    accordionContent.addEventListener('click', (event) => event.stopPropagation());

    accordionItem.addEventListener('click', handleButtonClick);
    accordionContainer.appendChild(accordionItem);
    });

}

loadAccordionContent();


closeAlertButton.addEventListener("click" , function() {
    pill.style.display = "none";
});

openAndCloseAccordionContainer.addEventListener("click", function() {
    const accordionContainer = document.querySelector(".accordion__box-container");
    accordionContainer.classList.toggle("openAccordionContainer");
});


const checkboxNodeList = accordionContainer.querySelectorAll('.checkbox');