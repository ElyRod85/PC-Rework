  // Share buttons
  const link = 'https://elyrod85.github.io/PC-Rework/';
  const msg = encodeURIComponent('Eleonora is a Front-End Dev & Web Designer, check out her portfolio project!');
  const title = encodeURIComponent(document.querySelector('title').textContent);

  const fb = document.querySelector('.facebook');
  fb.href = `https://www.facebook.com/sharer.php?u=${link}`;

  const twitter = document.querySelector('.twitter');
  twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}&hashtags=frontend,webdesign`;

  const whatsApp = document.querySelector('.whatsapp');
  whatsApp.href = `https://wa.me/?text=${msg} ${link}`;

  const sendEmail = document.querySelector('.sendemail');
  sendEmail.href = `mailto:?subject=${title}&body=${msg} ${link}`;


  // Print recipe
  document.getElementById('printButton').addEventListener('click', () => { window.print() });