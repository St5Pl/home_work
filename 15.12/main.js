function createDoc() {
  const rootEl = document.querySelector('.playground');
  const headerCourse = document.createElement('header');
  const asideCourse = document.createElement('aside');
  const mainCourse = document.createElement('main');
  const footerCourse = document.createElement('footer');

  rootEl.append(headerCourse);
  rootEl.append(asideCourse);
  rootEl.append(mainCourse);
  rootEl.append(footerCourse);

  headerCourse.setAttribute('id', 'header-course');
  asideCourse.setAttribute('id', 'aside-course');
  mainCourse.setAttribute('id', 'main-course');
  footerCourse.setAttribute('id', 'footer-course');
  footerCourse.textContent = 'JS Course Beetroot';

  const placeHolder = document.createElement('h2');
  placeHolder.append('Welcome dear strange!!!');
  placeHolder.className = 'place-course';
  placeHolder.addEventListener('click', handlerPlaceHolder);

  mainCourse.append(placeHolder);
  mainCourse.append(authUser());
}

function handlerPlaceHolder() {
  console.log('Evgeniy');
}

createDoc();

function navigation(){
  
  const navigation = document.createElement('ul')
  const about = document.createElement('li')
  const products = document.createElement('li')
  const contacts = document.createElement('li')
  const signIn = document.createElement('li')
  
  about.textContent = 'About'
  products.textContent = 'Products'
  contacts.textContent = 'Contacts'
  signIn.textContent = 'Sign In'
  
  about.setAttribute('id', 'about');
  products.setAttribute('id', 'products');
  contacts.setAttribute('id', 'contacts');
  signIn.setAttribute('id', 'signIn');
 
  navigation.append(about)
  navigation.append(products)
  navigation.append(contacts)
  navigation.append(signIn)
   
  return navigation
}

const headerNav = document.querySelector('header')

headerNav.append(navigation());
