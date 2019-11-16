var hashTagInput = document.querySelector('.text__hashtags');
var descriptionArea = document.querySelector('.text__description');
var submitButton = document.querySelector('.img-upload__submit');

var errorList = [
    "хеш-тег не может состоять только из одной решётки;",
    'хэш-теги разделяются пробелами;',
    'один и тот же хэш-тег не может быть использован дважды;',
    'нельзя указать больше пяти хэш-тегов;',
    'максимальная длина одного хэш-тега 20 символов, включая решётку.;',

];

var MAX_HASHTAGS = 5;

var generateValuesHandler = function() {
    var inputValue = hashTagInput.value;
    var hashtags = inputValue.split(" ");
    var sortedHashTags = [];
    
    for (var i = 0; i < hashtags.length; i++) {
        sortedHashTags.push(hashtags[i].toLowerCase());
    }

    return sortedHashTags;
};

var hashNotImportant = function() {
    var newArray = [];
    for (var i = 0; i < generateValuesHandler().length; i++) {
        if (generateValuesHandler()[i][0] == '#') {
            newArray.push(generateValuesHandler()[i]);
        } else {
            newArray.push(generateValuesHandler()[i] = '#' + generateValuesHandler()[i]);
        }
    }

    return newArray;
};

var hashAloneHandler = function() {
    for (var i = 0; i < generateValuesHandler().length; i++) {
        if (generateValuesHandler().length == 1 && generateValuesHandler()[0] === '#') {
            hashTagInput.setCustomValidity(errorList[0]);
        } else {
            hashTagInput.setCustomValidity("");
        }
    }
};  

var hashCloneHandler = function(array) {
    var numbers = array;
    
    for (var i = 0; i <= numbers.length - 1; i ++) {
        var check = true;
        for (var j = 0; j <= numbers.length - 1; j ++) {
            if (numbers[j] == numbers[i] && j != i) {
            check = false;
          } 
        }
      }

      if (check == false) {
        hashTagInput.setCustomValidity(errorList[2]);
      }
};

var hashMaxLengthHandler = function(array) {
    for (var i = 0; i < array.length; i++) {
       if (array[i].length > 20) {
        hashTagInput.setCustomValidity(errorList[4]);
       }
    }
};

var notSpaceHandler = function(array) {
    var string = "";

    for (var i = 0; i < array.length; i++) {
        string = array[i];

        var searchTerm = '#';
    
    let pos = 0;
    while (true) {
        let foundPos = string.indexOf(searchTerm, pos);
        if (foundPos == -1) break;

        if (foundPos > 0) {
            hashTagInput.setCustomValidity(errorList[1]);
        }

        pos = foundPos + 1; 
        
        }   
    };
};

var maxNumberHashHandler = function(array) {
    if (array.length >= MAX_HASHTAGS) {
        hashTagInput.setCustomValidity(errorList[3]);
    }
};





hashTagInput.addEventListener("input", function(evt) {
    generateValuesHandler();
    
    hashAloneHandler();

    hashCloneHandler(generateValuesHandler());

    hashMaxLengthHandler(generateValuesHandler());

    notSpaceHandler(generateValuesHandler());

    maxNumberHashHandler(generateValuesHandler());
    
});




