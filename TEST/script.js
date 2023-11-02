 


      const navWithSubMenu = document.querySelectorAll('.with-submenu')
      navWithSubMenu.forEach((item) => {
        item.addEventListener('click', () => {
          item.querySelector('a + ul').classList.toggle('show')
        })
        
      })

    // const backBtn = document.querySelectorAll('[back]')

    // backBtn.forEach((btn) => {
    //   btn.addEventListener('click', () => {
    //     btn.parentElement.classList.toggle('show');
    //   })
    // })
  
