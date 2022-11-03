# Spa page

## install dependecies
```
npm i
```

## start json-server 
```
npm run server
```

## launch client 
```
npm run start
```

## Repo structure
```
/
├─ src/
│  ├─ components/                   # Components used in other pages
│  │  └─ navbar/                    # Navbar that is used on every page
│  │ 
│  ├─ contexts/                     # Cart context
│  ├─ helpers/                      # Functions used in other components
│  ├─ hooks/                        # Local storage and Cart context import
│  ├─ pages/                        # Separate project pages
│  │  ├─ cart-page/                 # Page where cart context is applied, displaying items added to cart, allowing to change count or delete item
│  │  ├─ comestics-page/            # Shopping page, allowing to add items to cart (context) or open an individual item page, where multiple items can be added to cart at once
│  │  ├─ facial-page/               # Facial services page - items fetched and filtered from database.json
│  │  ├─ home-page/                 # Home page with 2 main services pages navigation cards
│  │  ├─ login-page/                # Form with Formink and yup
│  │  ├─ massages-page/             # Massages services page - items fetched and filtered from database.json
│  │  ├─ online-reservation-page/   # Form with Formink and yup
│  │  ├─ product-page/              # Individual product shopping page, multiple item count selection add to cart available (context)
│  │  ├─ register-page/             # Form with Formink and yup
│  │  ├─ rituals-page/              # Rituals services page - items fetched and filtered from database.json
│  │  └─ treatments-page/           # Treatments leading to 3 separate pages
│  │
│  ├─ routes/                       # Routing to separate pages
│  ├─ services/                     # Getting data from database.json
│  └─ styles/                       # Theme
│
├─ .env                             # Domain address
├─ .eslintignore                    # List of files and folders not tracked by ESLint
├─ .eslintrc                        # Linting preferences for JavasScript
├─ .gitignore                       # List of files and folders not tracked by Git
├─ database.json                    # Project database
├─ package.json                     # Project manifest
├─ project-conventions.md           # Documentation on project rules
└─ README.md                        # This file
```