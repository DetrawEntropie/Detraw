document.getElementById('profil').addEventListener("click", function () {
  document.getElementById('exp').style.display = "none";
  document.getElementById('comp').style.display = "none";
  document.getElementById('form').style.display = "none";
  document.getElementById('expe').style.flex = "none";
  document.getElementById('compe').style.flex = "none";
  document.getElementById('forma').style.flex = "none";
  if (document.getElementById('pro').style.display == "block") {
    document.getElementById('pro').style.display = "none";
    document.getElementById('prof').style.flex = "none";
  } else {
    document.getElementById('pro').style.display = "block";
    document.getElementById('prof').style.flex = 1;
  };
});
document.getElementById('experience').addEventListener("click", function () {
  document.getElementById('pro').style.display = "none";
  document.getElementById('comp').style.display = "none";
  document.getElementById('form').style.display = "none";
  document.getElementById('prof').style.flex = "none";
  document.getElementById('compe').style.flex = "none";
  document.getElementById('forma').style.flex = "none";
  if (document.getElementById('exp').style.display == "block") {
    document.getElementById('exp').style.display = "none";
    document.getElementById('expe').style.flex = "none";
  } else {
    document.getElementById('exp').style.display = "block";
    document.getElementById('expe').style.flex = 1;
  };
});
document.getElementById('competences').addEventListener("click", function () {  
  document.getElementById('pro').style.display = "none";
  document.getElementById('exp').style.display = "none";
  document.getElementById('form').style.display = "none";
  document.getElementById('prof').style.flex = "none";
  document.getElementById('expe').style.flex = "none";
  document.getElementById('forma').style.flex = "none";
  if (document.getElementById('comp').style.display == "block") {
    document.getElementById('comp').style.display = "none";
    document.getElementById('compe').style.flex = "none";
  } else {
    document.getElementById('comp').style.display = "block";
    document.getElementById('compe').style.flex = 1;
  };
});

document.getElementById('formation').addEventListener("click", function () {
  document.getElementById('pro').style.display = "none";
  document.getElementById('exp').style.display = "none";
  document.getElementById('comp').style.display = "none";
  document.getElementById('prof').style.flex = "none";
  document.getElementById('expe').style.flex = "none";
  document.getElementById('compe').style.flex = "none";  
  if (document.getElementById('form').style.display == "block") {
    document.getElementById('form').style.display = "none";
    document.getElementById('forma').style.flex = "none";
  } else {
    document.getElementById('form').style.display = "block";
    document.getElementById('forma').style.flex = 1;
  };
});



function Slider (selector, style) {
  if (style && style != undefined) {
    this.style = style;
  }
  var sliders = document.querySelectorAll(selector);
  if (sliders) {
    for (var i = 0; i < sliders.length; i++) {
      this.init(sliders[i]);
    }
  } else {
    return;
  }
}
  
Slider.prototype = {
  style: 'block',
  
  /**
   * Initialisation du slider sur la div selectionnée par le constructeur
   * @param {Node} element 
   */
  init: function (element) {
    var slides = this.getElements(element);
    this.hideSlides(slides);
    this.updateDatas(element, 0);
    this.initPrevButton(element);
    this.initNextButton(element);
  },
  /**
   * écoute l'evennement click sur les boutons suivant
   * @param {Node} element 
   */
  initNextButton (element) {
    var t = this;
    element.querySelector('.next').addEventListener(
      'click',
      function () {
        //this = element cliqué
        console.log('next is clicked');
        var slider = this.parentElement.parentElement;
        t.next(slider);
      }, false
    )
  },

  initPrevButton (element) {
    var t = this;
    element.querySelector('.prev').addEventListener(
      'click',
      function () {
        //this = element cliqué
        console.log('prev is clicked');

        var slider = this.parentElement.parentElement;
        t.prev(slider);
      }, false
    )
  },
  /**
   * récupère l'attribut data-slide en html et le converti en chiffre
   * @param {Node} slider 
   */
  getPosition (slider) {
    var pos = slider.getAttribute('data-slide');
    return Number(pos);
  },
  /**
   * lance la demande de voir le slide précédent
   * @param {Node} slider 
   */
  prev: function (slider) {
    var slides = this.getElements(slider);
    var pos = this.getPosition(slider);
    pos -= 1;
    if ( pos < 0 ) {
      pos = slides.length - 1;
    }
    this.updateDatas(slider, pos);
  },
  /**
   * Lance la demande de voir le slide suivant
   * @param {Node} slider 
   */
  next: function (slider) {
    var slides = this.getElements(slider);
    var pos = this.getPosition(slider);
    pos += 1;
    if ( pos >= slides.length ) {
      pos = 0;
    }
    this.updateDatas(slider, pos);
  },
  /**
   * Récupère la liste des slides dans le html
   * @param {Node} slider 
   * @returns {Array} arr Array of node
   */
  getElements: function (slider) {
    var arr = slider.querySelectorAll('.content > *');
    return arr;
  },
  /**
   * Cache les slides html
   * @param {Array} arr tableau d'element html
   */
  hideSlides: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.display = 'none';
    }
  },
  /**
   * Affiche le slide a l'indice "pos" et change l'attribut "data-slide" du parent. 
   * @param {Node} slider 
   * @param {Number} pos 
   */
  updateDatas: function (slider, pos) {
    var slides = this.getElements(slider);
    this.hideSlides(slides);
    slider.setAttribute('data-slide', pos);
    slides[pos].style.display = this.style;
  }
}

new Slider('.slider');